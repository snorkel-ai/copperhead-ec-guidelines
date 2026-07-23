export function InstructionsRatingSection() {
  return (
    <div className="workflow-content">
      <section className="section">
        <h2>Rating Task Instructions</h2>
        <div className="section-body">
          <p>
            Imagine a colleague sends you this request without any additional
            explanation. Rate the quality of the{" "}
            <strong>task instructions only</strong>—not the files,
            applications, verifier, or overall task.
          </p>
          <p>Consider questions such as:</p>
          <ul className="plain-list">
            <li>Are the instructions clear and easy to understand?</li>
            <li>Is the requested work well-defined?</li>
            <li>Would you know exactly what deliverable is expected?</li>
            <li>Are any important details missing?</li>
            <li>
              Do the instructions contradict themselves or require you to guess
              what to do?
            </li>
          </ul>
          <p>
            Focus only on the written instructions themselves. Assume the
            required files and applications exist unless the instructions fail
            to identify or reference them appropriately.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Score Guide</h2>
        <ul className="rating-cards">
          <li>
            <strong>5 — Excellent</strong>
            <span>
              The instructions read like a high-quality request from a
              professional colleague. They are clear, complete, logically
              organized, and unambiguous. The objective, required deliverable,
              and any important constraints are all explicit. A domain expert
              could begin work immediately without asking follow-up questions
              or making assumptions.
            </span>
          </li>
          <li>
            <strong>4 — Good</strong>
            <span>
              The instructions are generally clear and complete, with only
              minor opportunities for improvement. A few details could be
              worded more clearly or organized better, but nothing would
              prevent a professional from understanding the request or
              producing the correct deliverable. No meaningful guessing is
              required.
            </span>
          </li>
          <li>
            <strong>3 — Fair</strong>
            <span>
              The overall objective is understandable, but the instructions
              contain noticeable ambiguity or omissions. A professional could
              probably complete the task, but would likely need to make one or
              more reasonable assumptions or ask clarifying questions about
              requirements, scope, or the expected output.
            </span>
          </li>
          <li>
            <strong>2 — Poor</strong>
            <span>
              The instructions are difficult to follow because important
              information is missing, vague, poorly organized, or internally
              inconsistent. A professional would not be confident they
              understood what was being requested and would likely need
              significant clarification before beginning work.
            </span>
          </li>
          <li>
            <strong>1 — Invalid / Does not make sense</strong>
            <span>
              The instructions are fundamentally unusable. The objective is
              unclear or contradictory, the requested work cannot be
              determined, or the instructions are so incomplete that a
              reasonable professional would not know what task they are being
              asked to perform.
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
}
