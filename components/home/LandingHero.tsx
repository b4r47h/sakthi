// LandingHero component - The main hero section on the home page
'use client'; // This directive is required because we use client-side features

import React from 'react';
import { Button } from 'react-day-picker';
import { useRouter } from 'next/navigation';
import { Car } from 'lucide-react';

export default function LandingHero() {
  const router = useRouter();

  return (
    <section className="md:h-[40vh] flex items-center justify-center">
      {/* Main content container */}
        <button
          className="bg-gradient-radial from-blue-900 via-red-600 to-red-800 animate-glow p-16 rounded-full"
          onClick={() => {
            // Use Next.js router for navigation
            router.push('/product');
          }}
        >
          <Car className="inline-block w-5 h-5 mr-2" />
          Find the right battery for your vehicle
        </button>
      {/* Gradient overlay at the bottom */}
    </section>
  );
}