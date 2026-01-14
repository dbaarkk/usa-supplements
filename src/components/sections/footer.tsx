"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const SHOP_LINKS = [
  { label: 'Whey Protein', href: '/products?category=whey-protein' },
  { label: 'Mass Gainer', href: '/products?category=mass-gainer' },
  { label: 'Pre-Workout', href: '/products?category=pre-workout' },
  { label: 'Fat Burner', href: '/products?category=fat-burner' },
  { label: 'BCAA', href: '/products?category=bcaa' },
];

const INFO_LINKS = [
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Track Order', href: '/track-order' },
];

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Refund Policy', href: '/refund-policy' },
  { label: 'Shipping Policy', href: '/shipping-policy' },
];

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <footer className="bg-[#f0f7ff]">
      <div className="container mx-auto px-4 max-w-[1200px] py-12">
        <div className="text-center mb-12">
          <h3 className="text-[24px] md:text-[28px] font-extrabold italic uppercase tracking-tight text-[#222222] mb-4">
            Subscribe Today
          </h3>
          <p className="text-[14px] text-[#777777] mb-6">
            Get exclusive offers, updates, and fitness tips delivered to your inbox.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row justify-center gap-2 max-w-[500px] mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 py-3 px-4 border border-[#dddddd] text-[14px] focus:outline-none focus:border-[#1b3068]"
              required
            />
            <button
              type="submit"
              className="bg-[#c62828] hover:bg-[#a82020] text-white font-bold uppercase text-[14px] py-3 px-8 transition-colors flex items-center justify-center gap-1"
            >
              Subscribe
              <ChevronRight className="w-4 h-4" />
            </button>
          </form>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-[#dddddd]">
          <div className="col-span-2 md:col-span-1">
            <Image
              src="/logo.png"
              alt="USA Supplements"
              width={160}
              height={50}
              className="h-[50px] w-auto mb-4"
            />
            <p className="text-[13px] text-[#777777] leading-[1.6]">
              Your trusted destination for premium fitness nutrition and supplements.
            </p>
          </div>

          <div>
            <h4 className="text-[14px] font-bold uppercase text-[#222222] mb-4 not-italic">Shop</h4>
            <ul className="space-y-2">
              {SHOP_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[13px] text-[#777777] hover:text-[#1b3068] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[14px] font-bold uppercase text-[#222222] mb-4 not-italic">Info</h4>
            <ul className="space-y-2">
              {INFO_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[13px] text-[#777777] hover:text-[#1b3068] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[14px] font-bold uppercase text-[#222222] mb-4 not-italic">Legal</h4>
            <ul className="space-y-2">
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[13px] text-[#777777] hover:text-[#1b3068] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#dddddd]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[12px] text-[#777777]">
              © {new Date().getFullYear()} USA Supplements. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              <Image src="https://cdn-icons-png.flaticon.com/128/196/196578.png" alt="Visa" width={40} height={25} className="h-[25px] w-auto opacity-70" />
              <Image src="https://cdn-icons-png.flaticon.com/128/196/196561.png" alt="Mastercard" width={40} height={25} className="h-[25px] w-auto opacity-70" />
              <Image src="https://cdn-icons-png.flaticon.com/128/196/196566.png" alt="PayPal" width={40} height={25} className="h-[25px] w-auto opacity-70" />
              <Image src="https://cdn-icons-png.flaticon.com/128/5968/5968299.png" alt="UPI" width={40} height={25} className="h-[25px] w-auto opacity-70" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
