export default function CookiesPolicyPage() {
  return (
    <>
      

      <div className="min-h-screen bg-black text-white pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Cookie Policy</h1>
          <p className="text-white mb-8">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">What Are Cookies</h2>
              <p className="text-gray-300 mb-4">
                Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">How We Use Cookies</h2>
              <p className="text-gray-300 mb-4">We use cookies for the following purposes:</p>
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                <li>Essential cookies: Required for the website to function properly</li>
                <li>Analytics cookies: Help us understand how visitors interact with our website</li>
                <li>Performance cookies: Help us improve our website's performance</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Third-Party Cookies</h2>
              <p className="text-gray-300 mb-4">
                We use Google Analytics to analyze website traffic. These services may set their own cookies on your device.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Managing Cookies</h2>
              <p className="text-gray-300 mb-4">
                You can control and manage cookies through your browser settings. Please note that removing or blocking cookies may impact your user experience.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-300">
                If you have any questions about our use of cookies, please contact us at marcf@marcfriedmanwebdesign.com.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
