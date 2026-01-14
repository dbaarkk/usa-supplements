"use client";

import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  image: string;
  originalPrice: string;
  discountedPrice: string;
}

const PRODUCTS: Product[] = [
  {
    id: 'pintola-muesli',
    name: 'Pintola High Protein Muesli Dark Chocolate & Cranberry – 1 Kg',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e1e5bff6-b1a5-4818-94d8-ef9ba9f8716e-ussupplements-in/assets/images/IMG_7219-300x300-18.webp',
    originalPrice: '₹799.00',
    discountedPrice: '₹400.00',
  },
  {
    id: 'pintola-oats',
    name: 'Pintola High Protein Oats – 1 Kg, Dark Chocolate',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e1e5bff6-b1a5-4818-94d8-ef9ba9f8716e-ussupplements-in/assets/images/IMG_7206-300x300-19.webp',
    originalPrice: '₹620.00',
    discountedPrice: '₹350.00',
  },
  {
    id: 'inferno-preworkout',
    name: 'THE BIG DADDY INFERNO PREWORKOUT 50 SERVINGS + FREE SHAKER',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e1e5bff6-b1a5-4818-94d8-ef9ba9f8716e-ussupplements-in/assets/images/IMG_7140-1-300x300-20.webp',
    originalPrice: '₹2,399.00',
    discountedPrice: '₹799.00',
  },
  {
    id: 'gnc-multivitamin',
    name: 'GNC Mega Men One Daily Multivitamin Improves Energy & Immunity',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e1e5bff6-b1a5-4818-94d8-ef9ba9f8716e-ussupplements-in/assets/images/IMG_7098-300x300-21.webp',
    originalPrice: '₹999.00',
    discountedPrice: '₹200.00',
  }
];

export default function LatestProducts() {
  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="flex items-end justify-between border-b border-[#dddddd] pb-2 mb-8">
          <h2 className="text-[#222222] text-[24px] md:text-[28px] italic font-extrabold uppercase tracking-tight m-0">
            Shop The Latest In Store
          </h2>
          <a
            href="/products"
            className="flex items-center text-[#222222] text-[14px] font-bold hover:text-[#1b3068] transition-colors pb-1"
          >
            Shop All
            <ChevronRight className="w-4 h-4 ml-1" />
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="border border-[#dddddd] hover:shadow-lg transition-shadow duration-300 group">
              <div className="relative bg-white overflow-hidden p-4">
                <div className="relative aspect-square">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
              <div className="flex flex-col text-center p-4 pt-0">
                <h3 className="text-[#222222] text-[14px] font-semibold leading-[1.3] mb-3 line-clamp-2 min-h-[36px] not-italic normal-case">
                  <a href="#" className="hover:text-[#1b3068] transition-colors">
                    {product.name}
                  </a>
                </h3>
                <div className="flex flex-col items-center justify-center gap-1 mb-4">
                  <span className="text-[#777777] text-[12px] line-through font-normal">
                    {product.originalPrice}
                  </span>
                  <span className="text-[#c62828] text-[16px] font-bold">
                    {product.discountedPrice}
                  </span>
                </div>
                <button className="w-full bg-[#1b3068] text-white text-[12px] font-bold py-[10px] px-4 uppercase transition-colors hover:bg-[#14244e]">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
