import { OverviewSection } from "./Overview";
import { GettingStartedSection } from "./GettingStarted";
import { PlatformReviewSection } from "./PlatformReview";
import { PayRatesSection } from "./PayRates";
import { ReferenceSection } from "./Reference";

export const COPPERHEAD_TABS = [
  { key: "overview", label: "Overview" },
  {
    key: "getting-started",
    label: "Getting Started",
    children: [
      { key: "gs-access", label: "Access & Setup" },
      { key: "gs-workflow", label: "Workflow Basics" },
    ],
  },
  { key: "platform-review", label: "Platform Review Guide" },
  { key: "pay-rates", label: "Pay Rates" },
  { key: "reference", label: "Reference" },
];

export function buildCopperheadContent(setActiveTab) {
  return {
    overview: <OverviewSection />,
    "gs-access": (
      <GettingStartedSection setActiveTab={setActiveTab} focus="access" />
    ),
    "gs-workflow": (
      <GettingStartedSection setActiveTab={setActiveTab} focus="workflow" />
    ),
    "platform-review": <PlatformReviewSection />,
    "pay-rates": <PayRatesSection />,
    reference: <ReferenceSection />,
  };
}
