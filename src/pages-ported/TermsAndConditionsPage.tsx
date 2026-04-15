export default function TermsAndConditionsPage() {
  return (
    <>
      

      <div className="min-h-screen bg-black text-white pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms and Conditions</h1>
          <p className="text-white mb-8">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
              <p className="text-gray-300 mb-4">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Use License</h2>
              <p className="text-gray-300 mb-4">
                Permission is granted to temporarily download one copy of the materials on this website for personal, non-commercial transitory viewing only.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Services</h2>
              <p className="text-gray-300 mb-4">
                All design and development services are provided as described in individual project proposals or service agreements. Specific terms, timelines, and deliverables will be outlined in separate contracts.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
              <p className="text-gray-300 mb-4">
                All content on this website, including text, graphics, logos, and code, is the property of Marc Friedman and protected by copyright laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
              <p className="text-gray-300 mb-4">
                In no event shall Marc Friedman be liable for any damages arising out of the use or inability to use the materials on this website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Contact</h2>
              <p className="text-gray-300">
                For questions about these Terms and Conditions, please contact us at marcf@marcfriedmanwebdesign.com.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
