'use client'

import Link from 'next/link'
import { MapPin, PhoneCall } from 'lucide-react'
import LanguageToggle from './LanguageToggle';

export default function Header() {
  return (
    <header className="text-white py-4 shadow-md flex items-center">
      <div className="container mx-auto flex flex-col gap-4 items-center justify-center px-4">
        <Link href="/" className="flex gap-2 text-2xl md:text-6xl justify-between font-bold">
        <p>Sakthi Batteries</p><p>&</p><p>Auto Electricals</p>
        </Link>

        <div className="mt-2 md:mt-0 flex-coltext-sm text-yellow-400 md:text-base">
          <a href="https://maps.app.goo.gl/YePfQwTTJQbywNEy7" target="_blank" rel="noopener noreferrer">
            <p className="flex items-center gap-2">
              <MapPin className="w-4 h-4 " />
              Cherthala

            </p>
          </a>
          <a href='tel:9947262266'>
            <p className="flex items-center gap-2">

              <PhoneCall className="w-4 h-4" />9947262266

            </p>
          </a>
        </div>
      </div>
      
    </header>
  )
}
