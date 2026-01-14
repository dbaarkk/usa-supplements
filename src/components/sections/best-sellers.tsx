"use client";

import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

interface Product {
  id: number;
  title: string;
  image: string;
  originalPrice: string;
  discountedPrice: string;
  badge?: {
    text: string;
    type: 'sale' | 'hot';
  };
}

const bestSellers: Product[] = [
  {
    id: 1,
    title: 'Wellcore – Micronised Creatine Monohydrate (307g, 83 Servings)',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e1e5bff6-b1a5-4818-94d8-ef9ba9f8716e-ussupplements-in/assets/images/IMG_3168-300x300-8.webp',
    originalPrice: '₹1,499.00',
    discountedPrice: '₹749.00',
  },
  {
    id: 2,
    title: 'Muscletech Platinum 100% Creatine Powder 250 Gram, 83 Servings',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e1e5bff6-b1a5-4818-94d8-ef9ba9f8716e-ussupplements-in/assets/images/71ANPWWdqL__SL1500_-300x300-9.jpg',
    originalPrice: '₹1,999.00',
    discountedPrice: '₹599.00',
  },
  {
    id: 3,
    title: 'Alpino High Protein Super Rolled Oats Chocolate 2.5kg',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e1e5bff6-b1a5-4818-94d8-ef9ba9f8716e-ussupplements-in/assets/images/IMG_1746-300x300-10.webp',
    originalPrice: '₹1,299.00',
    discountedPrice: '₹999.00',
    badge: { text: '-23%', type: 'sale' },
  },
  {
    id: 4,
    title: 'USA Supplements Shaker',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e1e5bff6-b1a5-4818-94d8-ef9ba9f8716e-ussupplements-in/assets/images/IMG_5369-300x300-11.jpeg',
    originalPrice: '₹499.00',
    discountedPrice: '₹99.00',
    badge: { text: '-80%', type: 'hot' },
  },
];

export default function BestSellers() {
  return (
    <section className="py-10 bg-white">
      <div className="container px-4 mx-auto max-w-[1200px]">
        <div className="flex items-end justify-between pb-2 mb-6 border-b border-[#dddddd]">
          <h2 className="text-[24px] md:text-[28px] font-extrabold italic uppercase tracking-tight text-[#222222]">
            Shop The Best Sellers
          </h2>
          <a
            href="/products"
            className="flex items-center text-[14px] font-bold text-[#222222] hover:text-[#1b3068] transition-colors"
          >
            Shop All
            <ChevronRight className="w-4 h-4 ml-1" />
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {bestSellers.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col h-full bg-white border border-[#dddddd] hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden">
                {product.badge && (
                  <div className="absolute top-2 left-2 z-10">
                    <span
                      className={`text-[10px] font-extrabold px-1.5 py-0.5 text-white uppercase ${
                        product.badge.type === 'hot' ? 'bg-[#c62828]' : 'bg-[#4caf50]'
                      }`}
                    >
                      {product.badge.text}
                    </span>
                  </div>
                )}
                <div className="w-full h-full relative">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="flex flex-col flex-grow text-center p-4">
                <h3 className="text-[13px] md:text-[14px] font-semibold text-[#222222] leading-[1.4] mb-2 line-clamp-2 min-h-[40px] not-italic normal-case">
                  {product.title}
                </h3>
                
                <div className="mt-auto mb-4">
                  <span className="text-[12px] md:text-[13px] text-[#777777] line-through mr-2">
                    {product.originalPrice}
                  </span>
                  <span className="text-[14px] md:text-[15px] font-bold text-[#c62828]">
                    {product.discountedPrice}
                  </span>
                </div>

                <button 
                  className="w-full bg-[#1b3068] hover:bg-[#14244e] text-white text-[12px] md:text-[13px] font-bold uppercase py-[10px] transition-colors tracking-wide"
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
