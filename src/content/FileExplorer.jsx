import { useEffect, useMemo, useState } from "react";
import manifest from "./taskFilesManifest.json";
import fileContents from "./taskFileContents.json";

const TASKS = manifest.tasks;

function fileUrl(path) {
  return `${import.meta.env.BASE_URL}task-files/${path
    .split("/")
    .map(encodeURIComponent)
    .join("/")}`;
}

function formatBytes(n) {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / (1024 * 1024)).toFixed(1)} MB`;
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    const next = text[i + 1];
    if (inQuotes) {
      if (ch === '"' && next === '"') {
        cell += '"';
        i++;
      } else if (ch === '"') {
        inQuotes = false;
      } else {
        cell += ch;
      }
    } else if (ch === '"') {
      inQuotes = true;
    } else if (ch === ",") {
      row.push(cell);
      cell = "";
    } else if (ch === "\n") {
      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";
    } else if (ch === "\r") {
      /* skip */
    } else {
      cell += ch;
    }
  }
  if (cell.length || row.length) {
    row.push(cell);
    rows.push(row);
  }
  return rows.filter((r) => r.some((c) => String(c).trim() !== ""));
}

function DataTable({ rows }) {
  if (!rows.length) return <p className="fe-empty">This file has no rows.</p>;
  const [header, ...body] = rows;
  return (
    <div className="fe-table-wrap">
      <table className="fe-data-table">
        <thead>
          <tr>
            {header.map((h, i) => (
              <th key={i}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((r, ri) => (
            <tr key={ri}>
              {header.map((_, ci) => (
                <td key={ci}>{r[ci] ?? ""}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FileViewer({ file }) {
  const url = fileUrl(file.path);
  const cached = fileContents[file.path];

  if (!cached || cached.kind === "download-only") {
    return (
      <div className="fe-error">
        <p>In-browser preview is not available for this file type.</p>
        <a href={url} download={file.name}>
          Download {file.name}
        </a>
      </div>
    );
  }

  if (cached.kind === "pdf") {
    return <iframe className="fe-pdf-frame" title={file.name} src={url} />;
  }

  if (cached.kind === "pdf-preview") {
    return (
      <div className="fe-pdf-preview">
        <div className="fe-preview-note">
          Rendered PDF preview of <strong>{file.name}</strong>.{" "}
          <a href={url} download={file.name}>
            Download the original file
          </a>{" "}
          to open it in its native application.
        </div>
        <iframe
          className="fe-pdf-frame"
          title={`${file.name} (PDF preview)`}
          src={fileUrl(cached.preview)}
        />
      </div>
    );
  }

  if (cached.kind === "email") {
    const h = cached.headers || {};
    return (
      <div className="fe-email">
        <div className="fe-email-head">
          <h3 className="fe-email-subject">{h.subject || "(no subject)"}</h3>
          <dl className="fe-email-meta">
            <div>
              <dt>From</dt>
              <dd>{h.from || "—"}</dd>
            </div>
            <div>
              <dt>To</dt>
              <dd>{h.to || "—"}</dd>
            </div>
            {h.date ? (
              <div>
                <dt>Date</dt>
                <dd>{h.date}</dd>
              </div>
            ) : null}
          </dl>
        </div>
        <div className="fe-email-body">
          {cached.html ? (
            <div
              className="fe-docx-html"
              dangerouslySetInnerHTML={{ __html: cached.html }}
            />
          ) : (
            <pre className="fe-text">{cached.text}</pre>
          )}
        </div>
      </div>
    );
  }

  if (cached.kind === "html") {
    return (
      <div
        className="fe-docx-html"
        dangerouslySetInnerHTML={{ __html: cached.html }}
      />
    );
  }

  if (cached.kind === "sheets") {
    return (
      <div className="fe-sheets">
        {cached.sheets.map((sheet) => (
          <div key={sheet.name} className="fe-sheet">
            {cached.sheets.length > 1 ? (
              <h3 className="fe-sheet-title">{sheet.name}</h3>
            ) : null}
            <DataTable rows={sheet.rows} />
          </div>
        ))}
      </div>
    );
  }

  if (cached.kind === "text") {
    if (file.ext === "csv") {
      return <DataTable rows={parseCsv(cached.text)} />;
    }
    return <pre className="fe-text">{cached.text}</pre>;
  }

  return (
    <div className="fe-error">
      <p>Could not render this file.</p>
      <a href={url} download={file.name}>
        Download instead
      </a>
    </div>
  );
}

export default function FileExplorer() {
  const [selectedTaskId, setSelectedTaskId] = useState(
    TASKS.find((t) => t.id === "hmda_fair_lending_review")?.id || TASKS[0]?.id
  );
  const [search, setSearch] = useState("");
  const selectedTask = TASKS.find((t) => t.id === selectedTaskId) || TASKS[0];

  const filteredFiles = useMemo(() => {
    if (!selectedTask) return [];
    const q = search.trim().toLowerCase();
    if (!q) return selectedTask.files;
    return selectedTask.files.filter(
      (f) =>
        f.name.toLowerCase().includes(q) ||
        f.kind.toLowerCase().includes(q) ||
        f.ext.toLowerCase().includes(q)
    );
  }, [selectedTask, search]);

  const [selectedPath, setSelectedPath] = useState(
    selectedTask?.files[0]?.path || ""
  );

  useEffect(() => {
    const stillVisible = filteredFiles.some((f) => f.path === selectedPath);
    if (!stillVisible) {
      setSelectedPath(filteredFiles[0]?.path || "");
    }
  }, [selectedTaskId, filteredFiles, selectedPath]);

  const selectedFile =
    selectedTask?.files.find((f) => f.path === selectedPath) || null;

  return (
    <div className="workflow-content">
      <section className="section">
        <h2>File Explorer</h2>
        <div className="section-body">
          <p>
            Browse required task files by task ID and open them in full here.
            Use this when reviewing{" "}
            <strong>Resources for Completion</strong> so you can inspect every
            attached file without leaving the guidelines.
          </p>
          <p>
            Find the task ID from the platform assignment, select it in the
            sidebar, then open each file listed under Required Files.
          </p>
        </div>
      </section>

      <div className="fe-explorer">
        <aside className="fe-sidebar">
          <div className="fe-sidebar-header">
            <label className="fe-label" htmlFor="fe-task-select">
              Task ID
            </label>
            <select
              id="fe-task-select"
              className="fe-task-select"
              value={selectedTaskId}
              onChange={(e) => {
                setSelectedTaskId(e.target.value);
                setSearch("");
              }}
            >
              {TASKS.map((task) => (
                <option key={task.id} value={task.id}>
                  {task.id}
                </option>
              ))}
            </select>
            <div className="fe-task-label">{selectedTask?.label}</div>
            <span className="fe-sidebar-count">
              {selectedTask?.files.length || 0} files
            </span>
            <input
              type="text"
              className="fe-search"
              placeholder="Filter files..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <ul className="fe-file-list">
            {filteredFiles.map((file) => (
              <li key={file.path}>
                <button
                  type="button"
                  className={`fe-file-btn ${
                    file.path === selectedPath ? "fe-file-btn-active" : ""
                  }`}
                  onClick={() => setSelectedPath(file.path)}
                >
                  <span className="fe-file-name">{file.name}</span>
                  <span className="fe-file-meta">
                    {file.ext.toUpperCase()} · {formatBytes(file.size_bytes)}
                  </span>
                </button>
              </li>
            ))}
            {filteredFiles.length === 0 ? (
              <li className="fe-no-results">No files match your filter.</li>
            ) : null}
          </ul>
        </aside>

        <div className="fe-main">
          {selectedFile ? (
            <>
              <div className="fe-main-header">
                <div>
                  <h2 className="fe-main-title">{selectedFile.name}</h2>
                  <span className="fe-main-stats">
                    {selectedTask.id} · {selectedFile.kind} ·{" "}
                    {selectedFile.ext.toUpperCase()} ·{" "}
                    {formatBytes(selectedFile.size_bytes)}
                  </span>
                </div>
                <a
                  className="fe-download"
                  href={fileUrl(selectedFile.path)}
                  download={selectedFile.name}
                >
                  Download
                </a>
              </div>
              <div className="fe-viewer">
                <FileViewer file={selectedFile} key={selectedFile.path} />
              </div>
            </>
          ) : (
            <p className="fe-empty">Select a file to preview.</p>
          )}
        </div>
      </div>
    </div>
  );
}
