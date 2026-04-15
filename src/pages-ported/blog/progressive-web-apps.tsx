"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Share2, Linkedin, Facebook, Link, ArrowRight, Globe, Zap, Bell, Smartphone, DollarSign } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';
import TwitterIcon from '@/components/TwitterIcon';
import { useRouter } from 'next/navigation';
export default function ProgressiveWebAppsPage() {
  const router = useRouter();
  
  // Blog post schema for SEO
  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Progressive Web Apps (PWAs): The Best of Both Worlds",
    "description": "Discover how PWAs combine the best features of websites and native apps to provide enhanced user experiences while reducing development costs.",
    "image": "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=2000&q=80",
    "datePublished": "2025-06-15T08:00:00+00:00",
    "dateModified": "2025-06-15T08:00:00+00:00",
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
      "@id": "https://marcfriedmanportfolio.com/blog/progressive-web-apps"
    }
  };

  return (
    <>
      

      {/* Hero Section */}
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
            Progressive Web Apps (PWAs): The Best of Both Worlds
          </h1>
          
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-white">
              <Calendar className="w-4 h-4" />
              <span>June 15, 2025</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Clock className="w-4 h-4" />
              <span>6 min read</span>
            </div>
          </div>
          
          <div className="aspect-[21/9] overflow-hidden mb-8">
            <img 
              src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=2000&q=80" 
              alt="Progressive Web Apps" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="lead">Stop wasting time and money on developing and maintaining separate mobile apps for iOS and Android. Start providing your users with an app-like experience right from their web browsers with Progressive Web Apps (PWAs).</p>
            
            <h2>1. No App Store Barriers</h2>
            <p>Traditional mobile apps require users to download them from the app store. This means users must take additional steps to get started, and businesses must manage separate app updates and versions. PWAs eliminate this barrier — users simply access them via a URL. This means businesses can reach users instantly without the friction of an app download.</p>
            
            <div className="bg-[#1b1b1b] p-6 border border-white/10 my-8">
              <h4 className="text-white font-semibold mb-2 flex items-center">
                <Globe className="w-5 h-5 text-[#A3D1FF] mr-2" />
                Instant Accessibility
              </h4>
              <p className="text-gray-300">Users can access your PWA immediately through a URL, without the need to visit an app store, wait for downloads, or go through installation processes. This significantly reduces the barrier to entry and increases the likelihood of user engagement.</p>
            </div>
            
            <h2>2. Enhanced Performance</h2>
            <p>PWAs are designed for speed. By leveraging caching and service workers, they load instantly even in low-network environments. Unlike traditional websites, which can often be slow to load on mobile devices, PWAs give users an app-like speed, regardless of their internet connection. This results in higher user engagement and retention.</p>
            
            <div className="bg-[#1b1b1b] p-6 border border-white/10 my-8">
              <h4 className="text-white font-semibold mb-2 flex items-center">
                <Zap className="w-5 h-5 text-[#A3D1FF] mr-2" />
                Case Study: Performance Impact
              </h4>
              <p className="text-gray-300">When Pinterest rebuilt their mobile web experience as a PWA, they saw significant improvements: 40% increase in time spent on site, 44% increase in user-generated ad revenue, and 60% increase in core engagements.</p>
            </div>
            
            <h2>3. Better User Engagement with Push Notifications</h2>
            <p>One of the key benefits of PWAs is the ability to send push notifications to users. These notifications can prompt users to return to your app, notify them of special promotions, or keep them updated on important news. This functionality is traditionally found in native apps, but PWAs allow you to offer the same feature without needing to install anything from an app store.</p>
            
            <div className="bg-[#1b1b1b] p-6 border border-white/10 my-8">
              <h4 className="text-white font-semibold mb-2 flex items-center">
                <Bell className="w-5 h-5 text-[#A3D1FF] mr-2" />
                Engagement Strategy
              </h4>
              <p className="text-gray-300">Push notifications can increase user engagement by up to 88% when implemented strategically. The key is to provide value with each notification rather than sending generic messages that might be perceived as spam.</p>
            </div>
            
            <h2>4. Cost-Effective Development</h2>
            <p>Developing a native app for each platform (iOS, Android, etc.) can be time-consuming and expensive. PWAs, on the other hand, are built once and can be deployed across all platforms. This eliminates the need for separate development teams and saves businesses significant resources.</p>
            
            <div className="bg-[#1b1b1b] p-6 border border-white/10 my-8">
              <h4 className="text-white font-semibold mb-2 flex items-center">
                <DollarSign className="w-5 h-5 text-[#A3D1FF] mr-2" />
                Cost Comparison
              </h4>
              <p className="text-gray-300">Building and maintaining separate native apps for iOS and Android can cost 2-3 times more than developing a single PWA that works across all platforms. This doesn't even account for the ongoing maintenance costs, which are also significantly reduced with PWAs.</p>
            </div>
            
            <h2>5. SEO-Friendly</h2>
            <p>Unlike native apps, which are not indexed by search engines, PWAs are part of the web ecosystem. This means they can be indexed and ranked by Google and other search engines, giving your app greater visibility. As a result, PWAs can help improve your website's SEO and drive more organic traffic.</p>
            
            <h2>Key Benefits of PWAs for Businesses</h2>
            
            <h3>1. Increased Conversion Rates</h3>
            <p>Studies have shown that PWAs lead to improved conversion rates, as users are more likely to engage with and return to a site that functions smoothly on any device. For example, a major retailer reported a 50% increase in conversions after launching their PWA.</p>
            
            <h3>2. Increased User Retention</h3>
            <p>With the ability to send push notifications and work offline, PWAs keep users engaged for longer periods, leading to higher retention rates. This makes PWAs a valuable tool for businesses looking to build long-term relationships with customers.</p>
            
            <h3>3. Lower Development and Maintenance Costs</h3>
            <p>Developing a PWA is far less expensive than building multiple native apps for iOS, Android, and web platforms. Additionally, PWAs are easier to maintain and update, as there is only one version of the app to manage.</p>
            
            <h3>4. Improved User Experience</h3>
            <p>The fast, responsive, and app-like nature of PWAs results in a seamless user experience. Users will appreciate the instant loading times, smooth interactions, and the ability to access the app even when offline, leading to better overall satisfaction.</p>
            
            <h2>Why Businesses Should Consider PWAs</h2>
            <p>In a world where user experience is paramount, PWAs provide businesses with a powerful way to engage users across devices, enhance their browsing experience, and ultimately drive conversions. PWAs are especially beneficial for businesses that want to provide a mobile-first experience without the complexities of native app development.</p>
            
            <p>Whether you're an e-commerce site looking to increase sales, a media platform aiming to engage users, or any other business wanting to provide an app-like experience on the web, PWAs offer the best of both worlds: the reach of the web with the functionality of a mobile app.</p>
            
            <h2>How to Get Started with PWAs</h2>
            <p>If you're considering transitioning to a PWA, the first step is to evaluate your website's current performance and structure. PWAs are built using modern web technologies, including service workers, caching, and the Web App Manifest. You'll want to ensure your website is responsive, lightweight, and optimized for fast loading.</p>
            
            <p>From there, you can start integrating PWA-specific features like offline functionality, push notifications, and app-like navigation. If you're not familiar with building PWAs, partnering with an experienced web development agency can help you get up to speed and implement the best practices.</p>
            
            <div className="bg-[#1b1b1b] p-6 border border-white/10 my-8">
              <h4 className="text-white font-semibold mb-2 flex items-center">
                <Smartphone className="w-5 h-5 text-[#A3D1FF] mr-2" />
                PWA Checklist
              </h4>
              <ul className="text-gray-300 space-y-2">
                <li>• Responsive design that works on all devices</li>
                <li>• Service worker implementation for offline functionality</li>
                <li>• Web App Manifest for "add to home screen" capability</li>
                <li>• HTTPS for security</li>
                <li>• Fast load times (under 3 seconds)</li>
                <li>• Push notification integration</li>
              </ul>
            </div>
            
            <h2>Conclusion</h2>
            <p>Progressive Web Apps offer businesses the best of both worlds: the accessibility and visibility of the web combined with the performance and engagement of mobile apps. With PWAs, you can provide your users with a seamless, fast, and enjoyable experience, driving conversions and keeping them coming back for more. As technology continues to evolve, PWAs will play an increasingly critical role in shaping the future of web development.</p>
          </div>
          
          {/* Author Section */}
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
          
          {/* Share Section */}
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
          
          {/* Related Articles */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-semibold text-white mb-6">Related Articles</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-[#1b1b1b] overflow-hidden border border-white/10 hover:border-[#A3D1FF] transition-all group">
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=2000&q=80" 
                    alt="Optimizing Your Website for AI Crawlers" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-[#A3D1FF] transition-colors">Optimizing Your Website for AI Crawlers: The Complete Guide</h4>
                  <p className="text-white text-sm mb-4">As AI becomes more integrated into search, learn how to optimize your website for AI crawlers to improve visibility.</p>
                  <button 
                    onClick={() => router.push('/blog/optimizing-websites-for-ai-crawlers')}
                    className="text-[#A3D1FF] text-sm flex items-center gap-1 hover:underline"
                  >
                    Read Article
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
              
              <div className="bg-[#1b1b1b] overflow-hidden border border-white/10 hover:border-[#A3D1FF] transition-all group">
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=2000&q=80" 
                    alt="The Future of SaaS Web Design" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-[#A3D1FF] transition-colors">The Future of SaaS Web Design: Merging Aesthetics with Functionality</h4>
                  <p className="text-white text-sm mb-4">Explore the evolving landscape of SaaS web design and how it's shaping the future of digital products.</p>
                  <button 
                    onClick={() => router.push('/blog/future-of-saas-web-design')}
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

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your PWA?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Let's create a progressive web app that provides your users with a seamless experience across all devices while saving you development time and costs.
          </p>
          <MagneticButton>
            <button
              onClick={() => router.push('/contact')}
              className="mr_btn mr_btn_primary inline-flex items-center gap-2"
            >
              <span>Start Your PWA Project</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </MagneticButton>
        </div>
      </section>
    </>
  );
}