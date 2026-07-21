export function OverviewSection() {
  return (
    <div className="workflow-content">
      <section className="section">
        <h2>Welcome to Copperhead Reviews</h2>
        <div className="section-body">
          <h3>What This Project Is About</h3>
          <p>
            The goal of this project is to build computer-use agent (CUA)
            environments and tasks that reflect real, complex professional work.
            These tasks represent the multi-step workflows people perform across
            desktop applications, terminal environments, and web services to
            produce a concrete deliverable.
          </p>
          <p>
            Within the Snorkel contributor platform, you will be provided with
            everything needed to evaluate a task, including the task
            instructions, supporting files, expected outputs, and the proposed
            step-by-step solution (subgoals).
          </p>
          <p>
            Your role is to review the task from the perspective of a
            professional who has been asked to complete it. Determine whether
            the task is realistic, whether it can be successfully completed using
            the provided files and resources, and whether the proposed solution
            reflects how you would approach the work. Identify any issues,
            validate the proposed solution, and provide feedback that will help
            improve both the task quality and the overall pipeline.
          </p>
          <p>
            <strong>
              You are not expected to create new tasks, rewrite task
              instructions, or directly edit the task itself—your role is to
              evaluate the task and provide expert feedback.
            </strong>
          </p>
        </div>
      </section>
    </div>
  );
}
