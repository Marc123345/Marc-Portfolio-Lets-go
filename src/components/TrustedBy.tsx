"use client";

import React, { useEffect, useState, useRef } from 'react';
import { ChevronDown, ChevronUp, Linkedin } from 'lucide-react';
import ReviewCard from './ReviewCard';
import { AnimatedHeading } from './TextScramble';
import SectionHeading from './SectionHeading';
import Link from 'next/link';

const reviews = [
  {
    name: "Darren Youngleson",
    rating: 5,
    content: "Marc is an absolute winner. No limits to his depth of expertise, unwavering customer service and quality of his product and creativity. Highly recommend working with Marc."
  },
  {
    name: "Royi Mazor",
    rating: 5,
    content: "Very professional wonderful customer service, thank you Marc for all the work you put in, will definitely be using for future projects!"
  },
  {
    name: "Omar Turner",
    rating: 5,
    content: "Marc was able to execute the vision perfectly! He's big on communication and easy to speak with. Marc dedicates his time to the client, ensuring the client is completely satisfied at each step of the process. I highly recommend Marc's services to anyone who needs a web developer who can execute on a vision and provide a professional finished product!"
  },
  {
    name: "Bradley Thompson",
    rating: 5,
    content: "Marc is an incredible ally. We found him to be highly responsive with quick solutions as he built our landing page. This was a high-stakes project for us that did not lend itself to a template solution. Marc is that rare creative that excels at design AND wordsmithing, and we unexpectedly needed this double-duty capability. Thank goodness he was there for us. When we got stuck, Marc got us unstuck with actionable options based on his deep experience. He's the real deal, a true professional."
  },
  {
    name: "Jayden Youngleson",
    rating: 5,
    content: "It has been an absolute pleasure working alongside Marc. His deep knowledge, strong work ethic, and commitment to delivering results have made a significant impact on our team. Marc consistently went above and beyond to meet our development needs, and I highly recommend him to anyone seeking a reliable and skilled professional."
  },
  {
    name: "Yaron Peretz",
    rating: 5,
    content: "Marc was absolutely phenomenal in building the landing page for my business. His care for client satisfaction is unparalleled. He was timely, and took great attention to learning my business & my brand thoroughly. Only good things to say about Marc. I highly recommend him."
  },
  {
    name: "Guneet K. Singh",
    rating: 5,
    content: "My team and I loved working with Marc!! He took the time to understand our goals with our website and adapt as needed. His professionalism, patience and openness to our feedback at every stage made the entire process a seamless collaboration. We'll be sure to bring future projects to him because we know he'll be able to execute them with the care and precision they require. I can't recommend Marc's services enough!"
  },
  {
    name: "Ezra Rubinson",
    rating: 5,
    content: "Fantastic work Marc thank you for building my dream website!!"
  },
  {
    name: "Elior Daniely",
    rating: 5,
    content: "Marc did an amazing job on my website! He was professional, responsive, and delivered a design that exceeded my expectations. Highly recommend!"
  },
  {
    name: "Benny Even Ari",
    rating: 5,
    content: "Marc demonstrated exceptional skill in creating a sophisticated platform that perfectly aligns with our investment and real estate needs. His understanding of both technology and business requirements resulted in an outstanding solution."
  },
  {
    name: "Hilla Dayan",
    rating: 5,
    content: "I wanted to wholeheartedly recommend Marc, who helped me build my wellness website. Working with him was professional, precise, and enjoyable from the very first moment. He guided me through the entire process, listened to all my needs, and built a website that exceeded my expectations! He has a great eye for design and knew how to tailor the website perfectly to my target audience. In addition, he also marketed my website and brought me many new clients!"
  },
  {
    name: "Bar Levy",
    rating: 5,
    content: "Marc did a great job studying and elaborating about the various solutions offered nowadays. In addition, he initiated and led UX & UI tasks and provided valuable insights during the entire process. Marc is truly a team player, is constantly eager to learn and build new things and I'm certain that he'll contribute to any project's success."
  },
  {
    name: "Stallone Sweeney",
    rating: 5,
    content: "Loved working with Marc. He listened carefully to my ideas and needs, ensuring that the final website perfectly reflected my vision. His attention to detail and ability to translate complex concepts into a user-friendly design were incredible. I couldn't recommend Marc highly enough for anyone looking for a skilled and reliable web developer."
  },
  {
    name: "Lior Shimon",
    rating: 5,
    content: "Marc built my dream website he is great at what he does and also a great, guy"
  },
  {
    name: "Yosi Lugassy",
    rating: 5,
    content: "Marc built me the website I dreamed of. He was patient, timely, and professional. Thank you and good luck."
  },
  {
    name: "Shalom Landman",
    rating: 5,
    content: "Marc designed and created my website, and I couldn't be happier with the result! The site looks absolutely amazing, runs smoothly, and perfectly captures what I was looking for."
  },
  {
    name: "Julia Friedman",
    rating: 5,
    content: "Marc is super helpful, very knowledgeable and an expert in field. I highly recommend him."
  }
];

export default function TrustedBy() {
  const [showAllReviews, setShowAllReviews] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            titleRef.current?.classList.add('opacity-100', 'translate-y-0');
            setTimeout(() => {
              reviewsRef.current?.classList.add('opacity-100', 'translate-y-0');
            }, 300);
            sectionObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        sectionObserver.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 md:py-24 bg-black overflow-hidden">
      {/* Trusted by Industry Leaders - Company Logos */}
      <div className="w-full bg-black py-8 mb-16 overflow-hidden">
        <style>{`
          @keyframes scroll-logos {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .logo-scroll {
            animation: scroll-logos 40s linear infinite;
            display: flex;
            width: max-content;
          }
          .logo-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="flex items-center gap-12 lg:gap-16 logo-scroll">
            {/* Binns Media Group */}
            <div className="transition-all duration-300 hover:scale-110 flex-shrink-0">
              <img
                src="https://i.imgur.com/uliFOja.png"
                alt="Binns Media Group"
                className="h-12 md:h-14 w-auto object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>

            {/* Untapped Africa */}
            <div className="transition-all duration-300 hover:scale-110 flex-shrink-0">
              <img
                src="https://ik.imagekit.io/qcvroy8xpd/GOLD%20TEXT%20LOGO%20NO%20GLOW%20EFFECT%20ADDED%201.png?updatedAt=1748753342858"
                alt="Untapped Africa"
                className="h-12 md:h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>

            {/* Diamonds by CS */}
            <div className="transition-all duration-300 hover:scale-110 flex-shrink-0">
              <img
                src="https://ik.imagekit.io/qcvroy8xpd/downloads/diqalz8giyxk0bjucqwv.png?updatedAt=1754396322363"
                alt="Diamonds by CS"
                className="h-12 md:h-14 w-auto object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>

            {/* Partner Company */}
            <div className="transition-all duration-300 hover:scale-110 flex-shrink-0">
              <img
                src="https://ik.imagekit.io/qcvroy8xpd/image%201%20(5).png?updatedAt=1763319654171"
                alt="Partner Company"
                className="h-12 md:h-14 w-auto object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>

            {/* Chad LeClos */}
            <div className="transition-all duration-300 hover:scale-110 flex-shrink-0">
              <img
                src="https://ik.imagekit.io/qcvroy8xpd/logo%20(1).svg?updatedAt=1763381682176"
                alt="Chad LeClos"
                className="h-12 md:h-14 w-auto object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>

            {/* Secure Annapolis */}
            <div className="transition-all duration-300 hover:scale-110 flex-shrink-0">
              <img
                src="https://ik.imagekit.io/qcvroy8xpd/image%201%20(7).png"
                alt="Secure Annapolis"
                className="h-12 md:h-14 w-auto object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>

            {/* Auto Margin */}
            <div className="transition-all duration-300 hover:scale-110 flex-shrink-0">
              <img
                src="https://ik.imagekit.io/qcvroy8xpd/9uafCUp%201%20(1).png?updatedAt=1755247790037"
                alt="Auto Margin"
                className="h-12 md:h-14 w-auto object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>

            {/* Partner Company */}
            <div className="transition-all duration-300 hover:scale-110 flex-shrink-0">
              <img
                src="https://ik.imagekit.io/qcvroy8xpd/f9f3cab4-1ac2-4216-9590-33ea4b61faea.jpeg?updatedAt=1751550631056"
                alt="Partner Company"
                className="h-12 md:h-14 w-auto object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>

            {/* iLight */}
            <div className="transition-all duration-300 hover:scale-110 flex-shrink-0">
              <img
                src="https://ik.imagekit.io/qcvroy8xpd/White%20logo%20-%20no%20background.svg?updatedAt=1749030562412"
                alt="iLight"
                className="h-12 md:h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>

            <div className="transition-all duration-300 hover:scale-110 flex-shrink-0">
              <img
                src="https://ik.imagekit.io/qcvroy8xpd/WhatsApp%20Image%202026-04-08%20at%2011.46.37.jpeg?updatedAt=1775647106959"
                alt="Partner Company"
                className="h-12 md:h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>

            {/* Duplicate set for seamless loop */}
            {/* Binns Media Group */}
            <div className="transition-all duration-300 hover:scale-110 flex-shrink-0">
              <img
                src="https://i.imgur.com/uliFOja.png"
                alt="Binns Media Group"
                className="h-12 md:h-14 w-auto object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>

            {/* Untapped Africa */}
            <div className="transition-all duration-300 hover:scale-110 flex-shrink-0">
              <img
                src="https://ik.imagekit.io/qcvroy8xpd/GOLD%20TEXT%20LOGO%20NO%20GLOW%20EFFECT%20ADDED%201.png?updatedAt=1748753342858"
                alt="Untapped Africa"
                className="h-12 md:h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>

            {/* Diamonds by CS */}
            <div className="transition-all duration-300 hover:scale-110 flex-shrink-0">
              <img
                src="https://ik.imagekit.io/qcvroy8xpd/downloads/diqalz8giyxk0bjucqwv.png?updatedAt=1754396322363"
                alt="Diamonds by CS"
                className="h-12 md:h-14 w-auto object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>

            {/* Partner Company */}
            <div className="transition-all duration-300 hover:scale-110 flex-shrink-0">
              <img
                src="https://ik.imagekit.io/qcvroy8xpd/image%201%20(5).png?updatedAt=1763319654171"
                alt="Partner Company"
                className="h-12 md:h-14 w-auto object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>

            {/* Chad LeClos */}
            <div className="transition-all duration-300 hover:scale-110 flex-shrink-0">
              <img
                src="https://ik.imagekit.io/qcvroy8xpd/logo%20(1).svg?updatedAt=1763381682176"
                alt="Chad LeClos"
                className="h-12 md:h-14 w-auto object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>

            {/* Secure Annapolis */}
            <div className="transition-all duration-300 hover:scale-110 flex-shrink-0">
              <img
                src="https://ik.imagekit.io/qcvroy8xpd/image%201%20(7).png"
                alt="Secure Annapolis"
                className="h-12 md:h-14 w-auto object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>

            {/* Auto Margin */}
            <div className="transition-all duration-300 hover:scale-110 flex-shrink-0">
              <img
                src="https://ik.imagekit.io/qcvroy8xpd/9uafCUp%201%20(1).png?updatedAt=1755247790037"
                alt="Auto Margin"
                className="h-12 md:h-14 w-auto object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>

            {/* Partner Company */}
            <div className="transition-all duration-300 hover:scale-110 flex-shrink-0">
              <img
                src="https://ik.imagekit.io/qcvroy8xpd/f9f3cab4-1ac2-4216-9590-33ea4b61faea.jpeg?updatedAt=1751550631056"
                alt="Partner Company"
                className="h-12 md:h-14 w-auto object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>

            {/* iLight */}
            <div className="transition-all duration-300 hover:scale-110 flex-shrink-0">
              <img
                src="https://ik.imagekit.io/qcvroy8xpd/White%20logo%20-%20no%20background.svg?updatedAt=1749030562412"
                alt="iLight"
                className="h-12 md:h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>

            <div className="transition-all duration-300 hover:scale-110 flex-shrink-0">
              <img
                src="https://ik.imagekit.io/qcvroy8xpd/WhatsApp%20Image%202026-04-08%20at%2011.46.37.jpeg?updatedAt=1775647106959"
                alt="Partner Company"
                className="h-12 md:h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Don't Take My Word For It"
          description=""
        />

        {/* Reviews Section */}
        <div
          ref={reviewsRef}
          className="opacity-0 translate-y-10 transition-all duration-1000 ease-out"
          style={{ transitionDelay: '0.4s' }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {reviews.slice(0, showAllReviews ? reviews.length : 6).map((review) => (
              <ReviewCard
                key={review.name}
                {...review}
              />
            ))}
          </div>
          
          {/* Show More/Less Button */}
          <div className="text-center mt-8 sm:mt-12">
            <button onClick={() => setShowAllReviews(!showAllReviews)} className="mr_btn mr_btn_outline">
              <span>{showAllReviews ? 'Show Less' : 'Show More Reviews'}</span>
            </button>
          </div>
          
          {/* Related Links */}
          <div className="mt-12 text-center">
            <p className="text-white mb-4">
              Ready to add your story to the list?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="mr_btn mr_btn_primary">
                <span>Start Your Project</span>
              </Link>
              <Link href="/work" className="mr_btn mr_btn_outline">
                <span>View Our Work</span>
              </Link>
              <Link href="/contact" className="mr_btn mr_btn_outline">
                <span>Free Website Analysis</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}