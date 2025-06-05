import Header from '@/components/layout/Header';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/layout/Footer';
import { LanguageProvider } from '@/context/LanguageContext';
import { Copyright } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sakthi Batteries',
  description:
    'We primarily deal with Automotive Batteries, Industrial and Home backup power solutions, Located in Cherthala',
  keywords:
    'Battery shop in cherthala, inverter battery cherthala, best battery shop in cherthala',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative min-h-screen inset-0 -z-10
            bg-cover bg-no-repeat bg-center bg-blend-overlay bg-gray-700
            bg-[url('/back.png')]
            md:bg-[url('/back.png')]`}>
        <LanguageProvider>
          <div className="min-h-screen flex flex-col space-y-6 px-4 md:px-10 py-8">
            <div className="">
              <Header />
            </div>

            <main className="flex-grow shadow-lg text-gray-800 rounded-lg p-4">
              {children}
            </main>

            <div className="shadow-xl bg-white/80 rounded-md p-4">
              <Footer />
            </div>
          </div>
        </LanguageProvider>
          <a href="https://bkportfolio.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="made by" className="hover:text-blue-700 m-4 text-gray-400 justify-center flex text-sm">
                <Copyright className="w-4 h-4 inline" />b4r47h
            </a>
      </body>
    </html>
  );
}
