import type { Metadata } from 'next';
import Deck from "./Deck";

export const metadata: Metadata = {
  title: { absolute: 'Strategy Deck | Marc Friedman Web Design' },
  description: 'Private strategy and proposal deck prepared by Marc Friedman Web Design.',
  // Client-facing presentation — keep it out of search indexes.
  robots: { index: false, follow: false },
};

export default function EidPresentationPage() {
  return <Deck />;
}
