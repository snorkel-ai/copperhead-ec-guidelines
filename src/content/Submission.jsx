function FieldGuide({ title, question, children }) {
  return (
    <div className="field-block">
      <h4>{title}</h4>
      <p>
        <strong>Question:</strong> {question}
      </p>
      {children}
    </div>
  );
}

function Overview({ setActiveTab }) {
  return (
    <section className="section">
      <h2>Complete your Evaluation (Submission)</h2>
      <div className="section-body">
        <p>
          This guide walks you through each question you&apos;ll encounter on the
          platform, with a clear explanation of what each one is asking and how
          to answer it well. The questions follow the natural order of a review:
          first the task&apos;s setup (domain, applications, and files), then its
          design (instructions, subgoals, and feasibility), then its evaluation
          (the golden solution and verifier rubric), and finally your expert
          judgment (failure modes, quality rating, and time estimates) and
          submission details.
        </p>
        <p>
          Keep this guide handy as you work — if you&apos;re ever unsure what a
          question means or how to answer it, refer back to the explanation here.
        </p>
        <ul className="plain-list">
          <li>
            <button
              type="button"
              className="inline-link"
              onClick={() => setActiveTab("sub-instructions")}
            >
              1. Task Instructions
            </button>
          </li>
          <li>
            <button
              type="button"
              className="inline-link"
              onClick={() => setActiveTab("sub-rubrics")}
            >
              2. Rubrics and Weights
            </button>
          </li>
          <li>
            <button
              type="button"
              className="inline-link"
              onClick={() => setActiveTab("sub-resources")}
            >
              3. Resources for Completion
            </button>
          </li>
          <li>
            <button
              type="button"
              className="inline-link"
              onClick={() => setActiveTab("sub-overall")}
            >
              4. Overall Assessment
            </button>
          </li>
          <li>
            <button
              type="button"
              className="inline-link"
              onClick={() => setActiveTab("sub-complete")}
            >
              5. Complete the Submission
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
}

function TaskInstructions({ setActiveTab }) {
  return (
    <section className="section">
      <h2>1. Task Instructions</h2>
      <FieldGuide
        title="Domain Alignment"
        question="Are the Task Instructions realistic for a professional in the listed domain?"
      >
        <p>
          Every task is tagged with an occupational domain (for example,
          medical, construction, or engineering). This question asks you to
          judge whether the work in the task is something a real professional in
          that field would plausibly do as part of their job. Read the task as
          if you were someone working in that domain: does this feel like a
          genuine request you might receive or delegate? A task fails this check
          if the work belongs to a different field entirely, or if it&apos;s so
          artificial that no professional would recognize it as real work. If
          you answer &quot;No,&quot; explain the mismatch and, where possible,
          point to the domain that actually fits or the changes that would make
          the task authentic.
        </p>
      </FieldGuide>

      <FieldGuide
        title="Goal &amp; Context Clarity"
        question="Do the Task Instructions clearly state the goal and enough context to begin, without requiring unstated assumptions?"
      >
        <p>
          This question asks whether a professional could understand what they
          are being asked to accomplish after reading only the Task Instructions.
          The instructions should clearly explain the objective, provide enough
          business or professional context to understand the request, and
          identify any important constraints or background needed to begin the
          work. Focus only on the written instructions—not the supporting files
          or other task components. A task fails this check if a professional
          would need to make significant assumptions or ask follow-up questions
          before they could confidently begin. If you answer &quot;No,&quot;
          identify the missing context or explain what additional information
          would be needed.
        </p>
      </FieldGuide>

      <FieldGuide
        title="Procedure in Task Instructions"
        question="Do the Task Instructions prescribe a step-by-step procedure?"
      >
        <p>
          Professional work requests typically describe what needs to be
          accomplished rather than how to accomplish it. This question asks
          whether the Task Instructions appropriately define the desired outcome
          without unnecessarily prescribing every action the professional should
          take. Some procedural guidance may be appropriate when required by
          regulations, policies, or submission requirements, but the
          instructions should still allow a professional to apply their own
          expertise and workflow. A task fails this check if it reads like a
          detailed checklist of actions instead of a realistic professional
          request. If you answer &quot;Yes,&quot; identify the procedural
          language that should be removed or rewritten so the instructions state
          the goal and context only (not how to complete the task).
        </p>
      </FieldGuide>

      <FieldGuide
        title="Correct Deliverable Definition"
        question="Based on the Task Instructions alone, is it clear what a completed deliverable would be for this task?"
      >
        <p>
          This question asks whether the Task Instructions clearly define what
          the professional is expected to produce. After reading the
          instructions, a professional should understand what the final
          deliverable is, when the work is considered complete, and what
          successful completion looks like without relying on the supporting
          files, rubric, or proposed solution. A task fails this check if the
          requested output is vague, incomplete, contradictory, or open to
          multiple reasonable interpretations. If you answer &quot;No,&quot;
          explain what aspect of the expected deliverable is unclear or missing.
        </p>
      </FieldGuide>

      <FieldGuide
        title="Instruction Quality"
        question="Rate the quality of the task instructions as though you received this request from a colleague."
      >
        <p>
          Refer to the{" "}
          <button
            type="button"
            className="inline-link"
            onClick={() => setActiveTab("difficulty")}
          >
            Rating Task Difficulty
          </button>{" "}
          guide for related rating guidance.
        </p>
      </FieldGuide>
    </section>
  );
}

function RubricsAndWeights() {
  return (
    <section className="section">
      <h2>2. Rubrics and Weights</h2>
      <div className="section-body">
        <p>
          <strong>Section goal:</strong> Verify that the golden solution and
          evaluation rubric accurately assess task completion.
        </p>
      </div>

      <FieldGuide
        title="Rubric Weightings"
        question="The rubric can be found in the Rubric and Weights table within the task. It lists rubric categories with descriptions and % weights. Do you agree with the relative weightings presented there? That is, in your assessment, do these relative weightings correctly reflect the relative importance of each category to the task?"
      />

      <FieldGuide
        title="Unnecessary and Missing Rubric Categories"
        question="Are any listed rubric categories unnecessary for judging successful completion, or are any important parts of successful task completion missing from the rubric?"
      >
        <p>
          A strong rubric evaluates every critical part of the task without
          rewarding work that is unrelated or unnecessary. Review each rubric
          category and determine whether it represents an important aspect of
          successful task completion. Then consider whether any major
          requirement described in the Task Instructions is not represented by
          the rubric. A rubric fails this check if it omits an essential part of
          the task, includes categories that do not meaningfully contribute to
          evaluating success, or overemphasizes work that is incidental to the
          deliverable. Answer &quot;Yes&quot; if you believe categories should
          be added or removed.
        </p>
      </FieldGuide>

      <FieldGuide
        title="Rubric Category Structure"
        question="Should any rubric categories be split or merged so that scoring better matches how the work is actually done?"
      >
        <p>
          Sometimes a single rubric category combines multiple independent skills
          that should be evaluated separately. In other cases, several categories
          measure nearly the same thing and could reasonably be combined. Review
          the organization of the rubric and determine whether its structure
          reflects the natural workflow and major components of the task. A
          rubric fails this check if categories are overly broad, significantly
          overlap one another, or divide work into pieces that are unnecessarily
          granular. Answer &quot;Yes&quot; if you believe reorganizing the
          categories would produce a clearer or more meaningful evaluation.
        </p>
      </FieldGuide>

      <FieldGuide
        title="Rubric Category Descriptions"
        question="Are the rubric category descriptions clear and specific enough to understand what successful completion looks like for each category?"
      >
        <p>
          Each rubric category should clearly describe what is being evaluated
          and what constitutes successful completion. Review the descriptions and
          determine whether they are specific enough that a reviewer could
          consistently interpret and apply them without guessing. A rubric fails
          this check if category descriptions are vague, ambiguous, internally
          inconsistent, or omit important details needed to understand what is
          being scored. If you answer &quot;No,&quot; explain which descriptions
          are unclear and why.
        </p>
      </FieldGuide>

      <FieldGuide
        title="Rubric ↔ Task Instructions Alignment"
        question="Does the set of rubric categories match what the Task Instructions ask the agent to produce or accomplish?"
      >
        <p>
          The rubric should evaluate the work requested in the Task
          Instructions—and only that work. Compare the rubric against the Task
          Instructions and determine whether every major requirement described
          in the instructions is reflected in the evaluation. Likewise, confirm
          that the rubric does not assess work that the Task Instructions never
          ask the agent to perform. A rubric fails this check if important task
          requirements are missing from the evaluation, or if the rubric scores
          outputs, behaviors, or information that are unrelated to the requested
          deliverable. If you answer &quot;No,&quot; explain where the mismatch
          occurs and whether the Task Instructions or the rubric should be
          updated.
        </p>
      </FieldGuide>
    </section>
  );
}

function ResourcesForCompletion({ setActiveTab }) {
  return (
    <section className="section">
      <h2>3. Resources for Completion</h2>

      <FieldGuide
        title="Applications &amp; Tools"
        question='Are the listed applications suitable and sufficient for completing the deliverable? Answer "No" if any necessary applications are missing from the list. Following this, for each application you will assess whether it is appropriate and required for the task.'
      >
        <p>
          Each task lists the applications the agent is expected to use. This
          question asks two things at once: are the listed applications the
          right ones for this work (appropriate), and can the task actually be
          completed using only what&apos;s listed (sufficient)? A task fails
          this check if it lists an application that has no role in the work, or
          if completing the task would require software that isn&apos;t listed.
        </p>
      </FieldGuide>

      <FieldGuide
        title="Required Files"
        question="Open each of the required files, which are attached to the task via a .ZIP folder, and review them carefully. In this section, you will use your industry experience to assess whether each file is applicable and appropriate to the task described."
      >
        <p>
          First, confirm whether you are able to open all of the required files.
          Then, assess each file individually via the questions below.
        </p>
        <p>
          You can open the full contents of task required files in the{" "}
          {setActiveTab ? (
            <button
              type="button"
              className="inline-link"
              onClick={() => setActiveTab("file-explorer")}
            >
              File Explorer
            </button>
          ) : (
            <strong>File Explorer</strong>
          )}{" "}
          tab (select the task ID, then each file). You may also use the .ZIP
          attached on the platform.
        </p>
        <p>
          Open each file and review it closely enough to understand its purpose,
          structure, and relevance. Consider whether the file formats, contents,
          level of detail, terminology, and organization are consistent with
          real industry work. Also confirm that each file is applicable to the
          task and supports the type of analysis or deliverable requested in the
          Task Instructions. A task fails this check if the files appear
          artificial, contain implausible or irrelevant information, do not
          match their stated purpose, or would not reasonably be used by a
          professional performing this work. If you answer &quot;No,&quot;
          specify which files are not realistic and applicable to the task
          described. Suggest improvements to the content of the files to make
          them more realistic as applicable.
        </p>
      </FieldGuide>

      <FieldGuide
        title="Deliverable Feasibility"
        question="Could a professional in this field complete the requested deliverable correctly using only the provided task instructions, files, and applications (including known distractors)?"
      >
        <p>
          This question asks you to evaluate the task as a complete package.
          Consider the Task Instructions, supporting files, applications, and
          known distractors together and determine whether they provide
          everything needed for a competent professional to produce the
          requested deliverable. You are not expected to complete the task
          yourself. Instead, determine whether all required information,
          resources, and tools are present and whether there are any missing
          dependencies, conflicting requirements, or impossible steps that would
          prevent successful completion. A task fails this check if the
          requested deliverable cannot reasonably be produced using only the
          provided materials. If you answer &quot;No,&quot; explain what
          prevents successful completion.
        </p>
      </FieldGuide>

      <FieldGuide
        title="Reference Solution Path"
        question="If you followed the proposed Reference Solution Path with the listed Task Instructions, Apps Used, and Required Files, could you reach the correct, complete deliverable?"
      >
        <p>
          The Reference Solution Path represents the proposed workflow for
          completing the task. This question asks you to evaluate whether those
          steps form a realistic and complete path to the expected deliverable.
          You are not expected to execute the solution or verify every
          calculation. Instead, review the sequence of subgoals and determine
          whether they are logically ordered, use the appropriate files and
          applications, and reflect how a professional would reasonably approach
          the work. A solution path fails this check if it omits essential steps,
          relies on unavailable information, contains unnecessary or incorrect
          actions, or would not reasonably produce the requested deliverable. If
          you answer &quot;No,&quot; explain where the solution path breaks down
          and what changes would make it accurate and complete.
        </p>
      </FieldGuide>
    </section>
  );
}

function OverallAssessment({ setActiveTab }) {
  return (
    <section className="section">
      <h2>4. Overall Assessment</h2>

      <FieldGuide
        title="Task Validity"
        question="After assessing the task, would you consider the task valid or invalid?"
      >
        <p>A binary choice. After reviewing the entire task, consider if this task is valid or invalid.</p>
        <p>
          <strong>A valid task</strong> is one that a competent professional
          could reasonably complete using the provided Task Instructions, files,
          applications, and other supporting materials. The task has a clear
          objective, a defined deliverable, appropriate resources, and no major
          issues that would prevent successful completion. Minor imperfections
          or opportunities for improvement do not make a task invalid.
        </p>
        <p>
          <strong>An invalid task</strong> contains one or more critical issues
          that prevent the task from being completed or fairly evaluated.
          Examples include missing or unusable required files, contradictory or
          impossible instructions, an undefined or unattainable deliverable,
          missing required applications or resources, or other major flaws that
          would prevent a competent professional from successfully completing
          the work. If a task is invalid, identify the specific issue that makes
          completion impossible or unreasonable.
        </p>
      </FieldGuide>

      <FieldGuide
        title="Estimated Time to Complete (ETC)"
        question="Approximately how long would it take a competent professional in this field to complete this task from start to completion?"
      >
        <p>
          Estimate, in minutes, how long the task would take a skilled human
          professional — someone who knows the domain and the software — working
          efficiently without prior knowledge of this specific task. Count the
          full effort from reading the instructions to producing the final
          deliverable, including gathering information from the provided
          materials, but not detours, mistakes, or learning time a competent
          professional wouldn&apos;t need. This doesn&apos;t have to be precise
          to the minute; a realistic estimate is enough. ETC gives us a
          consistent measure of task size and depth, and helps confirm the task
          is the substantial, long-form work we&apos;re aiming for rather than a
          quick one-step job.
        </p>
      </FieldGuide>

      <FieldGuide
        title="Estimated Difficulty"
        question="How would a mid-level professional in the field rate the difficulty of the task assuming no access to LLMs?"
      >
        <p>
          Please see the{" "}
          <button
            type="button"
            className="inline-link"
            onClick={() => setActiveTab("difficulty")}
          >
            detailed Rating Task Difficulty guide
          </button>{" "}
          for more information.
        </p>
      </FieldGuide>
    </section>
  );
}

function CompleteSubmission() {
  return (
    <section className="section">
      <h2>5. Complete the Submission</h2>

      <FieldGuide
        title="Time to Complete (minutes)"
        question="How long did it take you to complete this submission?"
      >
        <p>
          Unlike the ETC question, which asks you to estimate how long the task
          would take a professional, this question asks about{" "}
          <strong>you</strong>: how many minutes did you actually spend on this
          review, from opening the task to submitting your answers? Count all of
          it: reading the instructions, opening and checking the files, working
          through each question, and writing your explanations. Report your real
          time honestly, even if it feels long or short; there&apos;s no right
          answer. This data helps us understand the true cost of reviewing, spot
          tasks that are unusually burdensome, and plan reviewer workloads
          realistically.
        </p>
      </FieldGuide>

      <FieldGuide
        title="AI Use Attestation"
        question="The use of AI or Large Language Models (LLMs) is strictly prohibited during this review. Please check the box below to confirm that you completed this task entirely without AI assistance."
      >
        <p>
          This is a formal confirmation, not a question with a judgment to make.
          The entire value of this review rests on independent human expertise.
          If you cannot truthfully check the box, do not submit the review.
        </p>
      </FieldGuide>
    </section>
  );
}

export function SubmissionSection({ focus = "overview", setActiveTab }) {
  return (
    <div className="workflow-content">
      {focus === "overview" ? <Overview setActiveTab={setActiveTab} /> : null}
      {focus === "instructions" ? (
        <TaskInstructions setActiveTab={setActiveTab} />
      ) : null}
      {focus === "rubrics" ? <RubricsAndWeights /> : null}
      {focus === "resources" ? (
        <ResourcesForCompletion setActiveTab={setActiveTab} />
      ) : null}
      {focus === "overall" ? (
        <OverallAssessment setActiveTab={setActiveTab} />
      ) : null}
      {focus === "complete" ? <CompleteSubmission /> : null}
    </div>
  );
}
