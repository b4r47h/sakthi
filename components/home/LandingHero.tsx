// LandingHero component - The main hero section on the home page
'use client'; // This directive is required because we use client-side features

import React from 'react';
import { Button } from '@/components/ui/button'; // Reusable button component from shadcn/ui
import { BatteryCharging, Bolt } from 'lucide-react'; // Icons
import { useRouter } from 'next/router';
import Link from 'next/link'; // Link component for navigation


export default function LandingHero() {
  return (
    <section className="md:h-[80vh] py-10 flex items-center justify-center">
      {/* Main content container */}
      <div className="container mx-auto px-4 text-center text-white">
        <h2 className="text-4xl md:text-5xl animate-pulse font-bold mb-8 animate-fade-up text-yellow-400">
          Power Out? We've Got You Covered
        </h2>
        <p className="text-lg md:text-2xl mb-12 px-16 font-outfit animate-fade-up animation-delay-200">
          Dead battery? No problem. Get fast, <b>same-day delivery</b> and <b>free installation</b> within a 7km radius. Reliable service, right when you need it.
        </p>
        {/* Call-to-action buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <Button
            size="lg"
            className="m-4 bg-white text-red-700 hover:bg-gray-100 animate-fade-up animation-delay-400 hover:scale-105 hover:shadow-lg transition-transform duration-300"
          >
            <BatteryCharging className="mr-4 h-5 w-5" />
            <Link href="/products">Browse All Products</Link>
          </Button>
          <Button
            size="lg"
            className="bg-white text-blue-700 hover:bg-gray-100 hover:scale-110 hover:shadow-lg transition-transform duration-300"
          >
            <Bolt className="mr-4 h-5 w-5" />
            <Link href="/services">Services Offered</Link>
          </Button>
        </div>
      </div>
      {/* Gradient overlay at the bottom */}

    </section>
  );
}