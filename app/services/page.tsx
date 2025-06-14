'use client';
import AkarIconsThunder from '@/components/ui/AkarIconsThunder'
import { useState,useEffect} from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { fetchUserLocation, calculateDistance, getStoredLocation, Location } from '@/lib/location';
import { getMakes, getModels, getFuelTypes, setVehicleSelection, getStoredVehicle, Vehicle } from '@/lib/vehicle';

interface Service {
  name: string;
  description: string;
  icon: string;
  hasButton?: boolean;
}

export default function ServicesPage() {
  // Array of services
  const services: Service[] = [
    {
      name: 'Book Jumpstart Service',
      description: 'Get your vehicle running with our quick jump start service. Same-day service within Cherthala!',
      icon:AkarIconsThunder,
      hasButton: true,
    }
  ];

  // State for vehicle selection
  const [selectedMake, setSelectedMake] = useState<string>('');
  const [selectedModel, setSelectedModel] = useState<string>('');
  const [selectedFuelType, setSelectedFuelType] = useState<string>('');
  const [vehicleSelected, setVehicleSelected] = useState<boolean>(false);

  // State for location and fare
  const [userLocation, setUserLocation] = useState<Location | null>(getStoredLocation());
  const [distance, setDistance] = useState<number | null>(null);
  const [totalFare, setTotalFare] = useState<number | null>(null);
  const [fareDetails, setFareDetails] = useState<string[]>([]);

  // State for quote form
  const [bhk, setBhk] = useState<string>('');
  const [backupTime, setBackupTime] = useState<string>('');
  const [quoteResult, setQuoteResult] = useState<string[]>([]);

  // Handle vehicle selection
  const handleVehicleSelection = () => {
    if (!selectedMake || !selectedModel || !selectedFuelType) {
      alert('Please select make, model, and fuel type.');
      return;
    }
    const vehicle: Vehicle = {
      make: selectedMake,
      model: selectedModel,
      fuelType: selectedFuelType as 'hybrid' | 'petrol' | 'diesel',
    };
    setVehicleSelection(vehicle);
    setVehicleSelected(true);
  };

  // Handle Jump Start booking
  const bookJumpStart = async () => {
    if (!vehicleSelected) {
      alert('Please select your vehicle details first.');
      return;
    }

    try {
      const location = userLocation || (await fetchUserLocation());
      setUserLocation(location);
      const dist = await calculateDistance(location);
      setDistance(dist);

      // Calculate fare
      const now = new Date();
      const hour = now.getHours();
      const baseFare = hour >= 21 ? 600 : 300; // Before 9 PM: ₹300, after 9 PM: ₹600
      const fuelCostPerKm = 107 / 20; // ₹107 per liter, 20 km/l = ₹5.35 per km
      const travelExpense = dist * fuelCostPerKm;
      const total = baseFare + travelExpense;
      setTotalFare(total);

      setFareDetails([
        `Base Fare: ₹${baseFare.toFixed(2)}`,
        `Travel Expense (${dist} km): ₹${travelExpense.toFixed(2)}`,
        `Total Fare: ₹${total.toFixed(2)}`,
      ]);
    } catch (error: any) {
      alert(error.message);
    }
  };

  // Send info via WhatsApp
  const sendWhatsApp = () => {
    if (!userLocation || !totalFare || !vehicleSelected) {
      alert('Please complete the jump start booking process.');
      return;
    }
    const storedVehicle = getStoredVehicle();
    if (!storedVehicle) {
      alert('Vehicle details not found.');
      return;
    }
    const googleMapsLink = `https://maps.google.com/?q=${userLocation.lat},${userLocation.lng}`;
    const message = `Jump Start Request for Sakthi Batteries\nVehicle: ${storedVehicle.make} ${storedVehicle.model}, ${storedVehicle.fuelType}\nLocation: ${googleMapsLink}\nTotal Fare: ₹${totalFare.toFixed(2)}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/+918589952902?text=${encodedMessage}`;
    window.open(whatsappLink, '_blank');
  };

  // Handle quote form submission
  const handleQuote = () => {
    if (!bhk || !backupTime) {
      alert('Please select both BHK and backup time.');
      return;
    }

    // Simple quote calculation
    const baseWattage = 400 + (parseInt(bhk) - 1) * 200;
    const hours = parseInt(backupTime);
    const batteryCapacity = (baseWattage * hours) / 12;
    const inverterCost = baseWattage * 15;
    const batteryCost = batteryCapacity * 150;
    const totalCost = inverterCost + batteryCost;

    setQuoteResult([
      `Quote:${bhk} BHK, ${backupTime} H Backup:`,
      `Inverter: ~${baseWattage}W, ₹${inverterCost.toFixed(0)}`,
      `Battery: ~${batteryCapacity.toFixed(0)}Ah, ₹${batteryCost.toFixed(0)}`,
      `Estimated Total: ₹${totalCost.toFixed(0)}`,
      `Contact us at 8589952902 to confirm and proceed!`,
    ]);
  };

  return (
    <div className="min-h-screen rounded-full backdrop-blur-lg text-gray-400 flex flex-col">
      <main className="container mx-auto p-8">
        {/* Vehicle Selection Form */}
        {!vehicleSelected && (
          <section className="mb-12 p-6">
            <h2 className="text-3xl font-bold text-center mb-6">Select Your Vehicle</h2>
            <div className="max-w-md mx-auto space-y-6">
              <div>
                <Label htmlFor="make">Vehicle Make</Label>
                <Select onValueChange={setSelectedMake}>
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
                  <Select onValueChange={setSelectedModel}>
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
                  <Select onValueChange={setSelectedFuelType}>
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
              <Button onClick={handleVehicleSelection}>Confirm Vehicle</Button>
            </div>
          </section>
        )}

        {/* Services Section */}
        {vehicleSelected && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>
            <div className="gap-6 md:grid-cols-2 flex justify-center lg:grid-cols-3">
              {services.map((service) => (
                <Card key={service.name}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      {service.icon} {service.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{service.description}</p>
                    {service.hasButton && (
                      <Button onClick={bookJumpStart}>Book Jump Start</Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
            {fareDetails.length > 0 && (
              <div className="mt-6 p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-2">Fare Breakdown</h3>
                {fareDetails.map((detail, index) => (
                  <p key={index}>{detail}</p>
                ))}
                <Button className="mt-4" onClick={sendWhatsApp}>
                  Send via WhatsApp
                </Button>
              </div>
            )}
          </section>
        )}

        {/* Quote Form Section */}
        <section className="p-6 rounded-lg shadow">
          <h2 className="text-3xl font-bold text-center mb-6">Get a Quote for Inverter & Battery</h2>
          <div className="max-w-md mx-auto space-y-6">
            <div>
              <Label htmlFor="bhk">BHK of Your Home</Label>
              <Select onValueChange={setBhk}>
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
              <Select onValueChange={setBackupTime}>
                <SelectTrigger id="backup-time">
                  <SelectValue placeholder="Select Hours" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2">2 Hours</SelectItem>
                  <SelectItem value="4">4 Hours</SelectItem>
                  <SelectItem value="6">6 hours</SelectItem>
                  <SelectItem value="8">8+ Hours</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button onClick={handleQuote}>Get Quote</Button>
            {quoteResult.length > 0 && (
              <div className="mt-4 p-4 rounded-lg">
                {quoteResult.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}