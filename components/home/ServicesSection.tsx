'use client';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { MessageCircle } from 'lucide-react';

export default function ServicesPage() {
// State for quote form
  const [bhk, setBhk] = useState<string>('');
  const [backupTime, setBackupTime] = useState<string>('');
  const [totalCost, setTotalCost] = useState<number | null>(null);
  const [isBookingInverter, setIsBookingInverter] = useState<boolean>(false);
  // Handle quote calculation
  const handleQuote = () => {
    if (!bhk || !backupTime) {
      alert('Please select both BHK and backup time.');
      return;
    }

    // Calculate total cost
    const baseWattage = 400 + (parseInt(bhk) - 1) * 200;
    const hours = parseInt(backupTime);
    const batteryCapacity = (baseWattage * hours) / 12;
    const inverterCost = baseWattage * 15;
    const batteryCost = batteryCapacity * 150;
    const total = inverterCost + batteryCost;
    
    setTotalCost(total);
  };

  // Handle inverter booking via WhatsApp
  const handleInverterBooking = () => {
    if (!bhk || !backupTime || !totalCost) {
      alert('Please calculate the price first.');
      return;
    }

    setIsBookingInverter(true);

    try {
      const message = `Inverter & Battery Quote Request\nBHK: ${bhk}\nBackup Time: ${backupTime} hours\nEstimated Total: ₹${totalCost.toFixed(0)}\n\nPlease provide detailed quote and installation details.`;
      const encodedMessage = encodeURIComponent(message);
      const whatsappLink = `https://wa.me/+919947262266?text=${encodedMessage}`;
      
      // Open WhatsApp
      window.open(whatsappLink, '_blank');
      
    } catch (error: any) {
      alert('Error opening WhatsApp');
    } finally {
      setIsBookingInverter(false);
    }
  };

  return (
    <div className="flex flex-col relative">
      <main className="md:p-8 text-white flex flex-col sm:p-4 my-12 shadow-2xl">
        <section className="text-white pt-16">
          <h2 className="text-3xl font-bold text-center mb-6 animate-bounce">Know Your Price</h2>
          <p className="pb-12 text-center text-gray-400">Get a rough estimate for inverter and battery based on your needs.</p>
          <div className="max-w-md mx-auto space-y-6">
            <div>
              <Label htmlFor="bhk">BHK of Your Home</Label>
              <Select onValueChange={setBhk} disabled={isBookingInverter}>
                <SelectTrigger id="bhk">
                  <SelectValue placeholder="Select BHK" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 BHK</SelectItem>
                  <SelectItem value="2">2 BHK</SelectItem>
                  <SelectItem value="3">3 BHK</SelectItem>
                  <SelectItem value="4">4+ BHK</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="backup-time">Backup Time Needed (Hours)</Label>
              <Select onValueChange={setBackupTime} disabled={isBookingInverter}>
                <SelectTrigger id="backup-time">
                  <SelectValue placeholder="Select Hours" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2">2 Hours</SelectItem>
                  <SelectItem value="4">4 Hours</SelectItem>
                  <SelectItem value="6">6 Hours</SelectItem>
                  <SelectItem value="8">8+ Hours</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {!totalCost && (
              <Button className="w-full rounded-full bg-green-600" onClick={handleQuote} disabled={!bhk || !backupTime}>
                Calculate Price
              </Button>
            )}
            
            {totalCost && (
              <div className="mt-4 p-4 rounded-full bg-white/10 backdrop-blur">
                <h3 className="text-lg font-semibold mb-2">Estimated Total</h3>
                <p className="text-2xl font-bold mb-4">₹{totalCost.toFixed(0)}</p>
                <p className="text-sm opacity-75 mb-4">
                  *Approximate cost for {bhk} BHK with {backupTime} hours backup
                </p>
                <Button 
                  onClick={handleInverterBooking}
                  disabled={isBookingInverter}
                  className="w-full bg-green-600"
                >
                  <MessageCircle className="mr-2 h-4 w-4"/>
                  {isBookingInverter ? 'Opening WhatsApp...' : 'Book Now via WhatsApp'}
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
