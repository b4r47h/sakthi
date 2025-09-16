export interface Vehicle {
  make: string;
  model: string;
  fuelType: 'hybrid' | 'petrol' | 'diesel';
}

// Static vehicle data for prototype (common in India)
const VEHICLES = [
  { 
    make: 'Tata', 
    models: ['Nexon', 'Harrier', 'Safari', 'Indica', 'Indica Vista', 'Indigo', 'Indigo Manza', 'Nano', 'Punch', 'Tiago', 'Tigor', 'Altroz', 'Curvv', 'Prima', 'Intra V10', 'Intra V20', 'Intra V30', 'Ace Gold', 'Ace EV', 'Ultra 814', 'Ultra 1012', 'Ultra 1518', 'LPT 1512', 'LPT 1613', 'LPT 1918', '407', '709', '912', 'Sumo', 'Sumo Grande', 'Safari Storme', 'Aria', 'Hexa'], 
    fuelTypes: ['petrol', 'diesel'] as const 
  },
  { 
    make: 'Maruti Suzuki', 
    models: ['Swift', 'Baleno', 'Brezza', 'Grand Vitara', 'Fronx', 'Ertiga', 'Wagon R', 'Alto 800', 'Alto K10', 'Eeco', 'A-star', 'Maruti 800', 'Omni', 'Zen', 'Esteem', 'Kizashi', 'S-cross', 'Ciaz', 'Super Carry', 'Tour H1', 'Tour M', 'Tour V', 'Celerio', 'Ignis', 'Gypsy'], 
    fuelTypes: ['petrol', 'diesel'] as const 
  },
  { 
    make: 'Hyundai', 
    models: ['i10', 'Grand i10', 'Grand i10 Nios', 'Aura', 'Xcent', 'Eon', 'Santro', 'i20', 'i20 Elite', 'i20 Active', 'Alcazar', 'Santa Fe', 'Verna', 'Verna Fluidic', 'Creta', 'Venue', 'Elantra', 'Tucson'], 
    fuelTypes: ['petrol', 'diesel'] as const 
  },
  { 
    make: 'Mahindra', 
    models: ['KUV300', 'XUV300', 'TUV300', 'Bolero Neo', 'Bolero', 'Bolero Pickup', 'XUV500', 'XUV700', 'Xylo', 'Verito', 'Logan', 'Thar', 'Scorpio', 'Scorpio N', 'Jeeto', 'Jeeto Plus', 'Supro', 'Alfa', 'Treo', 'Veero', 'Commander', 'Marshal'], 
    fuelTypes: ['petrol', 'diesel'] as const 
  },
  { 
    make: 'Toyota', 
    models: ['Etios', 'Etios Liva', 'Etios Cross', 'Innova', 'Innova Crysta', 'Innova Hycross', 'Fortuner', 'Vellfire', 'Prado', 'Land Cruiser', 'Glanza', 'Urban Cruiser', 'Hilux', 'Corolla Altis', 'Camry', 'Yaris'], 
    fuelTypes: ['petrol', 'diesel'] as const 
  },
  { 
    make: 'Honda', 
    models: ['City', 'Amaze', 'Jazz', 'WR-V', 'BR-V', 'CR-V', 'Civic', 'Accord', 'Pilot', 'City ZX', 'City i-DTEC', 'Brio', 'Mobilio'], 
    fuelTypes: ['petrol', 'diesel'] as const 
  },
  { 
    make: 'Ford', 
    models: ['EcoSport', 'Figo', 'Figo Aspire', 'Freestyle', 'Aspire', 'Endeavour', 'Everest', 'Mustang', 'Fiesta', 'Ikon', 'Fusion', 'Mondeo'], 
    fuelTypes: ['petrol', 'diesel'] as const 
  },
  { 
    make: 'Chevrolet', 
    models: ['Beat', 'Spark', 'Sail', 'Sail Hatchback', 'Sail Sedan', 'Enjoy', 'Tavera', 'Captiva', 'Cruze', 'Trailblazer', 'Optra', 'Aveo', 'Aveo U-VA'], 
    fuelTypes: ['petrol', 'diesel'] as const 
  },
  { 
    make: 'Renault', 
    models: ['Kwid', 'Triber', 'Duster', 'Captur', 'Fluence', 'Scala', 'Pulse', 'Lodgy', 'Koleos'], 
    fuelTypes: ['petrol', 'diesel'] as const 
  },
  { 
    make: 'Nissan', 
    models: ['Magnite', 'Kicks', 'Terrano', 'X-Trail', 'Sunny', 'Micra', 'Evalia', 'Teana', '370Z'], 
    fuelTypes: ['petrol', 'diesel'] as const 
  },
  { 
    make: 'Skoda', 
    models: ['Rapid', 'Octavia', 'Superb', 'Kodiaq', 'Kushaq', 'Slavia', 'Fabia', 'Laura', 'Yeti'], 
    fuelTypes: ['petrol', 'diesel'] as const 
  },
  { 
    make: 'Volkswagen', 
    models: ['Polo', 'Vento', 'Ameo', 'Tiguan', 'T-Roc', 'Passat', 'Jetta', 'Taigun', 'Beetle', 'Phaeton'], 
    fuelTypes: ['petrol', 'diesel'] as const 
  },
  { 
    make: 'Kia', 
    models: ['Seltos', 'Sonet', 'Carens', 'Carnival'], 
    fuelTypes: ['petrol', 'diesel'] as const 
  },
  { 
    make: 'MG', 
    models: ['Hector', 'Hector Plus', 'Astor', 'Gloster', 'ZS EV', 'Comet EV'], 
    fuelTypes: ['petrol', 'diesel'] as const 
  },
  { 
    make: 'Jeep', 
    models: ['Compass', 'Grand Cherokee', 'Wrangler'], 
    fuelTypes: ['petrol', 'diesel'] as const 
  },
  { 
    make: 'Fiat', 
    models: ['Punto', 'Linea', 'Avventura', 'Abarth Punto', 'Grande Punto', 'Palio', 'Petra', 'Uno', 'Siena'], 
    fuelTypes: ['petrol', 'diesel'] as const 
  },
  { 
    make: 'Mitsubishi', 
    models: ['Pajero Sport', 'Outlander', 'Lancer', 'Montero'], 
    fuelTypes: ['petrol', 'diesel'] as const 
  },
  { 
    make: 'Isuzu', 
    models: ['D-Max', 'MU-7', 'MU-X'], 
    fuelTypes: ['diesel'] as const 
  },
  { 
    make: 'Datsun', 
    models: ['Go', 'Go+', 'redi-GO'], 
    fuelTypes: ['petrol'] as const 
  },
  { 
    make: 'Daewoo', 
    models: ['Matiz', 'Cielo', 'Nexia'], 
    fuelTypes: ['petrol'] as const 
  },
  { 
    make: 'Opel', 
    models: ['Corsa', 'Astra'], 
    fuelTypes: ['petrol', 'diesel'] as const 
  },
  { 
    make: 'Ashok Leyland', 
    models: ['Dost', 'Dost+', 'Partner', 'Boss', 'Guru', 'U-Truck 1618', 'U-Truck 2518', 'Captain 2518', 'Captain 2523', '1920 4x2', '3118 6x4', '4018 8x4'], 
    fuelTypes: ['diesel'] as const 
  },
  { 
    make: 'Eicher', 
    models: ['Pro 1049', 'Pro 1055', 'Pro 1059', 'Pro 1110', 'Pro 2049', 'Pro 2055', 'Pro 2059', 'Pro 3008', 'Pro 3009', 'Pro 6025', 'Pro 6028', 'Pro 8025'], 
    fuelTypes: ['diesel'] as const 
  },
  { 
    make: 'BharatBenz', 
    models: ['914R', '1014R', '1014RE', '1217C', '1617R', '1617RE', '2523C', '2823R', '3523C', '4228R'], 
    fuelTypes: ['diesel'] as const 
  },
  { 
    make: 'Force Motors', 
    models: ['Traveller', 'Tempo Traveller', 'Urbania', 'Trax Cruiser', 'Trax Gama', 'Citiline', 'One'], 
    fuelTypes: ['diesel'] as const 
  },
  { 
    make: 'SML Isuzu', 
    models: ['Samrat GS', 'Sartaj GS', 'Super GS', 'Prestige GS'], 
    fuelTypes: ['diesel'] as const 
  },
  { 
    make: 'Bajaj', 
    models: ['RE Auto Rickshaw', 'Maxima C', 'Compact RE'], 
    fuelTypes: ['petrol', 'diesel'] as const 
  }
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