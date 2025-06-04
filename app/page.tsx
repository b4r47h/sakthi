// Home page component - This is the landing page of the application
// It uses server-side rendering by default in Next.js 13+
import { Metadata } from 'next';
import LandingHero from '@/components/home/LandingHero';
import CategorySection from '@/components/home/CategorySection';
//import { Header } from '@radix-ui/react-accordion';

// Page-specific metadata that overrides the default metadata from layout.tsx
export const metadata: Metadata = {
  title: 'Sakthi Batteries - Automotive & Inverter Batteries in Cherthala',
  description: 'Buy automotive and inverter batteries in Cherthala with same-day delivery. Smart charging and jump-start services available!',
  keywords: 'buy batteries Cherthala, inverter battery Kerala, rickshaw battery shop',
};

// Main home page component
// Changes here only affect the home page
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <LandingHero /> {/* Hero section with main call-to-action */}
      <CategorySection /> {/* Display different product categories */}
    </main>
  );
}