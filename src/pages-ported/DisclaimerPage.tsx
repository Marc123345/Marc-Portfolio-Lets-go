export default function DisclaimerPage() {
  return (
    <>
      

      <div className="min-h-screen bg-black text-white pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Disclaimer</h1>
          <p className="text-white mb-8">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Website Disclaimer</h2>
              <p className="text-gray-300 mb-4">
                The information provided on this website is for general informational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind about the completeness, accuracy, or reliability of any information on the website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Professional Disclaimer</h2>
              <p className="text-gray-300 mb-4">
                The content on this website is not intended as professional advice. Any reliance you place on such information is strictly at your own risk. We recommend seeking professional advice for your specific situation.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">External Links Disclaimer</h2>
              <p className="text-gray-300 mb-4">
                This website may contain links to external websites that are not provided or maintained by Marc Friedman. We do not guarantee the accuracy, relevance, or completeness of any information on these external websites.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Testimonials Disclaimer</h2>
              <p className="text-gray-300 mb-4">
                Testimonials appearing on this website are actual testimonials from clients. However, they may not be representative of all client experiences, and individual results may vary.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Errors and Omissions Disclaimer</h2>
              <p className="text-gray-300 mb-4">
                While we have made every attempt to ensure the accuracy of the information on this website, we assume no responsibility for errors or omissions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Contact</h2>
              <p className="text-gray-300">
                If you have any questions about this disclaimer, please contact us at marcf@marcfriedmanwebdesign.com.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
