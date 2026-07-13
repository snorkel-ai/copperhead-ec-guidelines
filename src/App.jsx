import { useMemo, useState } from "react";
import { buildCopperheadContent, COPPERHEAD_TABS } from "./content/CopperheadContent";

const AUTH_STORAGE_KEY = "copperhead-auth-email";
/** Local content drafting only — never set this for GitHub Pages builds. */
const AUTH_DISABLED = import.meta.env.VITE_DISABLE_AUTH === "true";

function normalizeWhitelistEntry(item) {
  let s = String(item).trim().toLowerCase();
  if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"))) {
    s = s.slice(1, -1).trim().toLowerCase();
  }
  if (s.startsWith("<") && s.endsWith(">")) {
    s = s.slice(1, -1).trim().toLowerCase();
  }
  return s;
}

/** Parse Copperhead-only allowlist from VITE_COPPERHEAD_WHITELIST. */
export function parseCopperheadWhitelist(raw) {
  let str = raw == null ? "" : String(raw).trim();
  if (str === "" || str === "undefined" || str === "null") return [];
  // GitHub Actions sometimes passes toJSON()-wrapped strings with outer quotes + \n escapes.
  if (str.startsWith('"') && str.endsWith('"') && str.length >= 2) {
    try {
      const parsed = JSON.parse(str);
      if (typeof parsed === "string") str = parsed;
    } catch {
      /* keep str */
    }
  }
  return str
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .split(/[,;\n]+/)
    .map((item) => normalizeWhitelistEntry(item))
    .filter(Boolean);
}

function isEmailOnAllowlist(email, whitelist) {
  if (!email || whitelist.length === 0) return false;
  return whitelist.includes(email.trim().toLowerCase());
}

export default function App() {
  const whitelist = useMemo(
    () => parseCopperheadWhitelist(import.meta.env.VITE_COPPERHEAD_WHITELIST),
    []
  );

  const [email, setEmail] = useState("");
  const [signedInEmail, setSignedInEmail] = useState(() => {
    if (AUTH_DISABLED) return "dev@local";
    const stored = sessionStorage.getItem(AUTH_STORAGE_KEY) || "";
    const list = parseCopperheadWhitelist(import.meta.env.VITE_COPPERHEAD_WHITELIST);
    if (!isEmailOnAllowlist(stored, list)) {
      sessionStorage.removeItem(AUTH_STORAGE_KEY);
      return "";
    }
    return stored.toLowerCase();
  });
  const [statusMessage, setStatusMessage] = useState("");
  const [activeTab, setActiveTab] = useState("overview");
  const content = useMemo(() => buildCopperheadContent(setActiveTab), []);

  const allowlistConfigured = whitelist.length > 0;
  const isAuthorized =
    AUTH_DISABLED || isEmailOnAllowlist(signedInEmail, whitelist);

  const handleSignIn = (event) => {
    event.preventDefault();
    const normalized = email.trim().toLowerCase();
    if (!normalized) return;

    if (!allowlistConfigured) {
      setStatusMessage(
        "Copperhead allowlist is not configured. Access is locked until VITE_COPPERHEAD_WHITELIST is set."
      );
      return;
    }

    if (!isEmailOnAllowlist(normalized, whitelist)) {
      setStatusMessage("That email is not on the Project Copperhead allowlist.");
      return;
    }

    sessionStorage.setItem(AUTH_STORAGE_KEY, normalized);
    setSignedInEmail(normalized);
    setStatusMessage("");
  };

  const handleSignOut = () => {
    sessionStorage.removeItem(AUTH_STORAGE_KEY);
    setSignedInEmail("");
    setEmail("");
    setStatusMessage("");
  };

  if (!isAuthorized) {
    return (
      <main className="page">
        <div className="content auth-card">
          <div className="header-title" style={{ marginBottom: "16px" }}>
            <img
              src={`${import.meta.env.BASE_URL}images/snorkel-logo.png`}
              alt="Snorkel Logo"
              className="snorkel-logo"
            />
            <div className="header-divider" />
            <h1>Sign In — Project Copperhead</h1>
          </div>
          <p>
            Access is restricted to emails on the{" "}
            <strong>Project Copperhead</strong> allowlist. This list is separate
            from Project Eagle / EnterpriseEnv training sites.
          </p>
          <form className="auth-form" onSubmit={handleSignIn}>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@company.com"
              required
              disabled={!allowlistConfigured && !AUTH_DISABLED}
            />
            <button type="submit" disabled={!allowlistConfigured}>
              Continue
            </button>
          </form>
          {statusMessage ? <p className="status status-error">{statusMessage}</p> : null}
          {!allowlistConfigured ? (
            <p className="status status-error">
              No Copperhead allowlist is loaded for this build. Set{" "}
              <code>VITE_COPPERHEAD_WHITELIST</code> (local <code>.env.local</code>{" "}
              or the GitHub Actions variable of the same name) and rebuild.
            </p>
          ) : null}
        </div>
      </main>
    );
  }

  return (
    <main className="page">
      <div className="content">
        <div className="header-row">
          <div className="header-title">
            <img
              src={`${import.meta.env.BASE_URL}images/snorkel-logo.png`}
              alt="Snorkel Logo"
              className="snorkel-logo"
            />
            <div className="header-divider" />
            <h1>Project Copperhead</h1>
          </div>
          {!AUTH_DISABLED ? (
            <button type="button" className="secondary-btn" onClick={handleSignOut}>
              Sign out
            </button>
          ) : null}
        </div>

        <nav className="tabs">
          {COPPERHEAD_TABS.map((tab) =>
            tab.children ? (
              <div key={tab.key} className="tab-dropdown">
                <button
                  type="button"
                  className={`tab ${
                    tab.children.some((c) => c.key === activeTab) ? "tab-active" : ""
                  }`}
                >
                  {tab.label}
                  <svg
                    className={`tab-arrow ${
                      tab.children.some((c) => c.key === activeTab)
                        ? "tab-arrow-active"
                        : ""
                    }`}
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div className="tab-dropdown-menu">
                  {tab.children.map((child) => (
                    <button
                      key={child.key}
                      type="button"
                      className={`tab-dropdown-item ${
                        activeTab === child.key ? "tab-dropdown-item-active" : ""
                      }`}
                      onClick={() => setActiveTab(child.key)}
                    >
                      {child.label}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <button
                key={tab.key}
                type="button"
                className={`tab ${activeTab === tab.key ? "tab-active" : ""}`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            )
          )}
        </nav>

        <div className="tab-panel">
          {content[activeTab] ?? (
            <section className="section">
              <h2>Missing section</h2>
              <p>No content registered for tab key: {activeTab}</p>
            </section>
          )}
        </div>
      </div>
    </main>
  );
}
