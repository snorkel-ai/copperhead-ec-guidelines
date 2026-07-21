export function DifficultyRatingSection() {
  return (
    <div className="workflow-content">
      <section className="section">
        <h2>Rating Task Difficulty</h2>
        <div className="section-body">
          <p>
            Imagine assigning this task to a competent mid-level professional
            working in the relevant field. Assume they have the appropriate
            software, files, and typical workplace resources available, but no
            access to LLMs or AI assistants.
          </p>
          <p>
            Rate the difficulty of completing the{" "}
            <strong>task itself</strong>—not the quality of the instructions.
          </p>
          <p>Consider questions such as:</p>
          <ul className="plain-list">
            <li>How much domain expertise is required?</li>
            <li>How much independent reasoning or judgment is needed?</li>
            <li>How technically or procedurally complex is the work?</li>
            <li>How many meaningful steps or decisions are involved?</li>
            <li>
              Would this be considered routine work for a professional, or
              something unusually challenging?
            </li>
          </ul>
          <p>
            Focus on the work required to successfully complete the task, not
            how long it takes.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Score Guide</h2>
        <ul className="rating-cards">
          <li>
            <strong>5 — Very Difficult</strong>
            <span>
              The task requires deep domain expertise, advanced technical
              knowledge, or substantial independent judgment. A mid-level
              professional would find it challenging and would need to solve
              complex problems, synthesize information from multiple sources, or
              make numerous consequential decisions. This is work that would
              typically be assigned to experienced professionals or specialists.
            </span>
          </li>
          <li>
            <strong>4 — Difficult</strong>
            <span>
              The task requires solid professional knowledge and involves
              multiple non-trivial decisions or technical steps. A mid-level
              professional should be able to complete it successfully but would
              need to think carefully, apply expertise throughout the process,
              and avoid several potential pitfalls.
            </span>
          </li>
          <li>
            <strong>3 — Average Difficulty</strong>
            <span>
              The task reflects routine professional work. It requires relevant
              domain knowledge and some judgment, but the workflow is generally
              familiar to someone with experience in the field. Most mid-level
              professionals could complete it without unusual difficulty.
            </span>
          </li>
          <li>
            <strong>2 — Easy</strong>
            <span>
              The task is straightforward and follows well-established
              procedures. It requires only limited professional judgment and
              consists primarily of routine actions that someone in the field
              performs regularly. Most mid-level professionals would complete it
              with little effort.
            </span>
          </li>
          <li>
            <strong>1 — Very Easy</strong>
            <span>
              The task is extremely simple or administrative in nature. It
              requires little specialized knowledge, minimal decision-making, and
              almost no technical complexity. A professional could complete it
              quickly with little cognitive effort.
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
}
