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
            <strong>Golden solution</strong>
            <span>
              Reference final output for a task. On the platform, you check
              whether one exists and whether it matches the expected
              deliverable.
            </span>
          </li>
          <li>
            <strong>Rubric / verifier</strong>
            <span>
              Criteria or checks that define successful completion—must measure
              the real requirements, not vague vibes.
            </span>
          </li>
          <li>
            <strong>Structured UI / accessibility info</strong>
            <span>
              Machine-readable description of on-screen elements (buttons,
              fields, labels) some agents use alongside or instead of
              screenshots.
            </span>
          </li>
          <li>
            <strong>Multi-app workflow</strong>
            <span>
              A task that requires coordinating more than one application to
              produce the final deliverable.
            </span>
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>What You Should Use While Reviewing</h2>
        <div className="section-body">
          <ul className="plain-list">
            <li>These Project Copperhead guidelines (this site)</li>
            <li>The assigned task materials on the contributor platform</li>
            <li>Your own professional judgment for the listed domain</li>
          </ul>
          <p>
            Do not look up external research papers, project websites, or third
            parties for this engagement. Everything you need for review is on
            the platform or in these guidelines.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Open Items</h2>
        <div className="section-body">
          <ul className="plain-list">
            <li>
              <strong>Failure Modes</strong> platform wording may still be
              refined—until then, answer with 1–2 concrete risks that could
              block successful completion.
            </li>
            <li>
              A separate Task Quality Rating Guide may be added later for the
              7-point overall quality question.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
