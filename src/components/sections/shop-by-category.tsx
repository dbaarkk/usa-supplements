import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const CATEGORIES = [
  {
    title: 'Whey Protein',
    href: '/products?category=whey-protein',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e1e5bff6-b1a5-4818-94d8-ef9ba9f8716e-ussupplements-in/assets/images/1-5-4.jpg',
  },
  {
    title: 'Mass Gainer',
    href: '/products?category=mass-gainer',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e1e5bff6-b1a5-4818-94d8-ef9ba9f8716e-ussupplements-in/assets/images/2-4-5.jpg',
  },
  {
    title: 'Pre-Workout',
    href: '/products?category=pre-workout',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e1e5bff6-b1a5-4818-94d8-ef9ba9f8716e-ussupplements-in/assets/images/3-5-6.jpg',
  },
  {
    title: 'Fat-Burner',
    href: '/products?category=fat-burner',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e1e5bff6-b1a5-4818-94d8-ef9ba9f8716e-ussupplements-in/assets/images/Fat-Burner-1-7.jpg',
  },
];

const TAGS = [
  { name: 'Whey Protein', href: '#' },
  { name: 'Mass Gainer', href: '#' },
  { name: 'Pre-Workout', href: '#' },
  { name: 'Fat-Burner', href: '#' },
  { name: 'BCAA', href: '#' },
  { name: 'Vitamin & Fish Oil', href: '#' },
  { name: 'Testabooster', href: '#' },
  { name: 'Shop All Categories', href: '/products', hasIcon: true },
];

export default function ShopByCategory() {
  return (
    <section className="py-10 bg-white">
      <div className="container max-w-[1200px] mx-auto px-4">
        <div className="flex items-end justify-between border-b border-[#dddddd] pb-2 mb-8">
          <h2 className="text-[24px] sm:text-[28px] font-extrabold italic uppercase tracking-tight text-[#222222] leading-none">
            Shop By Category
          </h2>
          <a
            href="/products"
            className="flex items-center text-[14px] font-bold text-[#222222] hover:text-[#1b3068] transition-colors uppercase italic"
          >
            Shop All <ChevronRight className="w-4 h-4 ml-1" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {CATEGORIES.map((category, index) => (
            <div key={index} className="group overflow-hidden">
              <a href={category.href} className="block relative aspect-square">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority={index < 2}
                />
              </a>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {TAGS.map((tag, index) => (
            <a
              key={index}
              href={tag.href}
              className="inline-flex items-center px-3 py-1.5 border border-[#1b3068] text-[13px] font-bold italic transition-all duration-200 hover:bg-[#1b3068] hover:text-white text-[#1b3068]"
            >
              {tag.name}
              {tag.hasIcon && <ChevronRight className="w-3.5 h-3.5 ml-1" />}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
