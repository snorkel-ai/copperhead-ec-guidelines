export function ReferenceSection() {
  return (
    <div className="workflow-content">
      <section className="section">
        <h2>Key Terms</h2>
        <ul className="term-list">
          <li>
            <strong>CUA / computer-use agent</strong>
            <span>
              An agent that operates a real computer via keyboard/mouse (and
              optionally terminal) to complete multi-step digital work.
            </span>
          </li>
          <li>
            <strong>Task Instructions</strong>
            <span>
              The written professional request describing the goal, context, and
              deliverable for the agent to complete.
            </span>
          </li>
          <li>
            <strong>Rubric and Weights</strong>
            <span>
              Categories and percentage weights used to score successful task
              completion; should align with what the Task Instructions ask for.
            </span>
          </li>
          <li>
            <strong>Reference Solution Path</strong>
            <span>
              Proposed step-by-step / subgoal sequence for completing the task.
              Review it for realism and completeness; do not execute it.
            </span>
          </li>
          <li>
            <strong>Distractors</strong>
            <span>
              Plausible but irrelevant or outdated materials (e.g., conflicting
              drafts) that add fair difficulty without making the correct
              solution unavailable.
            </span>
          </li>
          <li>
            <strong>ETC</strong>
            <span>
              Estimated Time to Complete — how long a competent professional
              would need to finish the underlying task (not your review time).
            </span>
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>What You Should Use While Reviewing</h2>
        <div className="section-body">
          <ul className="plain-list">
            <li>These Project Copperhead guidelines (this site)</li>
            <li>The Snorkel Expert Platform task materials</li>
            <li>
              Slack — especially{" "}
              <code>#copperhead-ec-announcements</code> and the Copperhead
              channel canvas
            </li>
            <li>Your own professional judgment for the listed domain</li>
          </ul>
          <p>
            Do not look up external research papers, project websites, or third
            parties for this engagement. Everything you need for review is on
            the platform or in these guidelines.
          </p>
        </div>
      </section>
    </div>
  );
}
