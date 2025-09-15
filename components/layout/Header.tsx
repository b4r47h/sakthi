'use client'

import Link from 'next/link'
import { MapPin, PhoneCall } from 'lucide-react'
import LanguageToggle from './LanguageToggle';
import AkarIconsThunder from '../ui/AkarIconsThunder';

export default function Header() {
  return (
    <header className="text-red-500 py-4 md:py-10 shadow-lg sticky justify-between">
      <div className="container flex flex-col gap-4 items-center">
        <Link href="/" className="flex flex-col">
          <p className="text-3xl text-red-600 md:text-6xl justify-center font-bold">
            SAKTHI 
          </p>
          <p>Batteries And Auto Electricals</p>
        </Link>
        <div className="md:mt-0 flex-col text-sm text-yellow-400 md:text-base">
          <a href="https://maps.app.goo.gl/xNkRsT7P6w1LjyS89" target="_blank" rel="noopener noreferrer">
            <p className="flex items-center gap-2 p-2">
              <MapPin className="w-4 h-4 " />
              Find us
            </p>
          </a>
          <a href='tel:9947262266'>
            <p className="flex items-center gap-2 bg-green-700 p-2 rounded-full">

              <PhoneCall className="w-4 h-4" />Call now

            </p>
          </a>
        </div>
      </div>

    </header>
  )
}
