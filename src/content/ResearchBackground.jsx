/**
 * Educational background for ECs on computer-use agents.
 * Do NOT cite external papers, project sites, researchers, or partner names here.
 */
export function ResearchBackgroundSection() {
  return (
    <div className="workflow-content">
      <section className="section">
        <h2>Computer-Use Agents — Background</h2>
        <div className="section-body">
          <p>
            Project Copperhead builds <strong>computer-use agent (CUA)</strong>{" "}
            environments and tasks: multi-step professional work on a real
            desktop, not single-turn Q&amp;A. This page explains the problem
            space so you can review tasks with the right mental model. It does
            not ask you to study external research materials.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>What a Computer-Use Task Looks Like</h2>
        <div className="section-body">
          <p>
            A typical task gives a natural-language instruction and a starting
            computer state (apps open, files present). An agent observes the
            screen (and sometimes structured UI information), then issues
            keyboard and mouse actions until it finishes, gives up, or hits a
            step limit. Success is usually judged by the{" "}
            <strong>final state of the computer</strong> (the deliverable), not
            by whether one specific click sequence was followed.
          </p>
          <ul className="workflow-list">
            <li>
              <strong>Open-ended desktop work</strong>
              <span>
                Spreadsheets, browsers, editors, terminals, and
                domain-specific tools—often combined in one workflow.
              </span>
            </li>
            <li>
              <strong>Concrete deliverables</strong>
              <span>
                A file updated, a form submitted, a report produced—not only
                &quot;the agent tried.&quot;
              </span>
            </li>
            <li>
              <strong>Humans still outperform agents</strong>
              <span>
                Skilled people complete these workflows far more reliably than
                current models. Your reviews keep tasks fair, solvable, and
                professionally real.
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>How Agents Perceive the Desktop</h2>
        <div className="section-body">
          <p>Depending on the setup, an agent may receive:</p>
          <ul className="plain-list">
            <li>
              <strong>Screenshots</strong> — closest to what a person sees;
              the agent must decide where to click.
            </li>
            <li>
              <strong>Structured UI trees</strong> — lists of on-screen
              elements (buttons, fields, labels) that can help grounding.
            </li>
            <li>
              <strong>Combined views</strong> — image plus structured elements,
              sometimes with numbered marks on interactive regions.
            </li>
          </ul>
          <p>
            Higher image clarity and longer useful history generally help.
            Cluttered windows, unexpected pop-ups, and dense office UIs still
            trip agents up often.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Where Agents Commonly Struggle</h2>
        <ul className="workflow-list">
          <li>
            <strong>Precise GUI control</strong>
            <span>
              Missed clicks, wrong coordinates, repetitive actions, or failing
              to manage windows before continuing.
            </span>
          </li>
          <li>
            <strong>Domain know-how</strong>
            <span>
              Limited familiarity with specialist app features—why domain
              experts must confirm Copperhead tasks are realistic as written.
            </span>
          </li>
          <li>
            <strong>Multi-app workflows</strong>
            <span>
              Coordinating several tools in one deliverable is among the hardest
              cases. Instructions, files, and verifiers need to be especially
              clear.
            </span>
          </li>
          <li>
            <strong>Noise and layout changes</strong>
            <span>
              Extra windows or resized UIs can derail an otherwise solvable
              task. Good initial setups reduce accidental impossibilities.
            </span>
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>How This Affects Your Reviews</h2>
        <div className="section-body">
          <ol className="numbered-steps">
            <li>
              Ask whether a skilled human in the domain could complete the task
              with the given apps and files—not whether an agent would find it
              easy.
            </li>
            <li>
              Flag instructions that omit goal, context, or procedure; ambiguous
              tasks create weak evaluation data.
            </li>
            <li>
              Treat rubrics and golden solutions as the contract for
              &quot;done.&quot; If they do not match the stated deliverable, say
              so.
            </li>
            <li>
              When estimating difficulty and time, assume{" "}
              <strong>no LLM assistance</strong> for the professional completing
              the work.
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}
