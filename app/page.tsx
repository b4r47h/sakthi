import { Metadata } from 'next';
import ServicesSection from '@/components/home/ServicesSection';
import LandingHero from '@/components/home/LandingHero';
// Page-specific metadata that overrides the default metadata from layout.tsx
export const metadata: Metadata = {
  title: 'Sakthi Batteries and Autoelectricals,best battery shop in Cherthala,spareparts,autoelectricals',
  description: 'Buy batteries in Cherthala - Your local battery shop and auto electrical spare parts store. Professional horn repair services available. Located in Cherthala, Kerala.',
  openGraph: {
    title: 'Sakthi Batteries and Autoelectricals',
    description: 'Best Battery Shop and Autoelectricals in Cherthala, Kerala. We specialize in automotive batteries, inverter batteries,autoelectrical spares,starter repairing,alternator repairing and Solar batteries.Find the cheapest batteries and workshop works in Cherthala',
    type: 'website',
    locale: 'en_IN',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: 'width=device-width, initial-scale=1',
  alternates: {
    canonical: 'https://sakthi-app.vercel.app'
  },
};

// Main home page component
// Changes here only affect the home page
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <LandingHero/>{/* Interactive battery finder tool */}
      <ServicesSection /> {/* Section displaying services offered */}
    </main>
  );
}