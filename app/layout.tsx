import Header from '@/components/layout/Header';
import './globals.css';
import type { Metadata } from 'next';
import { Roboto_Mono } from 'next/font/google';
import Footer from '@/components/layout/Footer';
import MatrixRain from '@/components/MatrixRain';

const mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

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
    <html lang="en" className={mono.variable}>
      <body className={`${mono.className} bg-black`}>
<MatrixRain />
        <div className=" min-h-screen flex flex-col md:space-y-6 px-2 md:px-10 md:py-8">
          
          <div>
            <Header />
          </div>

          <main className="flex-grow shadow-lg rounded-lg py-4">
            {children}
          </main>

          <div className="shadow-xl rounded-md">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
