"use client";

import React from 'react';
import { ArrowLeft, Calendar, Clock, Share2, Linkedin, Facebook, Link, ArrowRight, Hammer, MapPin, Phone, Image, CircleCheck as CheckCircle } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';
import TwitterIcon from '@/components/TwitterIcon';
import { useRouter } from 'next/navigation';
export default function PavingContractorWebsiteDesignGuidePage() {
  const router = useRouter();

  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Website Design Guide for Paving Contractors: Converting Visitors to Customers",
    "description": "Learn essential website design strategies specifically for paving contractors. Discover how to showcase your work, build trust, and convert website visitors into paying customers.",
    "image": "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&w=2000&q=80",
    "datePublished": "2025-04-15T08:00:00+00:00",
    "dateModified": "2025-04-15T08:00:00+00:00",
    "author": {
      "@type": "Person",
      "name": "Marc Friedman",
      "url": "https://marcfriedmanportfolio.com/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Marc Friedman Design & Development",
      "logo": {
        "@type": "ImageObject",
        "url": "https://marcfriedmanportfolio.com/apple-touch-icon.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://marcfriedmanportfolio.com/blog/paving-contractor-website-design-guide"
    }
  };

  return (
    <>
      

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => router.push('/blog')}
            className="flex items-center gap-2 text-[#A3D1FF] hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </button>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Website Design Guide for Paving Contractors: Converting Visitors to Customers
          </h1>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-white">
              <Calendar className="w-4 h-4" />
              <span>April 15, 2025</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Clock className="w-4 h-4" />
              <span>12 min read</span>
            </div>
          </div>

          <div className="aspect-[21/9] overflow-hidden rounded-xl mb-8">
            <img
              src="https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&w=2000&q=80"
              alt="Paving Contractor Website Design"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-invert max-w-none">
            <h2>Why Your Paving Company Needs a Professional Website</h2>
            <p>In today's digital-first world, your website is often the first interaction potential customers have with your paving business. When a homeowner needs driveway repair or a property manager searches for parking lot resurfacing, they're turning to Google—not the Yellow Pages.</p>

            <p>A professional website does more than just look good. It establishes credibility, showcases your expertise, and most importantly, converts visitors into paying customers. For paving contractors competing in local markets across the US, your website is your 24/7 salesperson working to generate leads even when you're on the job site.</p>

            <div className="bg-[#1b1b1b] p-6 rounded-xl border border-white/10 my-8">
              <h4 className="text-white font-semibold mb-2 flex items-center">
                <CheckCircle className="w-5 h-5 text-[#A3D1FF] mr-2" />
                The Reality of Contractor Website Performance
              </h4>
              <ul className="text-gray-300 list-disc pl-5 space-y-2">
                <li>75% of users judge a company's credibility based on website design</li>
                <li>57% of users won't recommend a business with a poorly designed mobile site</li>
                <li>88% of local searches on mobile lead to a call or visit within 24 hours</li>
                <li>First impressions are 94% design-related</li>
                <li>It takes about 50 milliseconds for users to form an opinion about your site</li>
              </ul>
            </div>

            <h2>Essential Elements Every Paving Contractor Website Needs</h2>

            <h3>1. Clear, Prominent Call-to-Action (CTA)</h3>
            <p>Your website visitors are ready to hire someone for their paving project. Make it incredibly easy for them to contact you:</p>

            <ul>
              <li><strong>Clickable Phone Number:</strong> Display your phone number prominently in the header of every page. On mobile, make it clickable so users can call with one tap.</li>
              <li><strong>Contact Form Above the Fold:</strong> Place a simple contact form where visitors see it immediately without scrolling.</li>
              <li><strong>Free Estimate Button:</strong> Use action-oriented language like "Get Your Free Estimate" or "Request a Quote Today"</li>
              <li><strong>Multiple Contact Options:</strong> Offer phone, email, and form options to accommodate different preferences.</li>
            </ul>

            <div className="bg-[#1b1b1b] p-6 rounded-xl border border-white/10 my-8">
              <h4 className="text-white font-semibold mb-2">CTA Best Practices for Paving Contractors</h4>
              <ul className="text-gray-300 space-y-2">
                <li><strong>Use Contrasting Colors:</strong> Your CTA buttons should stand out visually from the rest of your site</li>
                <li><strong>Create Urgency:</strong> Phrases like "Schedule Before Winter" or "Limited Availability This Month" can drive action</li>
                <li><strong>Mobile-First Design:</strong> Ensure CTA buttons are large enough for thumbs on mobile devices (minimum 44x44 pixels)</li>
                <li><strong>Test Placement:</strong> Try placing CTAs in the header, after project galleries, and at the end of service descriptions</li>
              </ul>
            </div>

            <h3>2. High-Quality Project Photography</h3>
            <p>Paving is a visual trade. Your work speaks volumes, but only if you show it properly:</p>

            <ul>
              <li><strong>Before and After Galleries:</strong> Nothing sells paving services better than dramatic transformations. Show cracked, worn surfaces next to your beautiful finished work.</li>
              <li><strong>High-Resolution Images:</strong> Invest in professional photography or learn to take quality photos with proper lighting and angles.</li>
              <li><strong>Variety of Projects:</strong> Display residential driveways, commercial parking lots, tennis courts, walkways—show the full scope of your capabilities.</li>
              <li><strong>Local Projects:</strong> When possible, mention the neighborhood or city where each project was completed to boost local relevance.</li>
            </ul>

            <h3>3. Service Area Maps and Location Information</h3>
            <p>Local paving contractors thrive on proximity. Make your service area crystal clear:</p>

            <ul>
              <li><strong>Interactive Service Area Map:</strong> Use Google Maps to show exactly which cities, counties, or zip codes you serve.</li>
              <li><strong>City-Specific Pages:</strong> Create dedicated landing pages for major cities in your service area (e.g., "Asphalt Paving in Springfield, IL").</li>
              <li><strong>Distance Radius:</strong> State clearly: "Proudly serving homes and businesses within 50 miles of [Your City]"</li>
              <li><strong>Response Time Information:</strong> Let customers know how quickly you can provide estimates in different areas.</li>
            </ul>

            <h3>4. Detailed Service Descriptions</h3>
            <p>Don't assume visitors know what services paving contractors offer. Educate them:</p>

            <div className="bg-[#1b1b1b] p-6 rounded-xl border border-white/10 my-8">
              <h4 className="text-white font-semibold mb-3">Key Services to Highlight:</h4>
              <div className="grid md:grid-cols-2 gap-3 text-gray-300">
                <div>
                  <strong className="text-white">Residential Services:</strong>
                  <ul className="text-sm mt-1 space-y-1">
                    <li>• Driveway installation and repair</li>
                    <li>• Driveway sealing and maintenance</li>
                    <li>• Patio and walkway paving</li>
                    <li>• Tennis court resurfacing</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-white">Commercial Services:</strong>
                  <ul className="text-sm mt-1 space-y-1">
                    <li>• Parking lot construction</li>
                    <li>• Parking lot striping and marking</li>
                    <li>• Asphalt patching and repair</li>
                    <li>• Sealcoating services</li>
                  </ul>
                </div>
              </div>
            </div>

            <p>For each service, explain:</p>
            <ul>
              <li>What the service entails</li>
              <li>Why customers might need it</li>
              <li>Benefits and expected outcomes</li>
              <li>Timeline and process overview</li>
              <li>Price ranges or factors that affect cost</li>
            </ul>

            <h3>5. Trust Signals and Social Proof</h3>
            <p>Paving projects represent significant investments. Build confidence with robust trust signals:</p>

            <ul>
              <li><strong>Customer Reviews and Testimonials:</strong> Feature authentic reviews prominently. Include the customer's name, location, and specific details about their project.</li>
              <li><strong>Professional Certifications:</strong> Display badges for industry associations, manufacturer certifications, and business licenses.</li>
              <li><strong>Insurance and Bonding Information:</strong> Clearly state that you're licensed, insured, and bonded. This is crucial for commercial clients.</li>
              <li><strong>Years in Business:</strong> Highlight your experience: "Serving [Your Area] Since [Year]"</li>
              <li><strong>Warranty Information:</strong> Describe the warranties you offer on materials and workmanship.</li>
              <li><strong>Awards and Recognition:</strong> Showcase any local business awards or industry recognition.</li>
            </ul>

            <h3>6. Mobile-Responsive Design</h3>
            <p>More than 60% of contractor searches happen on mobile devices. Your site must work flawlessly on smartphones and tablets:</p>

            <ul>
              <li><strong>Touch-Friendly Navigation:</strong> Large, tappable buttons and menu items</li>
              <li><strong>Fast Loading Speed:</strong> Compress images and minimize code for quick mobile loading</li>
              <li><strong>Readable Text:</strong> Font sizes that don't require zooming</li>
              <li><strong>Vertical-Friendly Layouts:</strong> Content that flows naturally on narrow screens</li>
              <li><strong>Click-to-Call Functionality:</strong> One-tap dialing from any page</li>
            </ul>

            <h2>Design Elements That Convert</h2>

            <h3>Hero Section That Captures Attention</h3>
            <p>Your homepage hero section has one job: immediately communicate what you do and why visitors should choose you.</p>

            <div className="bg-[#1b1b1b] p-6 rounded-xl border border-white/10 my-8">
              <h4 className="text-white font-semibold mb-2">Effective Hero Section Formula:</h4>
              <ul className="text-gray-300 space-y-2">
                <li><strong>Compelling Headline:</strong> "Professional Asphalt Paving & Driveway Installation in [Your City]"</li>
                <li><strong>Value Proposition:</strong> "30+ Years Experience • Licensed & Insured • Free Estimates"</li>
                <li><strong>Visual Impact:</strong> High-quality image or video of your best work</li>
                <li><strong>Primary CTA:</strong> Prominent "Get Free Estimate" button</li>
                <li><strong>Trust Indicator:</strong> "5-Star Rated on Google" or similar badge</li>
              </ul>
            </div>

            <h3>Color Psychology for Paving Contractors</h3>
            <p>Colors influence emotions and decisions. Choose your website palette strategically:</p>

            <ul>
              <li><strong>Blue:</strong> Conveys trust, professionalism, and reliability—excellent primary color choice</li>
              <li><strong>Orange:</strong> Creates urgency and excitement—great for CTA buttons</li>
              <li><strong>Green:</strong> Represents growth and eco-friendliness—perfect if you offer green paving solutions</li>
              <li><strong>Gray/Black:</strong> Professional and sophisticated—works well for commercial-focused contractors</li>
              <li><strong>Red:</strong> Attention-grabbing—use sparingly for urgent CTAs</li>
            </ul>

            <p>Maintain consistency across your website, matching your logo and vehicle branding when possible.</p>

            <h3>Typography That's Easy to Read</h3>
            <p>Your website visitors include busy property managers, homeowners, and facility directors who are scanning quickly:</p>

            <ul>
              <li>Use clean, sans-serif fonts for body text (16px minimum)</li>
              <li>Make headings substantially larger (24-36px) for clear hierarchy</li>
              <li>Ensure high contrast between text and background</li>
              <li>Break up long paragraphs—aim for 2-3 sentences per paragraph</li>
              <li>Use bullet points and lists for easy scanning</li>
            </ul>

            <h2>Content Strategy for Paving Contractors</h2>

            <h3>Write for Your Audience, Not Yourself</h3>
            <p>Your website copy should address customer concerns and questions:</p>

            <ul>
              <li><strong>Instead of:</strong> "We use advanced asphalt laying techniques with state-of-the-art equipment"</li>
              <li><strong>Say:</strong> "Your new driveway will last 20+ years with our proven installation process"</li>
            </ul>

            <p>Focus on benefits, not features. Customers don't care about your equipment—they care about getting a beautiful, long-lasting driveway at a fair price.</p>

            <h3>Educational Content Builds Authority</h3>
            <p>Create content that answers common questions and positions you as the local expert:</p>

            <div className="bg-[#1b1b1b] p-6 rounded-xl border border-white/10 my-8">
              <h4 className="text-white font-semibold mb-3">Content Topics That Attract Customers:</h4>
              <ul className="text-gray-300 space-y-2">
                <li><strong>Timing Guides:</strong> "Best Time of Year to Pave Your Driveway in [State/Region]"</li>
                <li><strong>Cost Breakdowns:</strong> "How Much Does Asphalt Paving Cost? Complete 2025 Price Guide"</li>
                <li><strong>Material Comparisons:</strong> "Asphalt vs. Concrete Driveways: Which is Better for [Climate]?"</li>
                <li><strong>Maintenance Tips:</strong> "5 Ways to Extend Your Driveway's Lifespan"</li>
                <li><strong>Problem-Solution Articles:</strong> "7 Signs Your Parking Lot Needs Immediate Attention"</li>
                <li><strong>Process Explanations:</strong> "What to Expect: Our Step-by-Step Paving Process"</li>
              </ul>
            </div>

            <h3>Local Content for Local Searches</h3>
            <p>Create location-specific content to capture searches in your service area:</p>

            <ul>
              <li>Blog posts about local weather and its effects on pavement</li>
              <li>Guides specific to local regulations and permit requirements</li>
              <li>Seasonal content tailored to your region's climate</li>
              <li>Community involvement and local project highlights</li>
            </ul>

            <h2>Technical Requirements for Success</h2>

            <h3>Website Speed Optimization</h3>
            <p>Slow websites lose customers. A one-second delay can reduce conversions by 7%:</p>

            <ul>
              <li><strong>Image Optimization:</strong> Compress all photos to 200KB or less without sacrificing quality</li>
              <li><strong>Minimize Code:</strong> Clean, efficient code loads faster</li>
              <li><strong>Use a CDN:</strong> Content Delivery Networks serve your site from nearby servers</li>
              <li><strong>Enable Caching:</strong> Store static elements so returning visitors load pages instantly</li>
              <li><strong>Choose Quality Hosting:</strong> Budget hosting creates slow, unreliable websites</li>
            </ul>

            <p>Aim for load times under 3 seconds on mobile networks.</p>

            <h3>Security Features</h3>
            <p>Protect your business and customer information:</p>

            <ul>
              <li><strong>SSL Certificate:</strong> Essential for secure data transmission and Google ranking</li>
              <li><strong>Regular Backups:</strong> Daily automated backups prevent data loss</li>
              <li><strong>Security Monitoring:</strong> Detect and prevent hacking attempts</li>
              <li><strong>Form Protection:</strong> Prevent spam submissions with CAPTCHA or similar tools</li>
            </ul>

            <h3>Analytics and Tracking</h3>
            <p>You can't improve what you don't measure. Install these tracking tools:</p>

            <ul>
              <li><strong>Google Analytics:</strong> Track visitor behavior, traffic sources, and conversion paths</li>
              <li><strong>Google Search Console:</strong> Monitor search performance and technical issues</li>
              <li><strong>Call Tracking:</strong> Use unique phone numbers to track which marketing generates calls</li>
              <li><strong>Form Analytics:</strong> See where users abandon forms and optimize accordingly</li>
              <li><strong>Heat Mapping:</strong> Understand how visitors interact with your pages</li>
            </ul>

            <h2>Integration with Business Operations</h2>

            <h3>Online Booking and Scheduling</h3>
            <p>Make it easy for customers to schedule estimates:</p>

            <ul>
              <li>Integrated calendar showing your availability</li>
              <li>Automated confirmation emails</li>
              <li>Reminder notifications before appointments</li>
              <li>Easy rescheduling options</li>
            </ul>

            <h3>Customer Portal Features</h3>
            <p>For larger projects, consider a client portal where customers can:</p>

            <ul>
              <li>View project timeline and milestones</li>
              <li>Access proposals and contracts digitally</li>
              <li>Make online payments</li>
              <li>Submit change requests</li>
              <li>View progress photos</li>
            </ul>

            <h3>CRM Integration</h3>
            <p>Connect your website to customer relationship management software:</p>

            <ul>
              <li>Automatically capture leads from contact forms</li>
              <li>Track communication history with prospects</li>
              <li>Set up automated follow-up sequences</li>
              <li>Generate proposals and contracts directly from inquiries</li>
            </ul>

            <h2>Common Website Mistakes Paving Contractors Make</h2>

            <h3>1. Generic Stock Photos</h3>
            <p>Using stock photos of random driveways and parking lots destroys credibility. Visitors can tell these aren't your actual projects. Always use real photos of your work, even if they're taken with a smartphone.</p>

            <h3>2. Outdated Copyright Dates</h3>
            <p>A website footer showing "© 2019" signals you don't maintain your site—or maybe your business. Keep copyright dates current or use dynamic dates that update automatically.</p>

            <h3>3. No Clear Service Area</h3>
            <p>Visitors from 100 miles away shouldn't have to guess whether you serve their location. State your service area prominently and save everyone time.</p>

            <h3>4. Technical Jargon Overload</h3>
            <p>Not everyone knows what "Grade II aggregate base" or "prime coat application" means. Explain technical terms or use plain language that homeowners understand.</p>

            <h3>5. Hidden Contact Information</h3>
            <p>Making visitors hunt for your phone number is counterproductive. Display it prominently on every page, especially mobile.</p>

            <h3>6. Auto-Playing Videos</h3>
            <p>Nothing drives visitors away faster than unexpected sound. If you use videos, make them click-to-play.</p>

            <h3>7. Lack of Social Proof</h3>
            <p>No reviews, testimonials, or project examples creates doubt. Even new businesses can get testimonials from friends, family, or early clients.</p>

            <h2>Maintenance and Updates</h2>

            <h3>Regular Content Updates</h3>
            <p>Keep your website fresh and relevant:</p>

            <ul>
              <li><strong>Monthly Blog Posts:</strong> Add new content regularly for SEO and authority building</li>
              <li><strong>Seasonal Updates:</strong> Adjust messaging for spring paving season, winter preparation, etc.</li>
              <li><strong>New Project Galleries:</strong> Add recent projects to show ongoing activity</li>
              <li><strong>Updated Pricing Information:</strong> Reflect current market rates and offerings</li>
            </ul>

            <h3>Technical Maintenance</h3>
            <p>Schedule regular technical checkups:</p>

            <ul>
              <li>Software and plugin updates</li>
              <li>Broken link checks and fixes</li>
              <li>Security scans and patches</li>
              <li>Performance optimization</li>
              <li>Mobile compatibility testing</li>
            </ul>

            <h2>Budget Considerations</h2>

            <h3>Initial Investment</h3>
            <p>Quality paving contractor websites typically range from:</p>

            <ul>
              <li><strong>Basic Professional Site:</strong> $2,500 - $5,000 (5-10 pages, template-based design)</li>
              <li><strong>Custom Professional Site:</strong> $5,000 - $15,000 (Custom design, advanced features)</li>
              <li><strong>Premium Enterprise Site:</strong> $15,000+ (Full custom, integrations, advanced functionality)</li>
            </ul>

            <h3>Ongoing Costs</h3>
            <p>Budget for monthly expenses:</p>

            <ul>
              <li><strong>Hosting:</strong> $20-100/month depending on traffic and features</li>
              <li><strong>Maintenance:</strong> $100-500/month for updates and support</li>
              <li><strong>Content Creation:</strong> $200-1000/month for blog posts and updates</li>
              <li><strong>SEO Services:</strong> $500-2000/month for optimization and local search</li>
            </ul>

            <h3>Return on Investment</h3>
            <p>A professional website pays for itself quickly:</p>

            <ul>
              <li>One residential driveway project typically covers your entire website investment</li>
              <li>Two commercial parking lot jobs can fund a year of marketing</li>
              <li>Reduced need for expensive print advertising</li>
              <li>24/7 lead generation without additional labor costs</li>
            </ul>

            <h2>Getting Started: Your Website Launch Checklist</h2>

            <div className="bg-[#1b1b1b] p-6 rounded-xl border border-white/10 my-8">
              <h4 className="text-white font-semibold mb-3">Pre-Launch Essentials:</h4>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#A3D1FF] mr-2 mt-1 flex-shrink-0" />
                  <span>Gather 20-30 high-quality photos of completed projects</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#A3D1FF] mr-2 mt-1 flex-shrink-0" />
                  <span>Collect customer testimonials and reviews</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#A3D1FF] mr-2 mt-1 flex-shrink-0" />
                  <span>List all services you offer with descriptions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#A3D1FF] mr-2 mt-1 flex-shrink-0" />
                  <span>Define your exact service area and territories</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#A3D1FF] mr-2 mt-1 flex-shrink-0" />
                  <span>Gather certification and insurance documentation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#A3D1FF] mr-2 mt-1 flex-shrink-0" />
                  <span>Write company history and team bios</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#A3D1FF] mr-2 mt-1 flex-shrink-0" />
                  <span>Create or update your logo and branding</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#A3D1FF] mr-2 mt-1 flex-shrink-0" />
                  <span>Set up business email addresses</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#A3D1FF] mr-2 mt-1 flex-shrink-0" />
                  <span>Choose your domain name and purchase it</span>
                </li>
              </ul>
            </div>

            <h2>Conclusion: Your Website is an Investment in Growth</h2>
            <p>A professional website isn't an expense—it's a growth tool that works around the clock to generate leads and build your reputation. While word-of-mouth and truck lettering still matter, your website reaches customers actively searching for paving services right now.</p>

            <p>The paving industry is competitive, and contractors with professional, well-designed websites consistently win more bids and charge premium prices. Homeowners and property managers associate website quality with work quality, fair or not.</p>

            <p>Start with the fundamentals: clear services, compelling photos, easy contact options, and mobile responsiveness. Then gradually add educational content, customer testimonials, and advanced features as your business grows.</p>

            <p>Remember, your website should evolve with your business. What starts as a simple 5-page site can grow into a comprehensive resource that establishes you as the go-to paving expert in your area.</p>

            <p>The question isn't whether you can afford a professional website—it's whether you can afford not to have one when your competitors do.</p>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex items-center gap-4">
              <img
                src="https://ik.imagekit.io/qcvroy8xpd/PW8VUKH.png?updatedAt=1759693058055&tr=f-webp"
                alt="Marc Friedman"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold text-white">Marc Friedman</h3>
                <p className="text-white">Full Stack Designer & Developer</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10">
            <h3 className="text-xl font-semibold text-white mb-4">Share this article</h3>
            <div className="flex gap-3">
              <button className="p-3 bg-[#1b1b1b] rounded-full hover:bg-[#1877F2]/20 text-[#1877F2] transition-colors">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="p-3 bg-[#1b1b1b] rounded-full hover:bg-[#1DA1F2]/20 text-[#1DA1F2] transition-colors">
                <TwitterIcon className="w-5 h-5" />
              </button>
              <button className="p-3 bg-[#1b1b1b] rounded-full hover:bg-[#0077B5]/20 text-[#0077B5] transition-colors">
                <Linkedin className="w-5 h-5" />
              </button>
              <button className="p-3 bg-[#1b1b1b] rounded-full hover:bg-[#A3D1FF]/20 text-[#A3D1FF] transition-colors">
                <Link className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-semibold text-white mb-6">Related Articles</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-[#1b1b1b] rounded-xl overflow-hidden border border-white/10 hover:border-[#A3D1FF] transition-all group">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=2000&q=80"
                    alt="SEO for Paving Contractors"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-[#A3D1FF] transition-colors">Local SEO for Paving Contractors: Dominate Your Market</h4>
                  <p className="text-white text-sm mb-4">Master local search optimization to ensure your paving business appears first when customers search.</p>
                  <button
                    onClick={() => router.push('/blog/local-seo-for-paving-contractors')}
                    className="text-[#A3D1FF] text-sm flex items-center gap-1 hover:underline"
                  >
                    Read Article
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

              <div className="bg-[#1b1b1b] rounded-xl overflow-hidden border border-white/10 hover:border-[#A3D1FF] transition-all group">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=80"
                    alt="Digital Marketing for Contractors"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-[#A3D1FF] transition-colors">Digital Marketing Strategy for Asphalt Contractors</h4>
                  <p className="text-white text-sm mb-4">Complete guide to attracting more customers through strategic online marketing.</p>
                  <button
                    onClick={() => router.push('/blog/digital-marketing-asphalt-contractors')}
                    className="text-[#A3D1FF] text-sm flex items-center gap-1 hover:underline"
                  >
                    Read Article
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Build a Website That Wins More Jobs?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Let's create a professional website that showcases your paving expertise and converts visitors into customers.
          </p>
          <MagneticButton>
            <button
              onClick={() => router.push('/contact')}
              className="mr_btn mr_btn_primary inline-flex items-center gap-2"
            >
              <span>Start Your Website Project</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </MagneticButton>
        </div>
      </section>
    </>
  );
}
