export interface Vehicle {
  make: string;
  model: string;
  fuelType: 'hybrid' | 'petrol' | 'diesel';
}

// Static vehicle data for prototype (common in India)
const VEHICLES = [
  { make: 'Tata', models: ['Nexon', 'Harrier', 'Safari','Indica Vista','Punch','Tiago','Tigor','Altroz','Indigo Manza','Prima','Intra','407'], fuelTypes: ['petrol/CNG', 'diesel','hybrid'] as const },
  { make: 'Maruti Suzuki', models: ['Swift', 'Baleno', 'Brezza','Grand Vitara','Fronx','Ertiga','Wagon R','Alto 800/K10','Espresso','A-star','Maruti 800','Kizashi','S-cross','Ciaz'], fuelTypes: ['petrol/CNG', 'diesel','hybrid'] as const },
  { make: 'Hyundai', models: ['i10','Aura','Xccent','Eon','Alcazar','Santafe','Verna','Santro','Creta', 'Venue', 'i20'], fuelTypes: ['petrol', 'diesel', 'hybrid'] as const },
  { make: 'Mahindra', models: ['KUV300','XUV300','TUV300','Bolero Neo','Bolero','XUV500','Xylo','Verito','Thar', 'Scorpio', 'XUV700'], fuelTypes: ['petrol', 'diesel'] as const },
  { make: 'Toyota', models: ['Etios','Innova','Crysta','Hycross','Hyrider','Fortuner','Vellfire','Prado','Land Cruiser'], fuelTypes: ['petrol', 'diesel','Hybrid'] as const }
];

const VEHICLE_STORAGE_KEY = 'selected_vehicle';

// Get all makes
export function getMakes(): string[] {
  return VEHICLES.map((v) => v.make);
}

// Get models for a make
export function getModels(make: string): string[] {
  const vehicle = VEHICLES.find((v) => v.make === make);
  return vehicle ? vehicle.models : [];
}

// Get fuel types for a make
export function getFuelTypes(make: string): readonly string[] {
  const vehicle = VEHICLES.find((v) => v.make === make);
  return vehicle ? vehicle.fuelTypes : [];
}

// Store vehicle selection
export function setVehicleSelection(vehicle: Vehicle): void {
  localStorage.setItem(VEHICLE_STORAGE_KEY, JSON.stringify(vehicle));
}

// Retrieve stored vehicle selection
export function getStoredVehicle(): Vehicle | null {
  const stored = localStorage.getItem(VEHICLE_STORAGE_KEY);
  return stored ? JSON.parse(stored) : null;
}