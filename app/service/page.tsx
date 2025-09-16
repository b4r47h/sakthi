'use client';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { fetchUserLocation, calculateDistance, Location } from '@/lib/location';
import { getMakes, getModels, getFuelTypes, setVehicleSelection, Vehicle } from '@/lib/vehicle';
import { MessageCircle } from 'lucide-react';

export default function ServicesPage() {
  // State for vehicle selection
  const [selectedMake, setSelectedMake] = useState<string>('');
  const [selectedModel, setSelectedModel] = useState<string>('');
  const [selectedFuelType, setSelectedFuelType] = useState<string>('');
  const [vehicleSelected, setVehicleSelected] = useState<boolean>(false);
  const [isBookingJumpStart, setIsBookingJumpStart] = useState<boolean>(false);
  const [currentFare, setCurrentFare] = useState<number | null>(null);
  const [fareStatus, setFareStatus] = useState<string>('');

  // Calculate fare when all vehicle selections are made
  useEffect(() => {
    if (selectedMake && selectedModel && selectedFuelType) {
      const now = new Date();
      const hour = now.getHours();
      const baseFare = hour >= 20 ? 600 : 300;
      const status = hour >= 20 ? 'Night Rate (After 8 PM)' : 'Day Rate (Before 8 PM)';
      
      setCurrentFare(baseFare);
      setFareStatus(status);
    } else {
      setCurrentFare(null);
      setFareStatus('');
    }
  }, [selectedMake, selectedModel, selectedFuelType]);

  // Handle vehicle selection and immediate WhatsApp booking
  const handleVehicleSelection = async () => {
    if (!selectedMake || !selectedModel || !selectedFuelType) {
      alert('Please select make, model, and fuel type.');
      return;
    }

    setIsBookingJumpStart(true);
    
    try {
      // Store vehicle selection
      const vehicle: Vehicle = {
        make: selectedMake,
        model: selectedModel,
        fuelType: selectedFuelType as 'hybrid' | 'petrol' | 'diesel',
      };
      setVehicleSelection(vehicle);
      setVehicleSelected(true);

      // Always fetch fresh location
      const location = await fetchUserLocation();

      // Use current fare
      const baseFare = currentFare || 300;

      // Prepare WhatsApp message with fresh location
      const googleMapsLink = `https://maps.google.com/?q=${location.lat},${location.lng}`;
      const message = `Jump Start Request\nVehicle: ${vehicle.make} ${vehicle.model}, ${vehicle.fuelType}\nLocation: ${googleMapsLink}\nEstimated Fare: ₹${baseFare} + Travel Expense (Free within 5km)`;
      const encodedMessage = encodeURIComponent(message);
      const whatsappLink = `https://wa.me/+919947262266?text=${encodedMessage}`;
      
      // Open WhatsApp
      window.open(whatsappLink, '_blank');
      
    } catch (error: any) {
      alert(error.message);
    } finally {
      setIsBookingJumpStart(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <main className="md:p-8 space-y-12 text-white flex flex-col sm:p-2">
        {/* Vehicle Selection Form */}
        <section className="text-white shadow-sm py-16 flex-col">
          <h2 className="text-3xl font-bold text-center mb-6">Book A Jump Start</h2>
          <div className="max-w-md mx-auto space-y-6">
            <div>
              <Label htmlFor="make">Before going forward please tell us what you drive</Label>
              <Select onValueChange={setSelectedMake} disabled={isBookingJumpStart}>
                <SelectTrigger id="make">
                  <SelectValue placeholder="Select Make" />
                </SelectTrigger>
                <SelectContent>
                  {getMakes().map((make) => (
                    <SelectItem key={make} value={make}>
                      {make}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {selectedMake && (
              <div>
                <Label htmlFor="model">Vehicle Model</Label>
                <Select onValueChange={setSelectedModel} disabled={isBookingJumpStart}>
                  <SelectTrigger id="model">
                    <SelectValue placeholder="Select Model" />
                  </SelectTrigger>
                  <SelectContent>
                    {getModels(selectedMake).map((model) => (
                      <SelectItem key={model} value={model}>
                        {model}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
            {selectedModel && (
              <div>
                <Label htmlFor="fuel-type">Fuel Type</Label>
                <Select onValueChange={setSelectedFuelType} disabled={isBookingJumpStart}>
                  <SelectTrigger id="fuel-type">
                    <SelectValue placeholder="Select Fuel Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {getFuelTypes(selectedMake).map((fuelType) => (
                      <SelectItem key={fuelType} value={fuelType}>
                        {fuelType.charAt(0).toUpperCase() + fuelType.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
            
            {/* Fare Display */}
            {currentFare && (
              <div className="mt-4 p-4 rounded-lg bg-green-600/20 border border-green-600/30">
                <h3 className="text-lg font-semibold mb-2">Current Pricing</h3>
                <p className="text-2xl font-bold text-green-400">₹{currentFare}</p>
                <p className="text-sm opacity-75">{fareStatus}</p>
                <p className="text-xs opacity-60 mt-1">+ Travel Expense (Free within 5km)</p>
              </div>
            )}
            
            <Button 
              onClick={handleVehicleSelection} 
              disabled={isBookingJumpStart || !selectedMake || !selectedModel || !selectedFuelType}
              className="bg-green-600 w-full"
            >
              <MessageCircle className="mr-2 h-4 w-4 "/>
              {isBookingJumpStart ? 'Getting Current Location...' : 'Book Jump Start via WhatsApp'}
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
