import { OverviewSection } from "./Overview";
import { GettingStartedSection } from "./GettingStarted";
import { GoodTaskSection } from "./GoodTask";
import { EvaluateTaskSection } from "./EvaluateTask";
import { SubmissionSection } from "./Submission";
import { DifficultyRatingSection } from "./DifficultyRating";
import { ReviewerGuidelinesSection } from "./ReviewerGuidelines";
import { PayRatesSection } from "./PayRates";
import { ReferenceSection } from "./Reference";
import FileExplorer from "./FileExplorer";

/** True if this tab or any nested child matches the active key. */
export function tabContainsActive(tab, activeTab) {
  if (tab.key === activeTab) return true;
  if (!tab.children) return false;
  return tab.children.some((child) => tabContainsActive(child, activeTab));
}

export const COPPERHEAD_TABS = [
  {
    key: "getting-started",
    label: "Getting Started",
    children: [
      { key: "gs-access", label: "Platform Access" },
      { key: "gs-slack", label: "Slack & Code of Conduct" },
      { key: "overview", label: "Welcome to Copperhead" },
    ],
  },
  {
    key: "pilot-guidelines",
    label: "Copperhead Pilot Submission Guide",
    children: [
      { key: "good-task", label: "What Makes a Good Task?" },
      { key: "evaluate-task", label: "Evaluate the Task" },
      {
        key: "submission",
        label: "Complete your Evaluation",
        children: [
          { key: "sub-overview", label: "Overview" },
          { key: "sub-instructions", label: "1. Task Instructions" },
          { key: "sub-rubrics", label: "2. Rubrics and Weights" },
          { key: "sub-resources", label: "3. Resources for Completion" },
          { key: "sub-overall", label: "4. Overall Assessment" },
          { key: "sub-complete", label: "5. Complete the Submission" },
        ],
      },
      { key: "difficulty", label: "Rating Task Difficulty" },
    ],
  },
  { key: "reviewer-guidelines", label: "Reviewer Guidelines" },
  { key: "file-explorer", label: "File Explorer" },
  { key: "pay-rates", label: "Pay Rates" },
  { key: "reference", label: "Reference" },
];

export function buildCopperheadContent(setActiveTab) {
  return {
    "gs-access": <GettingStartedSection focus="access" />,
    "gs-slack": <GettingStartedSection focus="slack" />,
    overview: <OverviewSection />,
    "good-task": <GoodTaskSection />,
    "evaluate-task": <EvaluateTaskSection />,
    "sub-overview": (
      <SubmissionSection focus="overview" setActiveTab={setActiveTab} />
    ),
    "sub-instructions": (
      <SubmissionSection focus="instructions" setActiveTab={setActiveTab} />
    ),
    "sub-rubrics": (
      <SubmissionSection focus="rubrics" setActiveTab={setActiveTab} />
    ),
    "sub-resources": (
      <SubmissionSection focus="resources" setActiveTab={setActiveTab} />
    ),
    "sub-overall": (
      <SubmissionSection focus="overall" setActiveTab={setActiveTab} />
    ),
    "sub-complete": (
      <SubmissionSection focus="complete" setActiveTab={setActiveTab} />
    ),
    difficulty: <DifficultyRatingSection />,
    "reviewer-guidelines": <ReviewerGuidelinesSection />,
    "file-explorer": <FileExplorer />,
    "pay-rates": <PayRatesSection />,
    reference: <ReferenceSection />,
  };
}
