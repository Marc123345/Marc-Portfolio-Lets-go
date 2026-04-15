export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="max-w-md text-center p-8">
        <div className="w-16 h-16 bg-[#A3D1FF]/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#A3D1FF]" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-white mb-4">Thank You!</h1>
        <p className="text-white mb-8">Your message has been received. I&apos;ll get back to you within 24 hours.</p>
        <a
          href="/"
          className="inline-flex items-center px-6 py-3 bg-[#A3D1FF] text-black hover:bg-[#92bce6] transition-colors"
        >
          Return Home
        </a>
      </div>
    </div>
  );
}
