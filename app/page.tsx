// Home page component - This is the landing page of the application
// It uses server-side rendering by default in Next.js 13+
import { Metadata } from 'next';
import LandingHero from '@/components/home/LandingHero';
import CategorySection from '@/components/home/CategorySection';

// Page-specific metadata that overrides the default metadata from layout.tsx
export const metadata: Metadata = {
  title: 'Sakthi Battery - Best Amaron, Exide, Inverter Battery Shop in Cherthala',
  description: 'Sakthi Battery offers Amaron, Exide, and inverter batteries in Cherthala with same-day delivery, jump-start service, and battery water refills. Trusted auto electrical and car battery shop near you.',
  keywords: [
    'battery shop near me',
    'amaron battery shop near me',
    'exide battery shop near me',
    'battery shop Cherthala',
    'car battery shop Cherthala',
    'inverter battery Kerala',
    'battery water nearby Cherthala',
    'starter alternator repair Cherthala',
    'rickshaw battery shop',
    'jump start car bike Cherthala',
    'powerzone battery Cherthala',
    'auto electrical shop Alappuzha',
    'sakthi battery Cherthala',
  ].join(', '),
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