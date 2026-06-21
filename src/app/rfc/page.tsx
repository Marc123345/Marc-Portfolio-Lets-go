import type { Metadata } from "next";
import RfcDeck from "./RfcDeck";

export const metadata: Metadata = {
  title: { absolute: "RFC Group, Pitch Deck | Marc Friedman" },
  description:
    "Where you are. Where Bienstock is. How we close the gap. A diagnosis and a plan for The RFC Group.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <RfcDeck />;
}
