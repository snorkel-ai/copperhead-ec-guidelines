export function GettingStartedSection({ setActiveTab, focus = "all" }) {
  const showAccess = focus === "all" || focus === "access";
  const showWorkflow = focus === "all" || focus === "workflow";

  return (
    <div className="workflow-content">
      {showAccess ? (
        <section className="section">
          <h2>Access &amp; Setup</h2>
          <div className="section-body">
            <p>To review Project Copperhead tasks you need:</p>
            <ul className="plain-list">
              <li>
                <strong>Snorkel Expert / contributor platform access</strong> —
                task assignments appear there.
              </li>
              <li>
                <strong>These guidelines</strong> (this site) — open alongside
                the platform while you review.
              </li>
              <li>
                <strong>Your domain expertise</strong> — judge realism the way a
                mid-level professional in the field would.
              </li>
            </ul>
            <p>
              <strong>Troubleshooting:</strong> If you cannot access the
              platform or a task, post in the project Slack channel (or contact
              your engagement lead).
            </p>
          </div>
        </section>
      ) : null}

      {showWorkflow ? (
        <section className="section">
          <h2>Workflow Basics</h2>
          <ol className="numbered-steps">
            <li>
              Open the assigned Copperhead task on the contributor platform.
            </li>
            <li>
              Read the task instruction, listed applications/tools, provided
              files, and evaluation assets carefully before answering.
            </li>
            <li>
              Walk the platform form section by section using the{" "}
              <button
                type="button"
                className="inline-link"
                onClick={() => setActiveTab("platform-review")}
              >
                Platform Review Guide
              </button>
              .
            </li>
            <li>
              When a field asks for a rationale (usually after a{" "}
              <strong>No</strong>), be specific: name the missing file, unclear
              step, wrong app, or mismatched golden output.
            </li>
            <li>
              Complete the submission attestation and time-to-complete fields.
            </li>
          </ol>
        </section>
      ) : null}

      {showAccess || showWorkflow ? (
        <section className="section">
          <h2>Rules That Always Apply</h2>
          <ul className="workflow-list">
            <li>
              <strong>No AI / LLM assistance during review</strong>
              <span>
                The platform requires an AI-use attestation. Do not use ChatGPT,
                Copilot, or similar tools while completing Copperhead reviews.
                Rely on your own domain judgment.
              </span>
            </li>
            <li>
              <strong>Be concrete when saying No</strong>
              <span>
                Conditional text blocks exist so production can fix tasks. Vague
                feedback is less useful than naming the exact gap.
              </span>
            </li>
            <li>
              <strong>Skip when out of domain</strong>
              <span>
                If the professional domain is outside your expertise, skip the
                task rather than guessing.
              </span>
            </li>
          </ul>
        </section>
      ) : null}
    </div>
  );
}
