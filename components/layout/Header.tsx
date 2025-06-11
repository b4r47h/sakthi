'use client'

import Link from 'next/link'
import { MapPin, PhoneCall } from 'lucide-react'
import LanguageToggle from './LanguageToggle';
import AkarIconsThunder from '../ui/AkarIconsThunder';

export default function Header() {
  return (
    <header className="text-white py-5 md:py-10 shadow-lg flex backdrop-brightness-200 rounded-3xl items-center">
      <div className="container mx-auto flex flex-col gap-4 items-center justify-center px-4">
        <Link href="/" className="flex gap-2 text-2xl md:text-6xl justify-between font-bold">
        <p>Sakthi Batteries</p><p><AkarIconsThunder className="w-10 h-10"/></p><p>Auto Electricals</p>
        </Link>

        <div className="mt-2 md:mt-0 flex-coltext-sm text-yellow-400 md:text-base">
          <a href="https://maps.app.goo.gl/xNkRsT7P6w1LjyS89" target="_blank" rel="noopener noreferrer">
            <p className="flex items-center gap-2">
              <MapPin className="w-4 h-4 " />
              Locate us

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
