export function EvaluateTaskSection() {
  return (
    <div className="workflow-content">
      <section className="section">
        <h2>Evaluating the Task</h2>
        <div className="section-body">
          <p>
            Each task is presented as a complete review package. It may include
            the assigned professional domain, task instructions, proposed rubric
            and weights, expected applications and tools, required files,
            distractors, and a proposed Reference Solution Path. Your role is to
            examine these materials from the perspective of a professional in the
            listed field and determine whether the task is realistic, coherent,
            and completable.
          </p>
          <p>
            You are not expected to perform the task, calculate every answer,
            produce the requested deliverable, or submit work through the listed
            applications. Instead, review the materials closely enough to
            determine whether a competent professional could complete the task
            using the provided instructions, files, applications, and resources,
            and whether the proposed solution reflects a reasonable professional
            approach.
          </p>
          <p>Work through the task in the following order:</p>
        </div>
      </section>

      <section className="section">
        <ol className="numbered-steps evaluate-steps">
          <li>
            <strong>Confirm the domain matches your expertise.</strong>
            <span>
              Begin by reviewing the listed sector and occupation. Confirm that
              the task falls within an area you are qualified to evaluate and
              that the work described is realistic for a professional in that
              field. If the task is outside your expertise or appears to belong
              to a different occupation, skip the task, and let us know on Slack
              so that we can check that you are mapped to the right domain.
            </span>
          </li>
          <li>
            <strong>Read and evaluate the Task Instructions.</strong>
            <span>
              Read the instructions as though they were sent to you by a
              colleague. Make sure you understand the objective, the requested
              deliverable, the relevant context, and any stated constraints.
              Consider whether a professional would know what to do, what to
              produce, and how to recognize successful completion. Note any
              ambiguity, missing context, contradiction, or requirement that
              would force the professional to make unsupported assumptions.
            </span>
          </li>
          <li>
            <strong>Review the Rubric and Weights.</strong>
            <span>
              Treat the rubric as a proposed evaluation of successful task
              completion. Consider whether the rubric categories reflect the most
              important parts of the work, whether any categories are missing or
              unnecessary, and whether the assigned weights match their
              professional importance. Also determine whether the category
              descriptions are clear, specific, and aligned with what the Task
              Instructions actually ask the agent to accomplish.
            </span>
          </li>
          <li>
            <strong>Review the applications, tools, and distractors.</strong>
            <span>
              Determine whether the listed applications and tools are appropriate
              and sufficient for completing the task. Consider whether any
              required application is missing or whether an application has been
              included without a meaningful role.
            </span>
          </li>
          <li>
            <strong>Examine the supporting files and resources.</strong>
            <span>
              Review the Required Files section and open each provided file to
              understand what it contains, how it is expected to be used, and
              whether it is usable for the task. Confirm that the files described
              in the task are present, accessible, and appropriate for producing
              the requested deliverable. You do not need to complete the analysis
              contained in the files, but you should inspect them closely enough
              to determine whether they provide the necessary information. Then
              review any listed distractors or red herrings and determine whether
              they create fair difficulty without making the correct solution
              unavailable, misleading, or ambiguously scored.
            </span>
          </li>
          <li>
            <strong>Review the Reference Solution Path.</strong>
            <span>
              Read the proposed step-by-step solution from beginning to end. Do
              not carry out the steps yourself. Instead, determine whether
              following the proposed path with the listed files, tools, and
              instructions would reasonably lead to the correct and complete
              deliverable. Consider whether the sequence reflects how a
              professional would approach the work, whether any essential steps
              are missing, and whether any steps are unnecessary, incorrect, or
              out of order.
            </span>
          </li>
          <li>
            <strong>Provide your overall expert assessment.</strong>
            <span>
              After reviewing the full package, answer the review questions based
              on your professional judgment. Identify the most likely failure
              modes, estimate how long the task itself would take a competent
              professional, assess its difficulty, and rate the quality of the
              Task Instructions separately from the quality of the overall task
              package.
            </span>
          </li>
        </ol>
      </section>

      <section className="section">
        <div className="section-body">
          <p>
            Throughout the review, remember that your responsibility is to{" "}
            <strong>evaluate, not execute or repair</strong>. You should not
            attempt to complete the underlying task, create a new task, rewrite
            the Task Instructions, modify the files, change the rubric, or edit
            the proposed solution. When you identify an issue, describe it
            clearly and specifically so that the task can be improved by the
            appropriate team. For example, &quot;The task is vague&quot; is less
            useful than &quot;The instructions do not specify which file should
            be used to calculate the final rate.&quot;
          </p>
        </div>
      </section>
    </div>
  );
}
