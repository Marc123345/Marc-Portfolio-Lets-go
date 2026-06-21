import type { Metadata } from "next";
import GramercyDeck from "./GramercyDeck";

export const metadata: Metadata = {
  title: { absolute: "The Gramercy, Proposal | Marc Friedman" },
  description:
    "The Gramercy website rebuild & growth engine, a proposal prepared for The RFC Group.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <GramercyDeck />;
}
