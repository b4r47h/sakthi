// LandingHero component - The main hero section on the home page
'use client'; // This directive is required because we use client-side features

import React from 'react';
import { Button } from '@/components/ui/button'; // Reusable button component from shadcn/ui
import { BatteryCharging, Bolt, Unplug } from 'lucide-react'; // Icons
import { useRouter } from 'next/router';
import Link from 'next/link'; // Link component for navigation


export default function LandingHero() {
  return (
    <section className="md:h-[80vh] sm:h-[99vh] flex items-center justify-center">
      {/* Main content container */}
      <div className="container mx-auto px-4 text-center text-white">
        <h2 className="text-5xl md:text-5xl font-bold mb-8 animate-fade-up">
          No power? No Worries!
        </h2>
        <p className="text-xl md:text-2xl mb-12 animate-fade-up animation-delay-200">
          Your battery gave up?? We are ready for you,enjoy same day delivery
          and free installation within a 7km radius
        </p>
        {/* Call-to-action buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <Button
            size="lg"
            className="m-4 bg-white text-red-700 hover:bg-gray-100 animate-fade-up animation-delay-400"
          >
            <BatteryCharging className="mr-4 h-5 w-5" />
            <Link href="/products">Browse All Products</Link>
          </Button>
          <Button
            size="lg"
            className="bg-white text-blue-700 hover:bg-gray-100"
          >
            <Bolt className="mr-4 h-5 w-5" />
            Services Offered
          </Button>
        </div>
      </div>
      {/* Gradient overlay at the bottom */}

    </section>
  );
}