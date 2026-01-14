"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Search, User, ShoppingCart, Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'All Products', href: '/products', badge: 'Sale' },
  { label: 'Shaker', href: '/shaker' },
  { label: 'Latest Deals', href: '/deals', badge: 'Hot' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="bg-[#222222] text-white py-2 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex">
          <span className="mx-8 text-[13px] font-semibold tracking-wider">
            ✦ ONE LIFE ONE BODY ONE CHANCE ✦
          </span>
          <span className="mx-8 text-[13px] font-semibold tracking-wider">
            ✦ ONE LIFE ONE BODY ONE CHANCE ✦
          </span>
          <span className="mx-8 text-[13px] font-semibold tracking-wider">
            ✦ ONE LIFE ONE BODY ONE CHANCE ✦
          </span>
          <span className="mx-8 text-[13px] font-semibold tracking-wider">
            ✦ ONE LIFE ONE BODY ONE CHANCE ✦
          </span>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="flex items-center justify-between py-4 gap-4">
            <a href="/" className="flex-shrink-0">
              <Image
                src="/logo.png"
                alt="USA Supplements"
                width={320}
                height={100}
                className="h-[80px] md:h-[100px] w-auto"
                priority
              />
            </a>

          <div className="hidden md:flex flex-1 max-w-[500px] mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-2.5 px-4 pr-12 border border-[#dddddd] text-[14px] focus:outline-none focus:border-[#1b3068]"
              />
              <button className="absolute right-0 top-0 h-full px-4 bg-[#1b3068] text-white hover:bg-[#14244e] transition-colors">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a href="/account" className="hidden md:flex items-center gap-2 text-[13px] font-semibold text-[#222222] hover:text-[#1b3068] transition-colors">
              <User className="w-5 h-5" />
              <span>Login / Register</span>
            </a>
            <a href="/cart" className="relative flex items-center gap-2 text-[#222222] hover:text-[#1b3068] transition-colors">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-[#c62828] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </a>
            <button 
              className="md:hidden text-[#222222]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <nav className="hidden md:block border-t border-[#dddddd]">
          <ul className="flex items-center justify-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="flex items-center gap-1.5 px-5 py-3 text-[14px] font-bold uppercase text-[#222222] hover:text-[#1b3068] transition-colors"
                >
                  {item.label}
                  {item.badge && (
                    <span className={`text-[10px] px-1.5 py-0.5 font-extrabold text-white ${item.badge === 'Hot' ? 'bg-[#c62828]' : 'bg-[#4caf50]'}`}>
                      {item.badge}
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#dddddd]">
          <div className="p-4">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-2.5 px-4 pr-12 border border-[#dddddd] text-[14px] focus:outline-none focus:border-[#1b3068]"
              />
              <button className="absolute right-0 top-0 h-full px-4 bg-[#1b3068] text-white">
                <Search className="w-5 h-5" />
              </button>
            </div>
            <ul className="space-y-0">
              {NAV_ITEMS.map((item) => (
                <li key={item.label} className="border-b border-[#dddddd] last:border-b-0">
                  <a
                    href={item.href}
                    className="flex items-center gap-2 py-3 text-[14px] font-bold uppercase text-[#222222]"
                  >
                    {item.label}
                    {item.badge && (
                      <span className={`text-[10px] px-1.5 py-0.5 font-extrabold text-white ${item.badge === 'Hot' ? 'bg-[#c62828]' : 'bg-[#4caf50]'}`}>
                        {item.badge}
                      </span>
                    )}
                  </a>
                </li>
              ))}
              <li className="pt-3">
                <a href="/account" className="flex items-center gap-2 text-[14px] font-semibold text-[#222222]">
                  <User className="w-5 h-5" />
                  Login / Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </header>
  );
}
