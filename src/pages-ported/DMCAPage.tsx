export default function DMCAPage() {
  return (
    <>
      

      <div className="min-h-screen bg-black text-white pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">DMCA Policy</h1>
          <p className="text-white mb-8">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Copyright Infringement</h2>
              <p className="text-gray-300 mb-4">
                Marc Friedman respects the intellectual property rights of others and expects users of our services to do the same. In accordance with the Digital Millennium Copyright Act (DMCA), we will respond to notices of alleged copyright infringement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Filing a DMCA Notice</h2>
              <p className="text-gray-300 mb-4">
                If you believe that your copyrighted work has been copied in a way that constitutes copyright infringement, please provide our designated agent with the following information:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                <li>A physical or electronic signature of the copyright owner or authorized representative</li>
                <li>Identification of the copyrighted work claimed to have been infringed</li>
                <li>Identification of the material that is claimed to be infringing and information to locate it</li>
                <li>Your contact information (address, telephone number, and email address)</li>
                <li>A statement that you have a good faith belief that the use is not authorized</li>
                <li>A statement that the information in the notification is accurate and that you are authorized to act on behalf of the copyright owner</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Counter-Notification</h2>
              <p className="text-gray-300 mb-4">
                If you believe that your material was removed or disabled by mistake or misidentification, you may file a counter-notification with our designated agent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Designated Agent</h2>
              <p className="text-gray-300 mb-4">
                Please send DMCA notices to:
              </p>
              <div className="bg-[#1b1b1b] p-4">
                <p className="text-gray-300">Marc Friedman</p>
                <p className="text-gray-300">Email: marcf@marcfriedmanwebdesign.com</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Repeat Infringers</h2>
              <p className="text-gray-300 mb-4">
                We will terminate the accounts of users who are repeat infringers of copyright.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
