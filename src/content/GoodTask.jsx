export function GoodTaskSection() {
  return (
    <div className="workflow-content">
      <section className="section">
        <h2>What Makes a Good Task?</h2>
        <div className="section-body">
          <p>
            A strong task represents a realistic professional workflow, requires
            meaningful end-to-end work, and produces a result that can be clearly
            verified. These three requirements —{" "}
            <strong>representativeness</strong>, <strong>complexity</strong>, and{" "}
            <strong>verifiability</strong> — determine which tasks are accepted
            and which are rejected.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>1. Representativeness</h2>
        <div className="section-body">
          <p>
            The workflow should match real professional practice: the software,
            files, constraints, and decisions a domain expert would actually
            encounter. It should feel like work a real professional might
            delegate to an AI agent, using domain-appropriate tools (a design
            task should use SolidWorks, Rhino, FreeCAD, Blender, or similar —
            not an unrelated tool). Strong tasks include realistic inputs —
            project files, source documents, prior revisions, client notes,
            vendor data — and may include plausible distractors like outdated
            versions or conflicting drafts. Avoid toy examples, generic computer
            actions, or workflows invented only to exercise a UI feature.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>2. Complexity</h2>
        <div className="section-body">
          <p>
            A task should be an end-to-end deliverable, not a single action.
            Applying a filter, renaming a file, or changing one setting is too
            narrow — no planning, cross-checking, or judgment required. A strong
            task requires several interdependent subgoals: inspecting sources,
            choosing inputs, reconciling constraints, modifying state,
            validating, and delivering.
          </p>
          <ul className="plain-list">
            <li>
              <strong>Too narrow:</strong> &quot;Apply a color filter in
              DaVinci.&quot; A single local edit.
            </li>
            <li>
              <strong>Better:</strong> &quot;Move a running cheetah into another
              race video.&quot; Tracking, rotoscoping, compositing, masking, and
              color matching must all succeed together.
            </li>
          </ul>
          <p>
            <strong>Rule of thumb:</strong> the task should take an expert
            substantial focused time, not a few UI operations.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>3. Verifiability</h2>
        <div className="section-body">
          <p>
            The output must be checkable — ideally deterministically (comparing
            files, checking numeric values, inspecting geometry, validating
            formulas, reading backend state). Where exact matching is impossible,
            evaluation should still reduce to a concrete artifact with an
            unambiguous rubric. Avoid tasks where success depends on subjective
            taste or open-ended interpretation.
          </p>
          <ul className="plain-list">
            <li>
              <strong>Too open-ended:</strong> &quot;Design an RPG game with
              monsters.&quot; Many wildly different outputs could satisfy it.
            </li>
            <li>
              <strong>Better:</strong> &quot;Reproduce the game mota.exe using
              RPGMaker XP.&quot; Map geometry, character attributes, and
              scripted events can be compared against a reference.
            </li>
          </ul>
          <p>
            A task may allow multiple valid solutions, but it must define which
            properties count as correct and how an evaluator would accept valid
            alternatives while rejecting near-misses.
          </p>
        </div>
      </section>
    </div>
  );
}
