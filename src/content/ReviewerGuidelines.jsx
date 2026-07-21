export function ReviewerGuidelinesSection() {
  return (
    <div className="workflow-content">
      <section className="section">
        <h2>Reviewer Guidelines</h2>
        <div className="callout callout-warn">
          <strong>Under construction</strong>
          <p>
            Full reviewer guidelines are still being finalized. The Error Flags
            below are the current reference for how reviewers mark tasks that do
            not meet specifications.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Error Flags</h2>
        <div className="section-body">
          <p>
            The following items are known as &quot;Error Flags.&quot; These are
            what reviewers mark tasks with in order to signal that the tasks do
            not meet specifications for a certain reason.
          </p>
        </div>
        <ul className="workflow-list">
          <li>
            <strong>Low-Detail / Surface-Level Analysis</strong>
            <span>
              Vague or generic notes that do not engage the domain, task-specific
              instructions, apps, files/distractors, rubric categories, or
              reference solution path.
            </span>
          </li>
          <li>
            <strong>Instruction or Deliverable Misread</strong>
            <span>
              Misstates the goal, whether instructions are procedural, or what
              &quot;done&quot; means (wrong artifact type, missing Submit/end
              state, or invents requirements not in the Task Instructions).
            </span>
          </li>
          <li>
            <strong>Rubric Misjudgment</strong>
            <span>
              Vastly incorrect weight of Agree/Higher/Lower calls, skipped
              categories, or wrong claims about missing/unnecessary categories or
              rubric↔instruction alignment relative to the Rubric and Weights
              table.
            </span>
          </li>
          <li>
            <strong>Resources / Feasibility Misassessment</strong>
            <span>
              Incorrect claim that apps, required files, distractors, or the
              reference solution path make the task unfair, unusable, or
              unsolvable.
            </span>
          </li>
          <li>
            <strong>Logical Inconsistency</strong>
            <span>
              Final rating contradicts the written conditionals or each other
              (e.g., &quot;deliverable is clear&quot; paired with notes
              describing an unclear end state).
            </span>
          </li>
          <li>
            <strong>Spam, Low-Quality, &amp; AI Output</strong>
            <span>
              The response is vague, generic, or obviously automated. It lacks
              specific asset references (e.g., direct quotes, category/file/path
              names) or contains clear AI hallucinations and features not
              actually present in the asset.
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
}
