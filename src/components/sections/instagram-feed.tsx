import React from 'react';
import { ChevronRight } from 'lucide-react';

/**
 * InstagramFeed Component
 * 
 * Clones the "Join Us On Instagram" section header and placeholder.
 * Based on the design instructions, it features a bold italic headline,
 * an instagram handle link with a chevron icon, and a feed status message.
 */
export default function InstagramFeed() {
  return (
    <section className="py-[40px] md:py-[60px] bg-white">
      <div className="container mx-auto px-4 max-w-[1200px]">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#dddddd] pb-2 mb-8">
          <h2 className="text-[24px] md:text-[28px] font-extrabold italic uppercase tracking-tight text-[#222222] leading-tight">
            Join Us On Instagram
          </h2>
          
          <a 
            href="https://www.instagram.com/ussupplements.in/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-[14px] md:text-[16px] font-bold text-[#222222] hover:opacity-80 transition-opacity mt-2 md:mt-0"
          >
            @Ussupplements.In
            <ChevronRight className="w-4 h-4 ml-1" />
          </a>
        </div>

        {/* Feed Placeholder Area */}
        <div className="py-8">
          <p className="text-[14px] font-medium text-[#777777]">
            An error occurred while retrieving media
          </p>
        </div>
      </div>

      <style jsx global>{`
        /* Ensuring consistency with the project's brand typography if not already applied by globals.css */
        .instagram-section-title {
          font-family: "Inter", ui-sans-serif, system-ui, sans-serif;
        }
      `}</style>
    </section>
  );
}