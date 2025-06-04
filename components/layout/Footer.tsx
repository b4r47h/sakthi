import { BatteryCharging, Copyright, Facebook, Instagram, MessageCircleMore, MessageCirclePlus } from 'lucide-react'

export default function Footer() {
    const waLink = 'https://wa.me/918589952902?text=I%20want%20to%20buy%20a%20battery/inverter%20for%20my%20vehicle/home.'
    return (
        <footer className="py-4 gap-4 text-sm">
            <div className="container mb-40px mx-auto px-4 flex flex-row md:flex-row justify-between items-center gap-4">
                <div className="text-center md:text-left md:text-base">
                    <h2 className="text-lg font-semibold">
                        Sakthi Batteries & Autoelectrical
                    </h2>
                    <p>Cherthala, Kerala</p>
                    <p>Phone: 8589952902 / 9947262266</p>
                    <p>
                        We deal in Motorcycle, Automotive & Inverter Batteries,
                        <br />
                        Inverters and Auto Electrical Spare Parts.

                    </p>

                </div>
                <div className="flex-col md:flex-row flex items-center gap-4">
                    <a href={waLink}
                        aria-label="Contact Us" className=" hover:text-green-700">
                        <MessageCirclePlus className="w-11 h-11 text-green-400" />
                    </a>
                </div>
            </div>
            <a href="https://bkportfolio.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="made by" className="hover:text-blue-700 m-4">
                <Copyright className="w-4 h-4 text-black inline" />b4r47h
            </a>

        </footer>
    )
}
