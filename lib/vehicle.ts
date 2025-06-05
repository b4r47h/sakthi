export interface Vehicle {
  make: string;
  model: string;
  fuelType: 'hybrid' | 'petrol' | 'diesel';
}

// Static vehicle data for prototype (common in India)
const VEHICLES = [
  { make: 'Tata', models: ['Nexon', 'Harrier', 'Safari'], fuelTypes: ['petrol', 'diesel'] as const },
  { make: 'Maruti Suzuki', models: ['Swift', 'Baleno', 'Brezza'], fuelTypes: ['petrol', 'diesel'] as const },
  { make: 'Hyundai', models: ['Creta', 'Venue', 'i20'], fuelTypes: ['petrol', 'diesel', 'hybrid'] as const },
  { make: 'Mahindra', models: ['Thar', 'Scorpio', 'XUV700'], fuelTypes: ['petrol', 'diesel'] as const },
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