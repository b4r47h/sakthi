// LandingHero component - The main hero section on the home page
'use client'; // This directive is required because we use client-side features

import React from 'react';
import { useRouter } from 'next/navigation';
import { Car } from 'lucide-react';

export default function LandingHero() {
  const router = useRouter();

  return (
    <section className="md:h-[40vh] flex items-center flex-col ustify-center px-4 py-2 mt-4">
      {/* Main content container */}
        <button
          className="bg-gradient-radial from-red-600 via-blue-600 to-blue-600 animate-glow p-12 rounded-full mb-12"
          onClick={() => {
            // Use Next.js router for navigation
            router.push('/product');
          }}
        >
          <Car className="inline-block font-extrabold w-5 h-5 mr-2" />
          Find the right battery for your vehicle
        </button>

        <button
          className="bg-gradient-radial from-blue-600 via-red-600 to-red-600  p-12 px-16 rounded-full"
          onClick={() => {
            // Use Next.js router for navigation
            router.push('/service');
          }}
        >Get Help!</button>
      {/* Gradient overlay at the bottom */}
    </section>
  );
}