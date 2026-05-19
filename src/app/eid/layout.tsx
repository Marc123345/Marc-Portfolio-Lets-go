import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EID Growth Opportunity",
  description:
    "From brochure site to proof-driven sales engine — strategy deck prepared for EID Ltd.",
  robots: { index: false, follow: false },
};

export default function EidPresentationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="eid-deck-root fixed inset-0 z-[100] bg-black text-white">
      {children}
    </div>
  );
}
