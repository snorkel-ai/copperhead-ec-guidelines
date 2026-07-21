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
      { key: "gs-access", label: "Platform Access" },
      { key: "gs-slack", label: "Slack & Code of Conduct" },
    ],
  },
  { key: "platform-review", label: "Platform Review Guide" },
  { key: "pay-rates", label: "Pay Rates" },
  { key: "reference", label: "Reference" },
];

export function buildCopperheadContent(_setActiveTab) {
  return {
    overview: <OverviewSection />,
    "gs-access": <GettingStartedSection focus="access" />,
    "gs-slack": <GettingStartedSection focus="slack" />,
    "platform-review": <PlatformReviewSection />,
    "pay-rates": <PayRatesSection />,
    reference: <ReferenceSection />,
  };
}
