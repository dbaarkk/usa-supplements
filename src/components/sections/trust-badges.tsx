import React from 'react';
import { RotateCcw, Truck, ShieldCheck } from 'lucide-react';

export default function TrustBadges() {
  return (
    <section className="bg-[#D4F4D4] py-4">
      <div className="container mx-auto max-w-[1200px] px-4">
        <div className="flex flex-col md:flex-row items-center justify-center text-center gap-6 md:gap-0">
          <div className="w-full md:w-1/3 px-4">
            <div className="flex flex-col items-center">
              <RotateCcw className="w-6 h-6 mb-2 text-[#222222]" />
              <h3 className="text-[13px] font-bold uppercase text-[#222222] m-0">
                Fuss Free Returns*
              </h3>
              <p className="text-[13px] text-[#222222] m-0 mt-1">
                3 days money-back guarantee
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/3 px-4 md:border-x md:border-[#222222]/10">
            <div className="flex flex-col items-center">
              <Truck className="w-6 h-6 mb-2 text-[#222222]" />
              <h3 className="text-[13px] font-bold uppercase text-[#222222] m-0">
                Fast Delivery
              </h3>
              <p className="text-[13px] text-[#222222] m-0 mt-1">
                Weight based fast shipping all over India
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/3 px-4">
            <div className="flex flex-col items-center">
              <ShieldCheck className="w-6 h-6 mb-2 text-[#222222]" />
              <h3 className="text-[13px] font-bold uppercase text-[#222222] m-0">
                Secure Payment
              </h3>
              <p className="text-[13px] text-[#222222] m-0 mt-1">
                We offer a variety of secure payment methods.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
