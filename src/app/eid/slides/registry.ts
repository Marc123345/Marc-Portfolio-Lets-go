import Slide01Title from "./Slide01Title";
import Slide02Framing from "./Slide02Framing";
import Slide03Reality from "./Slide03Reality";
import Slide04Website from "./Slide04Website";
import Slide05Search from "./Slide05Search";
import Slide06Competitive from "./Slide06Competitive";
import Slide07Opportunity from "./Slide07Opportunity";
import Slide08DentalGap from "./Slide08DentalGap";
import Slide09DentalSearch from "./Slide09DentalSearch";
import Slide10BuyerMap from "./Slide10BuyerMap";
import Slide11Funnel from "./Slide11Funnel";
import Slide12WebsiteStrategy from "./Slide12WebsiteStrategy";
import Slide13SeoAeo from "./Slide13SeoAeo";
import Slide14Roadmap from "./Slide14Roadmap";
import Slide15Tiers from "./Slide15Tiers";
import Slide16Roi from "./Slide16Roi";
import Slide17Closing from "./Slide17Closing";

export type SlideMeta = {
  id: string;
  label: string;
  act?: string;
  component: React.ComponentType;
};

export const SLIDES: SlideMeta[] = [
  { id: "title", label: "Title", component: Slide01Title },
  { id: "framing", label: "Executive Framing", component: Slide02Framing },
  { id: "reality", label: "Current Reality", act: "Act I — Problem", component: Slide03Reality },
  { id: "website", label: "Website Diagnosis", act: "Act I — Problem", component: Slide04Website },
  { id: "search", label: "Search Diagnosis", act: "Act I — Problem", component: Slide05Search },
  { id: "competitive", label: "Competitive Truth", act: "Act I — Problem", component: Slide06Competitive },
  { id: "opportunity", label: "Core Opportunity", act: "Act II — Opportunity", component: Slide07Opportunity },
  { id: "dental-gap", label: "Biggest Gap — Dental", act: "Act II — Opportunity", component: Slide08DentalGap },
  { id: "dental-search", label: "Dental Search Gap", act: "Act II — Opportunity", component: Slide09DentalSearch },
  { id: "buyer-map", label: "Buyer Map", act: "Act II — Opportunity", component: Slide10BuyerMap },
  { id: "funnel", label: "Strategic Model", act: "Act III — Solution", component: Slide11Funnel },
  { id: "website-strategy", label: "Website Strategy", act: "Act III — Solution", component: Slide12WebsiteStrategy },
  { id: "seo-aeo", label: "SEO / AEO System", act: "Act III — Solution", component: Slide13SeoAeo },
  { id: "roadmap", label: "Execution Roadmap", act: "Act III — Solution", component: Slide14Roadmap },
  { id: "tiers", label: "Engagement Options", act: "Act IV — Investment", component: Slide15Tiers },
  { id: "roi", label: "Return Logic", act: "Act V — Return", component: Slide16Roi },
  { id: "closing", label: "Closing Ask", act: "Act V — Return", component: Slide17Closing },
];
