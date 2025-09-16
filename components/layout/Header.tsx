'use client'

import Link from 'next/link'
import { MapPin, PhoneCall } from 'lucide-react'
import LanguageToggle from './LanguageToggle';
import AkarIconsThunder from '../ui/AkarIconsThunder';

export default function Header() {
  return (
    <header className="text-red-500 py-4 md:py-10 shadow-lg justify-between">
      <div className="container flex flex-col gap-1 items-center">
        <Link href="/" className="flex flex-col items-center group">
          <p className="text-3xl text-red-600 md:text-6xl font-bold transition-transform duration-300 group-hover:scale-105 group-hover:text-yellow-500">
            SAKTHI 
          </p>
          <p className="text-yellow-500 transition-opacity duration-300 group-hover:opacity-80">
            Batteries & Auto Electricals
          </p>
        </Link>
        <div className="md:mt-0 flex-col text-sm  md:text-base">
          <a href="https://maps.app.goo.gl/xNkRsT7P6w1LjyS89" target="_blank" rel="noopener noreferrer">
            <p className="flex items-center gap-2 px-12 py-3">
              <MapPin className="w-8 h-8 bg-green-500 rounded-xl text-yellow-400" />
            </p>
          </a>
          <a href='tel:9947262266'>
            <p className="flex items-center gap-4 bg-green-600 p-2 rounded-full text-white">
              <PhoneCall className="w-4 h-4" />Call now
            </p>
          </a>
        </div>
      </div>

    </header>
  )
}
