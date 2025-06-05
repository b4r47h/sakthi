// CategorySection component - Displays different product categories on the home page
'use client'; // Required for client-side interactivity

import React from 'react';
import { Card, CardContent } from '@/components/ui/card'; // Reusable card components
import { Shirt, Watch, Gem, Bike, Car, HousePlug, Truck, LucideShipWheel } from 'lucide-react'; // Icons
import { Description } from '@radix-ui/react-toast';
import { FaCarBattery } from "react-icons/fa";
import { FaGears,FaCarOn} from "react-icons/fa6";

// Category data - Modifying this array will update the displayed categories
const categories = [
  {
    name: 'Auto-Electrical Works',
    icon: FaGears,
    description: 'Alternator,Self Starter repairing and more—expert auto electrical services.',
  },
  {
    name: 'Battery and Inverters',
    icon: FaCarBattery,
    description:'Battery for motorcycles,cars,trucks and Inverter(s).',
  },
  {
    name: 'Jump Starting and Battery Charging',
    icon: FaCarOn,
    description:'Battery charging for all types of vehicles and inverters.',
  }
];

export default function CategorySection() {
  return (
    <section className="py-10 md:py-16">
      <div className="container mx-auto px-6 ">
        {/* Grid layout for category cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.name}
                className="hover:scale-105 hover:shadow-lg transition-transform duration-300"
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