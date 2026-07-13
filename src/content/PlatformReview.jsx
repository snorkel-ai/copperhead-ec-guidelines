/**
 * EC-facing walkthrough of the Copperhead contributor-platform review form.
 */

function FieldBlock({ title, question, format, whenNo }) {
  return (
    <div className="field-block">
      <h4>{title}</h4>
      <p>
        <strong>Question:</strong> {question}
      </p>
      <p className="field-meta">
        <strong>Format:</strong> {format}
      </p>
      {whenNo ? (
        <p className="field-conditional">
          <strong>If No:</strong> {whenNo}
        </p>
      ) : null}
    </div>
  );
}

export function PlatformReviewSection() {
  return (
    <div className="workflow-content">
      <section className="section">
        <h2>Platform Review Guide</h2>
        <div className="section-body">
          <p>
            This is the form you complete on the contributor platform for each
            Copperhead task. Work top to bottom. Most items are Yes / No; a{" "}
            <strong>No</strong> almost always unlocks a required text rationale.
          </p>
          <p className="source-note">
            Failure Modes guidance may still be refined on the platform—use the
            note in Section 4 until final wording is locked.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Section 1 — Task Setup &amp; Resources</h2>
        <FieldBlock
          title="Domain Alignment"
          question="Is this task representative of work that a professional in this field would typically perform?"
          format="Boolean (Yes / No)"
          whenNo="Explain why it does not align with the listed domain. If applicable, suggest the correct domain or the changes needed to make it domain-appropriate."
        />
        <FieldBlock
          title="Applications &amp; Tools"
          question="Are the listed applications appropriate and sufficient for completing this task?"
          format="Boolean (Yes / No)"
          whenNo="Explain why they are inappropriate or insufficient. Suggest which applications should be added or removed."
        />
        <FieldBlock
          title="Required Files"
          question="Are all files required to complete this task provided?"
          format="Boolean (Yes / No)"
          whenNo="List the missing files required to complete this task."
        />
        <FieldBlock
          title="File Functionality"
          question="Can all of the provided files be opened with no issues?"
          format="Boolean (Yes / No)"
          whenNo="Specify which files cannot be opened and describe any error encountered."
        />
        <FieldBlock
          title="File Usability"
          question="Are all files in the correct format (extension) to be fully usable for the task?"
          format="Boolean (Yes / No)"
          whenNo="Identify incorrect extensions or unusable files, and provide the correct formats needed."
        />
      </section>

      <section className="section">
        <h2>Section 2 — Task Design</h2>
        <FieldBlock
          title="Instruction Clarity — Goal &amp; Context"
          question="Is the goal and context provided in the instructions?"
          format="Boolean (Yes / No)"
        />
        <FieldBlock
          title="Instruction Clarity — Procedure"
          question="Is a procedure provided in the instructions?"
          format="Boolean (Yes / No)"
        />
        <FieldBlock
          title="Instruction Clarity — Expert Usability"
          question="Are the instructions for this task clear, comprehensive, and logically structured from the viewpoint of a subject matter expert?"
          format="Boolean (Yes / No)"
          whenNo="Detail which parts lack clarity, completeness, or logic. Suggest specific edits."
        />
        <FieldBlock
          title="Deliverable Feasibility"
          question="Is the requested final deliverable achievable using only the provided instructions, files, and applications?"
          format="Boolean (Yes / No)"
          whenNo="Explain what prevents achievement (missing steps, tool limitations, conflicting constraints)."
        />
      </section>

      <section className="section">
        <h2>Section 3 — Evaluation Assets</h2>
        <FieldBlock
          title="Evaluation Rubric / Verifier"
          question="Do all rubric items accurately measure the requirements needed for successful completion of the task?"
          format="Boolean (Yes / No)"
          whenNo="Identify missing, inaccurate, subjective, unnecessary, or misaligned rubric items and explain how the rubric should be revised."
        />
        <FieldBlock
          title="Golden Solution — Presence"
          question="Does the final output contain a golden solution?"
          format="Boolean (Yes / No)"
        />
        <FieldBlock
          title="Golden Solution — Alignment (if Yes above)"
          question="Does the golden solution align with the expected final output listed in the task?"
          format="Boolean (Yes / No)"
        />
        <FieldBlock
          title="Golden Solution — Diff explanation (if alignment is No)"
          question="How does the golden solution differ from the expected final output listed in the task?"
          format="Text block"
        />
      </section>

      <section className="section">
        <h2>Section 4 — Overall Assessment</h2>
          <div className="callout callout-warn">
            <strong>Failure Modes</strong>
            <p>
              Until platform wording is finalized, answer with 1–2 concrete
              risks that could block successful completion (for example:
              missing upstream file, ambiguous acceptance criteria, app listed
              but feature unavailable, golden solution incompatible with stated
              deliverable).
            </p>
          </div>
        <FieldBlock
          title="Failure Modes"
          question="What are the one or two biggest risks that could prevent successful completion of this task?"
          format="Free text"
        />
        <FieldBlock
          title="Overall Quality Rating"
          question="How would you rate the overall quality of this task? (Refer to the Task Quality Rating Guide when available.)"
          format="7-point preference (Excellent → Poor)"
        />
        <FieldBlock
          title="Estimated Time to Complete (ETC)"
          question="Approximately how long would it take a professional in this field to complete this task from start to completion?"
          format="Numeric (minutes)"
        />
        <div className="field-block">
          <h4>Estimated Difficulty</h4>
          <p>
            <strong>Question:</strong> How would a mid-level professional in the
            field rate the difficulty of the task assuming{" "}
            <strong>no access to LLMs</strong>?
          </p>
          <p className="field-meta">
            <strong>Format:</strong> Radio
          </p>
          <ul className="rating-cards">
            <li>
              <strong>5 — Very difficult</strong>
              <span>Specialized tooling + multi-app judgment under pressure.</span>
            </li>
            <li>
              <strong>4 — Difficult</strong>
              <span>Non-trivial professional workflow; easy to miss a step.</span>
            </li>
            <li>
              <strong>3 — Average difficulty</strong>
              <span>Typical for a mid-level practitioner in this domain.</span>
            </li>
            <li>
              <strong>2 — Easy</strong>
              <span>Straightforward once instructions are read carefully.</span>
            </li>
            <li>
              <strong>1 — Very easy</strong>
              <span>Basic / introductory work for this specialty.</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>Section 5 — Complete the Submission</h2>
        <FieldBlock
          title="Time to Complete (minutes)"
          question="How long did it take you to complete this submission?"
          format="Numeric (minutes)"
        />
        <FieldBlock
          title="AI Use Attestation"
          question="The use of AI or Large Language Models (LLMs) is strictly prohibited during this review. Check the box to confirm you completed this task entirely without AI assistance."
          format="Checkbox"
        />
      </section>
    </div>
  );
}
