export default function AcceptableUsePolicyPage() {
  return (
    <>
      

      <div className="min-h-screen bg-black text-white pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Acceptable Use Policy</h1>
          <p className="text-white mb-8">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Purpose</h2>
              <p className="text-gray-300 mb-4">
                This Acceptable Use Policy outlines the permitted and prohibited uses of our website and services. By using our services, you agree to comply with this policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Permitted Uses</h2>
              <p className="text-gray-300 mb-4">You may use our services for:</p>
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                <li>Viewing portfolio work and case studies</li>
                <li>Contacting us for legitimate business inquiries</li>
                <li>Reading blog content and educational materials</li>
                <li>Learning about our services and capabilities</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Prohibited Uses</h2>
              <p className="text-gray-300 mb-4">You may not use our services to:</p>
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Transmit malware, viruses, or harmful code</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Scrape or copy content without permission</li>
                <li>Impersonate another person or entity</li>
                <li>Spam or send unsolicited commercial messages</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
              <p className="text-gray-300 mb-4">
                All content on this website is protected by copyright and intellectual property laws. You may not reproduce, distribute, or create derivative works without explicit permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Enforcement</h2>
              <p className="text-gray-300 mb-4">
                We reserve the right to investigate violations of this policy and take appropriate action, including terminating access to our services and reporting violations to law enforcement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Contact</h2>
              <p className="text-gray-300">
                If you have questions about this Acceptable Use Policy, please contact us at marcf@marcfriedmanwebdesign.com.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
