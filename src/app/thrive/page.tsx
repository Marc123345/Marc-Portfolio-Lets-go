import type { Metadata } from "next";
import ThriveDeck from "./ThriveDeck";

export const metadata: Metadata = {
  title: { absolute: "THRIVE Global — Brand & Website Proposal | Marc Friedman" },
  description:
    "Brand identity & an 8-page Next.js website for THRIVE Global — the Global Landing System. A proposal by Marc Friedman Web Design.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ThriveDeck />;
}
