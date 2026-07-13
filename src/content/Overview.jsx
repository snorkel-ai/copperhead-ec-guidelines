export function OverviewSection() {
  return (
    <div className="workflow-content">
      <section className="section">
        <h2>What This Project Is About</h2>
        <div className="section-body">
          <p>
            The goal of <strong>Project Copperhead</strong> is to build{" "}
            <strong>computer-use agent (CUA)</strong> environments and tasks that
            reflect real, complex professional work. These tasks represent the
            multi-step workflows people perform across desktop applications,
            terminal environments, and web services to produce a concrete
            deliverable.
          </p>
          <p>
            Within the Snorkel contributor platform, you will be provided with all
            of the information needed to evaluate each task. As a domain expert,
            your responsibility is to determine whether the task is{" "}
            <strong>well-designed</strong>, <strong>realistic</strong>, and{" "}
            <strong>appropriate for the specified professional domain</strong>, and
            to assess or refine the task solution. Your feedback will drive
            improvements in these tasks and the pipeline.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>How Your Work Fits In</h2>
        <ul className="workflow-list">
          <li>
            <strong>Task quality</strong>
            <span>
              Decide if instructions, files, apps, and deliverables form a
              realistic professional workflow someone in the domain would
              actually perform.
            </span>
          </li>
          <li>
            <strong>Evaluation assets</strong>
            <span>
              Check that rubrics / verifiers and golden solutions correctly
              measure successful completion—not just that something looks
              plausible.
            </span>
          </li>
          <li>
            <strong>Overall assessment</strong>
            <span>
              Call out failure risks, rate overall quality, estimate time and
              difficulty for a mid-level professional working without LLMs.
            </span>
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>Why Background Context Matters</h2>
        <div className="section-body">
          <p>
            Copperhead tasks involve open-ended computer use on real desktops.
            Agents observe the screen (and sometimes structured UI information),
            issue keyboard and mouse actions, and must finish multi-step,
            often multi-app workflows. Humans still succeed far more often than
            current models—your reviews help keep tasks fair, solvable, and
            professionally credible.
          </p>
          <p>
            If you are new to computer-use agents, read the{" "}
            <strong>Computer-Use Background</strong> tab before your first
            reviews. Use the <strong>Platform Review Guide</strong> tab while
            working a live task on the contributor platform.
          </p>
        </div>
      </section>
    </div>
  );
}
