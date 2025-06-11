import { BatteryCharging, Copyright, Facebook, Instagram, MessageCircleMore, MessageCirclePlus } from 'lucide-react'
import AkarIconsThunder from '../ui/AkarIconsThunder'
import { ImWhatsapp } from "react-icons/im";

export default function Footer() {
    const waLink = 'https://wa.me/918589952902?text=I%20have%20an%20enquiry.'
    return (
        <footer className="text-sm">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-left md:text-base">
                    <h2 className="text-lg font-semibold flex flex-col items-center md:items-start md:flex-row">
                        Sakthi Batteries<AkarIconsThunder className="w-4 h-4"/>Autoelectricals
                    </h2>
                    <p>Cherthala, Kerala</p>
                    <p>Phone:9947262266</p>
                    <p>
                        We deal in Motorcycle, Automotive & Inverter Batteries,
                        
                        Inverters and Auto Spares.

                    </p>

                </div>
                <div className="flex-col md:flex-row flex items-center gap-4">
                    <a href={waLink}
                        aria-label="Contact Us" className=" hover:text-green-700">
                        <ImWhatsapp className="w-9 h-9 text-green-400" />
                    </a>
                </div>
            </div>
        </footer>
    )
}
