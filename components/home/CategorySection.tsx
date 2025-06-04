// CategorySection component - Displays different product categories on the home page
'use client'; // Required for client-side interactivity

import React from 'react';
import { Card, CardContent } from '@/components/ui/card'; // Reusable card components
import { Shirt, Watch, Gem, Bike, Car, HousePlug, Truck, LucideShipWheel } from 'lucide-react'; // Icons
import { Description } from '@radix-ui/react-toast';

// Category data - Modifying this array will update the displayed categories
const categories = [
  {
    name: 'Auto-Electrical Fixes',
    icon: Car,
    description: 'Expert repairs for all vehicle electrical issues, done fast and right.',
  },
  {
    name: 'Home & Industrial Power',
    icon: HousePlug,
    description:
      'Reliable battery and power solutions for homes and industries.',
  },
  {
    name: 'Same-Day Delivery',
    icon: Truck,
    description: 'Order now, get it today—within a 7km radius, completely hassle-free!',
  }
];

export default function CategorySection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        {/* Grid layout for category cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.name}
                className="hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6 text-center">
                  <Icon className="w-12 h-12 mx-auto m-4 text-blue-700" />
                  <h3 className="text-xl font-semibold mb-2">
                    {category.name}
                  </h3>
                  <p className="">{category.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}