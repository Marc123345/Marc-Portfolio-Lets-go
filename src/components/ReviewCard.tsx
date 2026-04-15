"use client";

import React, { useRef, useEffect } from 'react';
import { Star, Linkedin, User } from 'lucide-react';
import { motion } from 'framer-motion';

interface ReviewCardProps {
  name: string;
  rating: number;
  content: string;
}

const clientInfo = {
   "Omar Turner": {
    role: "Chief Executive Officer, Binns Media Group, New York",
    image: "https://i.imgur.com/NKjkUC9.jpeg",
    linkedin: "https://www.linkedin.com/in/omar-turner-92b188130"
  },
  "Gabriel Sher": {
    role: "CEO, Untapped Africa",
    image: "https://ik.imagekit.io/qcvroy8xpd/1682479506906.jpeg?updatedAt=1754019693073",
    linkedin: "https://www.linkedin.com/in/gabriel-sher-3503a4202/"
  },
  "Darren Youngleson": {
    role: "Serial Entrepreneur",
    image: "https://ik.imagekit.io/qcvroy8xpd/4c91361b-27ee-453b-88e0-af3026cac747_1_ro3hez_e_background_removal_f_png_vkfbub.png?updatedAt=1754023286922",
    linkedin: "https://www.linkedin.com/in/darren-youngleson-27a17310/"
  },
  "Royi Mazor": {
    role: "Owner, A Secure Annapolis Locksmith",
    image: "",
    linkedin: ""
  },
  "Bradley Thompson": {
    role: "Marketing Director",
    image: "https://ik.imagekit.io/qcvroy8xpd/1517778443427%20(1).jpeg?updatedAt=1749336939344",
    linkedin: "https://www.linkedin.com/in/bradleethompson/"
  },
  "Bar Levy": {
    role: "Co-Founder & PM at Sumit-AI",
    image: "https://i.imgur.com/ja6oGvJ.jpg",
    linkedin: "https://www.linkedin.com/in/bar-levy"
  },
  "Ezra Rubinson": {
    role: "Digital Marketing Agency Owner, Boston",
    image: "https://i.imgur.com/rkHCwAv.jpeg",
    linkedin: "https://www.linkedin.com/in/ezra-rubinson/"
  },
  "Yaron Peretz": {
    role: "CEO, Tech Startup",
    image: "https://i.imgur.com/cP2GDPD.jpg",
    linkedin: "https://www.linkedin.com/in/yaron-peretz-ghostwriter"
  },
  "Stallone Sweeney": {
    role: "Attorney | Founder of LegalContent",
    image: "https://ik.imagekit.io/qcvroy8xpd/1689101716225.jpeg?updatedAt=1749337009395",
    linkedin: "https://www.linkedin.com/in/stallone-sweeney-39301b198/"
  },
  "Lior Shimon": {
    role: "Algorithm Engineer | Data Scientist | AI Engineer",
    image: "https://i.imgur.com/vYZWYcu.jpeg",
    linkedin: "https://www.linkedin.com/in/liorshimon"
  },
  "Yosi Lugassy": {
    role: "Restaurant Owner",
    image: ""
  },
  "Elior Daniely": {
    role: "Real Estate Entrepreneur",
    image: "https://i.imgur.com/EDJ9b8P.jpeg",
    linkedin: "https://www.linkedin.com/in/elior-daniely-59b554237"
  },
  "Shalom Landman": {
    role: "Real Estate Developer, Florida",
    image: "https://i.imgur.com/N6MTFbh.jpeg",
    linkedin: "https://www.linkedin.com/in/shalom-landman-74a492220"
  },
  "Julia Friedman": {
    role: "Holistic Wellness Coach",
    image: "https://i.imgur.com/wCpW4uW.jpg",
    linkedin: "https://www.linkedin.com/in/julia-friedman-9b374b53"
  },
    "VP Product": {
    role: "WebAI | VP Product at MarginX.ai",
    image: "https://i.imgur.com/3DtZKd7.jpeg",
    linkedin: "https://www.linkedin.com/in/vp-product"
  },
  "Hilla Dayan": {
    role: "Founder of Wellness",
    image: ""
  },
  "Benny Even Ari": {
    role: "Investment Banker & Real Estate Developer",
    image: "https://i.imgur.com/s3S0EXG.jpg",
    linkedin: "https://www.linkedin.com/in/benny-even-ari"
  },
  "Jayden Youngleson": {
    role: "CEO of Tanj Capital",
    image: "https://res.cloudinary.com/dadgglcaq/image/upload/v1749040855/Jayden_1_yovgde.png"
  },
  "Guneet K. Singh": {
    role: "TV Producer Binns Media Group",
    image: "https://res.cloudinary.com/dadgglcaq/image/upload/v1749337731/1732338426448_1_veqlnh.jpg",
    linkedin: "https://www.linkedin.com/company/binns-media-group/"
  }
};

export default function ReviewCard({ 
  name, 
  rating, 
  content
}: ReviewCardProps) {
  const client = clientInfo[name as keyof typeof clientInfo] || {
    role: "Client",
    image: "",
    linkedin: undefined
  };
  
  // Truncate content if it's too long for mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
  const truncatedContent = isMobile && content.length > 150
    ? `${content.substring(0, 150)}...`
    : content;

  // Random rotation for card
  const rotation = useRef(Math.random() * 2 - 1);
  
  // Random animation delay
  const delay = useRef(Math.random() * 0.3);

  return (
    <motion.div 
      className="bg-[#1f2428] p-6 rounded-xl border border-white/10 hover:border-[#A3D1FF] transition-all group h-full"
      whileHover={{ 
        y: -5, 
        boxShadow: '0 10px 25px -5px rgba(163, 209, 255, 0.1)',
        rotate: 0
      }}
      initial={{ rotate: rotation.current }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#1b1b1b] mr-4 flex-shrink-0">
          {client.image ? (
            <img 
              src={client.image} 
              alt={name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              loading="lazy"
              sizes="48px"
            />
          ) : (
            <div className="w-full h-full bg-[#2d3035] flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
          )}
        </div>
        <div className="flex-grow">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-white text-base">{name}</h3>
              <div className="text-xs text-[#A3D1FF]">{client.role}</div>
            </div>
            {'linkedin' in client && client.linkedin && (
              <a
                href={client.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-2 py-1 bg-[#0077B5]/10 hover:bg-[#0077B5]/20 text-[#0077B5] rounded-lg transition-all group-hover:scale-105"
              >
                <Linkedin className="w-4 h-4" />
                <span className="text-xs font-medium hidden sm:inline">Connect</span>
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => {
          const isFilled = i < Math.floor(rating);
          const isPartial = i === Math.floor(rating) && rating % 1 !== 0;
          const partialPercentage = rating % 1;
          
          return (
            <div key={i} className="relative w-4 h-4">
              <Star 
                className="w-4 h-4 text-[#FFD700] group-hover:scale-110 transition-transform absolute"
                style={{ transitionDelay: `${i * 50}ms` }}
              />
              {(isFilled || isPartial) && (
                <div 
                  className="overflow-hidden absolute top-0 left-0"
                  style={{ width: isPartial ? `${partialPercentage * 100}%` : '100%' }}
                >
                  <Star 
                    className="w-4 h-4 fill-[#FFD700] text-[#FFD700] group-hover:scale-110 transition-transform"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
      <p className="text-gray-300 text-sm">
        {isMobile ? truncatedContent : content}
      </p>
    </motion.div>
  );
}