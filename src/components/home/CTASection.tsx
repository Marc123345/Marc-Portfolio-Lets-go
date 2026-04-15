import ContactForm from '@/components/ContactForm';
import Reveal from '@/components/Reveal';
import Spotlight from '@/components/Spotlight';

const CALENDLY_LINK = "https://calendly.com/marc-friedman-web-design--meeting-link/30min";

export default function CTASection() {
  return (
    <Spotlight className="py-32 px-6 sm:px-8 lg:px-12 bg-[#0a0a0a]" spotlightColor="rgba(163, 209, 255, 0.2)">
      <div className="max-w-4xl mx-auto text-center">
        <Reveal direction="up" delay={0.1}>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black mb-8 leading-tight text-white">
            Every Day Without a Great Website<br />Is a Day Your <span className="text-[#A3D1FF]">Competitor Gets the Lead.</span>
          </h2>
        </Reveal>

        <Reveal direction="up" delay={0.2}>
          <p className="text-2xl mb-12 max-w-2xl mx-auto text-gray-300">
            Let&apos;s fix that. Book 30 minutes with me — I&apos;ll audit your current site live on the call and show you exactly what&apos;s costing you customers.
          </p>
        </Reveal>

        <Reveal direction="blur-in" delay={0.3}>
          <div className="bg-[#1b1b1b] border border-white/10 p-10 rounded-3xl text-left max-w-2xl mx-auto">
            <ContactForm />

            <p className="text-center text-sm text-white mt-6">
              Or{' '}
              <a
                href={CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A3D1FF] font-bold hover:underline"
              >
                book directly on my calendar
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </Spotlight>
  );
}
