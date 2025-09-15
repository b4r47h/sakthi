'use client';

import React, { useState, useMemo } from 'react';
import { Search, Car, Zap, Info, IndianRupee, Weight, Ruler, Shield, Star, Truck, Bus } from 'lucide-react';

const EnhancedVehicleBatteryFinder = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  // Enhanced Vehicle Battery Data with Multiple Options
  const vehicleBatteryData = {
    cars_lmv: {
      "Maruti Alto": {
        battery_options: [
          {
            battery_code: "38B20L",
            voltage: "12V",
            capacity_ah: 35,
            cca: "270-300A",
            dimensions_mm: "197x129x227",
            weight_kg: 10.8,
            price_range_inr: "₹3400-4400",
            warranty_months: 60,
            brand_models: {
              "Exide": {
                model: "FML0-ML38B20L",
                price: "₹3400-4400",
                warranty: "60 months (30+30 pro-rata)",
                special_features: ["Enhanced flooded battery", "Vibration resistant"]
              },
               "Exide Plus": {
                model: "MT38B20L",
                price: "₹3600-4600",
                warranty: "72 months (36+36 pro-rata)",
                special_features: ["Enhanced flooded battery", "Vibration resistant"]
              },
              "Amaron": {
                model: "38B20L Standard",
                price: "₹3500-4200",
                warranty: "48 months",
                special_features: ["Long life", "Temperature resistant"]
              },
              "SF Sonic": {
                model: "38B20L Series",
                price: "₹3400-4000",
                warranty: "42 months",
                special_features: ["Fast charging", "Low maintenance"]
              }
            }
          }
        ]
      },
      "Maruti Swift": {
        battery_options: [
          {
            battery_code: "DIN44",
            voltage: "12V",
            capacity_ah: 44,
            cca: "330-480A",
            dimensions_mm: "238x129x204",
            weight_kg: 12.9,
            price_range_inr: "₹4500-6000",
            warranty_months: 60,
            din_code: "DIN44",
            brand_models: {
              "Exide": {
                model: "DIN44 Mileage",
                price: "₹5200-6000",
                warranty: "60 months"
              },
              "Amaron": {
                model: "DIN44 Pro",
                price: "₹4800-5600",
                warranty: "48 months"
              },
              "SF Sonic": {
                model: "DIN44 Flash",
                price: "₹4500-5200",
                warranty: "42 months"
              }
            }
          }
        ]
      },
      "Maruti Baleno": {
        battery_options: [
          {
            battery_code: "DIN44",
            voltage: "12V",
            capacity_ah: 44,
            cca: "350-400A",
            dimensions_mm: "238x129x204",
            weight_kg: 13.2,
            price_range_inr: "₹4800-6200",
            warranty_months: 60,
            din_code: "DIN44",
            brand_models: {
              "Exide": {
                model: "DIN44 FML0",
                price: "₹5400-6200",
                warranty: "60 months",
                special_features: ["Premium quality", "Enhanced CCA"]
              },
              "Amaron": {
                model: "DIN44 Go",
                price: "₹5000-5800",
                warranty: "48 months",
                special_features: ["Zero maintenance", "Long life"]
              },
              "Luminous": {
                model: "DIN44 PowerMax",
                price: "₹4800-5400",
                warranty: "42 months",
                special_features: ["Fast charging", "Heat resistant"]
              }
            }
          }
        ]
      },
      "Maruti Dzire": {
        battery_options: [
          {
            battery_code: "DIN55",
            voltage: "12V",
            capacity_ah: 55,
            cca: "450-500A",
            dimensions_mm: "260x173x204",
            weight_kg: 16.5,
            price_range_inr: "₹6200-8200",
            warranty_months: 60,
            din_code: "DIN55",
            brand_models: {
              "Exide": {
                model: "DIN55 Matrix",
                price: "₹7400-8200",
                warranty: "72 months",
                special_features: ["Premium grade", "Excellent CCA"]
              },
              "Amaron": {
                model: "DIN55 Current",
                price: "₹6800-7600",
                warranty: "60 months",
                special_features: ["High performance", "Temperature resistant"]
              },
              "SF Sonic": {
                model: "DIN55 Stan-Master",
                price: "₹6200-7000",
                warranty: "48 months",
                special_features: ["Reliable start", "Value pricing"]
              }
            }
          }
        ]
      },
      "Honda City": {
        battery_options: [
          {
            battery_code: "DIN55",
            voltage: "12V",
            capacity_ah: 55,
            cca: "450-590A", 
            dimensions_mm: "260x173x204",
            weight_kg: 16.6,
            price_range_inr: "₹6000-8000",
            warranty_months: 60,
            din_code: "DIN55",
            brand_models: {
              "Exide": {
                model: "DIN55 Matrix",
                price: "₹7200-8000",
                warranty: "72 months"
              },
              "Amaron": {
                model: "DIN55 Hi-Life",
                price: "₹6500-7500",
                warranty: "60 months"
              },
              "SF Sonic": {
                model: "DIN55 Stan-Master",
                price: "₹6000-6800",
                warranty: "48 months"
              }
            }
          }
        ]
      },
      "Honda Amaze": {
        battery_options: [
          {
            battery_code: "38B20L",
            voltage: "12V",
            capacity_ah: 35,
            cca: "280-320A",
            dimensions_mm: "197x129x227",
            weight_kg: 10.9,
            price_range_inr: "₹3600-4900",
            warranty_months: 60,
            brand_models: {
              "Exide": {
                model: "38B20L Mileage",
                price: "₹3800-4900",
                warranty: "60 months",
                special_features: ["Compact design", "Reliable performance"]
              },
              "Amaron": {
                model: "38B20L Go",
                price: "₹3600-4400",
                warranty: "48 months",
                special_features: ["Maintenance free", "Quick charging"]
              }
            }
          }
        ]
      },
      "Hyundai i10": {
        battery_options: [
          {
            battery_code: "38B20L",
            voltage: "12V",
            capacity_ah: 35,
            cca: "270-300A",
            dimensions_mm: "197x129x227",
            weight_kg: 10.7,
            price_range_inr: "₹3500-4700",
            warranty_months: 60,
            brand_models: {
              "Exide": {
                model: "38B20L FML0",
                price: "₹3700-4700",
                warranty: "60 months",
                special_features: ["OEM quality", "Long lasting"]
              },
              "Amaron": {
                model: "38B20L Fresh",
                price: "₹3500-4200",
                warranty: "48 months",
                special_features: ["Zero spillage", "Vibration resistant"]
              }
            }
          }
        ]
      },
      "Hyundai i20": {
        battery_options: [
          {
            battery_code: "DIN44",
            voltage: "12V",
            capacity_ah: 44,
            cca: "330-400A",
            dimensions_mm: "238x129x204",
            weight_kg: 13.0,
            price_range_inr: "₹4600-6100",
            warranty_months: 60,
            din_code: "DIN44",
            brand_models: {
              "Exide": {
                model: "DIN44 InvaRed",
                price: "₹5300-6100",
                warranty: "60 months",
                special_features: ["High cranking power", "Corrosion resistant"]
              },
              "Amaron": {
                model: "DIN44 Pro",
                price: "₹4900-5700",
                warranty: "48 months",
                special_features: ["Premium performance", "Long life"]
              }
            }
          }
        ]
      },
      "Hyundai Verna": {
        battery_options: [
          {
            battery_code: "DIN55",
            voltage: "12V",
            capacity_ah: 55,
            cca: "460-520A",
            dimensions_mm: "260x173x204",
            weight_kg: 16.8,
            price_range_inr: "₹6300-8300",
            warranty_months: 60,
            din_code: "DIN55",
            brand_models: {
              "Exide": {
                model: "DIN55 Matrix Red",
                price: "₹7500-8300",
                warranty: "72 months",
                special_features: ["Premium grade", "Enhanced performance"]
              },
              "Amaron": {
                model: "DIN55 Hi-Life Pro",
                price: "₹6900-7800",
                warranty: "60 months",
                special_features: ["Superior technology", "Heat resistant"]
              }
            }
          }
        ]
      },
      "Tata Tiago": {
        battery_options: [
          {
            battery_code: "38B20L",
            voltage: "12V",
            capacity_ah: 35,
            cca: "270-300A",
            dimensions_mm: "197x129x227",
            weight_kg: 10.8,
            price_range_inr: "₹3400-4600",
            warranty_months: 60,
            brand_models: {
              "Exide": {
                model: "38B20L Mileage Red",
                price: "₹3600-4600",
                warranty: "60 months",
                special_features: ["Tata approved", "Reliable start"]
              },
              "Amaron": {
                model: "38B20L Black",
                price: "₹3400-4100",
                warranty: "48 months",
                special_features: ["Zero maintenance", "Long life"]
              }
            }
          }
        ]
      },
      "Tata Nexon": {
        battery_options: [
          {
            battery_code: "DIN55",
            voltage: "12V",
            capacity_ah: 55,
            cca: "450-500A",
            dimensions_mm: "260x173x204",
            weight_kg: 16.7,
            price_range_inr: "₹6100-8100",
            warranty_months: 60,
            din_code: "DIN55",
            brand_models: {
              "Exide": {
                model: "DIN55 Matrix SUV",
                price: "₹7300-8100",
                warranty: "72 months",
                special_features: ["SUV grade", "Heavy duty"]
              },
              "Amaron": {
                model: "DIN55 Current SUV",
                price: "₹6700-7600",
                warranty: "60 months",
                special_features: ["High performance", "Durable construction"]
              }
            }
          }
        ]
      }
    },
    scooters: {
      battery_by_cc: {
        "100cc": {
          common_vehicles: ["Honda Activa", "TVS Jupiter", "Suzuki Access", "Hero Maestro"],
          shared_battery: {
            battery_code: "YTZ4",
            voltage: "12V", 
            capacity_ah: 3.5,
            dimensions_mm: "113x70x85",
            weight_kg: 1.5,
            price_range_inr: "₹280-450",
            brand_options: ["Exide", "Amaron", "SF Sonic", "Bosch"]
          }
        },
        "110cc": {
          common_vehicles: ["Honda Activa 110", "TVS Jupiter 110", "Hero Pleasure", "Yamaha Fascino"],
          shared_battery: {
            battery_code: "YTZ4V",
            voltage: "12V",
            capacity_ah: 4.0,
            dimensions_mm: "113x70x85",
            weight_kg: 1.6,
            price_range_inr: "₹320-480",
            brand_options: ["Exide", "Amaron", "SF Sonic", "Bosch"]
          }
        },
        "125cc": {
          common_vehicles: ["Honda Activa 125", "TVS NTorq", "Suzuki Access 125", "Hero Maestro Edge"],
          shared_battery: {
            battery_code: "YTX5L",
            voltage: "12V",
            capacity_ah: 4.5, 
            dimensions_mm: "113x70x130",
            weight_kg: 1.7,
            price_range_inr: "₹350-520",
            brand_options: ["Exide", "Amaron", "SF Sonic", "Bosch"]
          }
        },
        "150cc": {
          common_vehicles: ["Honda PCX", "Yamaha Aerox", "TVS NTORQ 150", "Aprilia SR 150"],
          shared_battery: {
            battery_code: "YTX7A",
            voltage: "12V",
            capacity_ah: 6.5,
            dimensions_mm: "150x87x105", 
            weight_kg: 2.5,
            price_range_inr: "₹420-680",
            brand_options: ["Exide", "Amaron", "SF Sonic"]
          }
        }
      }
    },
    motorcycles: {
      "Royal Enfield Classic 350": {
        battery_options: [
          {
            battery_code: "YTX9",
            voltage: "12V",
            capacity_ah: 8,
            cca: "120-140A",
            dimensions_mm: "150x87x105",
            weight_kg: 2.8,
            price_range_inr: "₹1200-1800",
            warranty_months: 18,
            brand_models: {
              "Exide": {
                model: "YTX9-BS Bike",
                price: "₹1500-1800",
                warranty: "18 months",
                special_features: ["Maintenance free", "Vibration resistant"]
              },
              "Amaron": {
                model: "YTX9 Pro Bike",
                price: "₹1350-1650",
                warranty: "15 months",
                special_features: ["High cranking", "Long life"]
              },
              "SF Sonic": {
                model: "YTX9 Flash Start",
                price: "₹1200-1500",
                warranty: "12 months",
                special_features: ["Quick charge", "Reliable start"]
              }
            }
          }
        ]
      },
      "Bajaj Pulsar 150": {
        battery_options: [
          {
            battery_code: "YTX7A",
            voltage: "12V",
            capacity_ah: 6.5,
            cca: "100-120A",
            dimensions_mm: "150x87x105",
            weight_kg: 2.4,
            price_range_inr: "₹950-1400",
            warranty_months: 15,
            brand_models: {
              "Exide": {
                model: "YTX7A-BS",
                price: "₹1200-1400",
                warranty: "15 months",
                special_features: ["Sealed maintenance free", "High performance"]
              },
              "Amaron": {
                model: "YTX7A Bike Pro",
                price: "₹1100-1300",
                warranty: "12 months",
                special_features: ["Zero spillage", "Temperature resistant"]
              }
            }
          }
        ]
      },
      "Hero Splendor Plus": {
        battery_options: [
          {
            battery_code: "YTX5L",
            voltage: "12V",
            capacity_ah: 4.5,
            cca: "70-90A",
            dimensions_mm: "113x70x130",
            weight_kg: 1.8,
            price_range_inr: "₹650-950",
            warranty_months: 12,
            brand_models: {
              "Exide": {
                model: "YTX5L-BS Economy",
                price: "₹800-950",
                warranty: "12 months",
                special_features: ["Budget friendly", "Reliable performance"]
              },
              "Amaron": {
                model: "YTX5L Standard",
                price: "₹750-900",
                warranty: "12 months",
                special_features: ["Maintenance free", "Quick start"]
              }
            }
          }
        ]
      },
      "TVS Apache RTR 160": {
        battery_options: [
          {
            battery_code: "YTX7A",
            voltage: "12V",
            capacity_ah: 6.5,
            cca: "105-125A",
            dimensions_mm: "150x87x105",
            weight_kg: 2.5,
            price_range_inr: "₹1000-1450",
            warranty_months: 15,
            brand_models: {
              "Exide": {
                model: "YTX7A Sport",
                price: "₹1250-1450",
                warranty: "15 months",
                special_features: ["Sports grade", "High cranking power"]
              },
              "Amaron": {
                model: "YTX7A Performance",
                price: "₹1150-1350",
                warranty: "12 months",
                special_features: ["Performance oriented", "Heat resistant"]
              }
            }
          }
        ]
      }
    },
    trucks_hmv: {
      "Tata 407": {
        battery_options: [
          {
            battery_code: "DIN88",
            voltage: "12V",
            capacity_ah: 88,
            cca: "680-750A",
            dimensions_mm: "353x175x190",
            weight_kg: 25.5,
            price_range_inr: "₹12000-16000",
            warranty_months: 48,
            din_code: "DIN88",
            brand_models: {
              "Exide": {
                model: "DIN88 Commercial",
                price: "₹14500-16000",
                warranty: "48 months",
                special_features: ["Heavy duty", "Commercial grade", "Deep cycle"]
              },
              "Amaron": {
                model: "DIN88 Truck Pro",
                price: "₹13500-15200",
                warranty: "42 months",
                special_features: ["High cranking", "Vibration resistant", "Long life"]
              },
              "SF Sonic": {
                model: "DIN88 Fleet Master",
                price: "₹12000-14000",
                warranty: "36 months",
                special_features: ["Fleet optimized", "Cost effective", "Reliable"]
              }
            }
          }
        ]
      },
      "Ashok Leyland Dost": {
        battery_options: [
          {
            battery_code: "DIN100",
            voltage: "12V",
            capacity_ah: 100,
            cca: "750-850A",
            dimensions_mm: "353x175x190",
            weight_kg: 28.0,
            price_range_inr: "₹14000-18500",
            warranty_months: 48,
            din_code: "DIN100",
            brand_models: {
              "Exide": {
                model: "DIN100 InvaTubular",
                price: "₹16500-18500",
                warranty: "54 months",
                special_features: ["Tubular technology", "Extended life", "High performance"]
              },
              "Amaron": {
                model: "DIN100 Current Truck",
                price: "₹15000-17500",
                warranty: "48 months",
                special_features: ["Commercial duty", "Temperature resistant", "Deep discharge recovery"]
              }
            }
          }
        ]
      },
      "Mahindra Bolero Pickup": {
        battery_options: [
          {
            battery_code: "DIN65",
            voltage: "12V",
            capacity_ah: 65,
            cca: "550-600A",
            dimensions_mm: "278x175x190",
            weight_kg: 20.5,
            price_range_inr: "₹8500-12000",
            warranty_months: 48,
            din_code: "DIN65",
            brand_models: {
              "Exide": {
                model: "DIN65 InvaRed 500",
                price: "₹10500-12000",
                warranty: "54 months",
                special_features: ["SUV grade", "Enhanced CCA", "Premium quality"]
              },
              "Amaron": {
                model: "DIN65 Hi-Life SUV",
                price: "₹9500-11200",
                warranty: "48 months",
                special_features: ["SUV optimized", "Heavy duty", "Long lasting"]
              }
            }
          }
        ]
      }
    },
    auto_rickshaw: {
      "Bajaj Auto": {
        battery_options: [
          {
            battery_code: "32C24",
            voltage: "12V",
            capacity_ah: 32,
            cca: "240-280A",
            dimensions_mm: "195x130x200",
            weight_kg: 9.5,
            price_range_inr: "₹3200-4500",
            warranty_months: 36,
            brand_models: {
              "Exide": {
                model: "32C24 Rickshaw Special",
                price: "₹3800-4500",
                warranty: "36 months",
                special_features: ["Rickshaw optimized", "Vibration resistant", "Deep cycle"]
              },
              "Amaron": {
                model: "32C24 Commercial",
                price: "₹3500-4200",
                warranty: "30 months",
                special_features: ["Commercial grade", "High cranking", "Maintenance free"]
              },
              "SF Sonic": {
                model: "32C24 Auto Pro",
                price: "₹3200-3800",
                warranty: "24 months",
                special_features: ["Auto rickshaw specific", "Cost effective", "Reliable start"]
              }
            }
          }
        ]
      },
      "TVS King": {
        battery_options: [
          {
            battery_code: "38B20L",
            voltage: "12V",
            capacity_ah: 35,
            cca: "270-300A",
            dimensions_mm: "197x129x227",
            weight_kg: 10.8,
            price_range_inr: "₹3500-4800",
            warranty_months: 36,
            brand_models: {
              "Exide": {
                model: "38B20L Auto King",
                price: "₹4100-4800",
                warranty: "36 months",
                special_features: ["TVS approved", "Enhanced durability", "Commercial use"]
              },
              "Amaron": {
                model: "38B20L King Pro",
                price: "₹3700-4400",
                warranty: "30 months",
                special_features: ["King optimized", "Zero maintenance", "Long life"]
              }
            }
          }
        ]
      },
      "Mahindra Alfa": {
        battery_options: [
          {
            battery_code: "32C24R",
            voltage: "12V",
            capacity_ah: 32,
            cca: "250-290A",
            dimensions_mm: "195x130x200",
            weight_kg: 9.8,
            price_range_inr: "₹3300-4600",
            warranty_months: 36,
            brand_models: {
              "Exide": {
                model: "32C24R Alfa Special",
                price: "₹3900-4600",
                warranty: "36 months",
                special_features: ["Alfa compatible", "Reverse terminal", "Heavy duty"]
              },
              "Amaron": {
                model: "32C24R Commercial Plus",
                price: "₹3600-4300",
                warranty: "30 months",
                special_features: ["Commercial grade", "Temperature resistant", "Quick charge"]
              }
            }
          }
        ]
      }
    }
  };

  const MultiOptionBatteryCard = ({ vehicle, vehicleData }) => (
    <div className="bg-black text-white rounded-lg shadow-lg p-6 sm:p-1 border-l-4 border-blue-400">
      <div className="flex items-center mb-4">
        <Car className="w-6 h-6 text-blue-200 mr-2" />
        <h3 className="text-xl font-bold text-gray-300">{vehicle} - Battery Options</h3>
      </div>

      {vehicleData.battery_options?.map((option, index) => (
        <div key={index} className="mb-6 p-4 rounded-lg">
          <div className="flex justify-between items-start mb-3">
            <h4 className="text-lg font-semibold text-gray-200">
              Option {index + 1}: {option.battery_code}
            </h4>
            <span className="px-3 py-1 bg-green-300 text-green-900 text-sm rounded-full">
              {option.capacity_ah}Ah
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            <div>
              <p className="text-xs text-gray-200">Voltage</p>
              <p className="font-semibold">{option.voltage}</p>
            </div>
            <div>
              <p className="text-xs text-gray-200">CCA</p>
              <p className="font-semibold">{option.cca}</p>
            </div>
            <div>
              <p className="text-xs text-gray-200">Weight</p>
              <p className="font-semibold">{option.weight_kg}kg</p>
            </div>
            <div>
              <p className="text-xs text-gray-200">Warranty</p>
              <p className="font-semibold">{option.warranty_months}m</p>
            </div>
          </div>

          <div className="mb-3">
            <p className="text-xs text-gray-100">Dimensions (L×W×H)</p>
            <p className="font-semibold text-sm">{option.dimensions_mm} mm</p>
          </div>

          <div className="grid mx-auto gap-3">
            <h5 className="font-medium text-gray-100">Brand Options:</h5>
            {Object.entries(option.brand_models).map(([brand, details]) => (
              <div key={brand} className="border border-gray-200 rounded p-3">
                <div className="flex justify-between items-start mb-2">
                  <h6 className="font-semibold">{brand}</h6>
                  <span className="text-sm text-green-400 font-medium">{details.price}</span>
                </div>
                <p className="text-sm mb-1">{details.model}</p>
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-4 h-4 text-yellow-600" />
                  <span className="text-xs">{details.warranty}</span>
                </div>
                {details.special_features && (
                  <div className="flex flex-wrap gap-1">
                    {details.special_features.map((feature, i) => (
                      <span key={i} className="px-2 py-1 bg-blue-900 text-blue-100 text-xs rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {(option.din_code || option.iss_code || option.jis_code) && (
            <div className="mt-3 p-2 bg-yellow-50 rounded">
              <p className="text-sm text-yellow-800">
                <strong>Standard Code:</strong> {option.din_code || option.iss_code || option.jis_code}
                {option.din_code && " (DIN - European Standard)"}
                {option.iss_code && " (ISS - Indian Standard)"}  
                {option.jis_code && " (JIS - Japanese Standard)"}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  // Create searchable vehicle list
  const allVehicles = useMemo(() => {
    const vehicles = [];
    
    // Cars
    Object.entries(vehicleBatteryData.cars_lmv).forEach(([vehicle, data]) => {
      vehicles.push({
        name: vehicle,
        category: 'cars_lmv',
        categoryLabel: 'Cars (LMV)',
        data: data,
        type: 'car'
      });
    });

    // Motorcycles
    Object.entries(vehicleBatteryData.motorcycles).forEach(([vehicle, data]) => {
      vehicles.push({
        name: vehicle,
        category: 'motorcycles',
        categoryLabel: 'Motorcycles',
        data: data,
        type: 'car'
      });
    });

    // Trucks/HMV
    Object.entries(vehicleBatteryData.trucks_hmv).forEach(([vehicle, data]) => {
      vehicles.push({
        name: vehicle,
        category: 'trucks_hmv',
        categoryLabel: 'Trucks (HMV)',
        data: data,
        type: 'car'
      });
    });

    // Auto Rickshaw
    Object.entries(vehicleBatteryData.auto_rickshaw).forEach(([vehicle, data]) => {
      vehicles.push({
        name: vehicle,
        category: 'auto_rickshaw',
        categoryLabel: 'Auto Rickshaw',
        data: data,
        type: 'car'
      });
    });

    return vehicles;
  }, []);

  const filteredVehicles = useMemo(() => {
    return allVehicles.filter(vehicle => {
      const matchesSearch = vehicle.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || vehicle.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory, allVehicles]);

  return (
    <div className="mx-auto p-2 bg-black min-h-screen text-white">
      <div className="rounded-lg shadow-lg p-6 sm:p-1 mb-6">
        <div className="flex items-center mb-6 justify-center">
          <Car className="w-8 h-8 text-red-600 mr-3" />
          <div>
            <h1 className="text-2xl font-bold text-white">Find your battery</h1>
            <p className="text-gray-200">Compare and Contrast</p>
          </div>
        </div>

        {/* Search and Filter Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for your vehicle (e.g., Maruti Alto, Royal Enfield, Tata 407)..."
              className="w-full pl-10 pr-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-black text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <select
            className="px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-black text-white"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="cars_lmv">Cars (LMV)</option>
            <option value="scooters">Scooters</option>
            <option value="motorcycles">Motorcycles</option>
            <option value="trucks_hmv">Trucks (HMV)</option>
            <option value="auto_rickshaw">Auto Rickshaw</option>
          </select>
        </div>

        {/* Vehicle Results */}
        {searchTerm && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">
              Search Results ({filteredVehicles.length} vehicles found)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredVehicles.map((vehicle, index) => (
                <div
                  key={index}
                  className="bg-black border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => setSelectedVehicle(vehicle)}
                >
                  <h3 className="font-semibold text-gray-100">{vehicle.name}</h3>
                  <p className="text-sm text-white">{vehicle.categoryLabel}</p>
                  {vehicle.type === 'car' && (
                    <p className="text-xs text-blue-100">
                      {vehicle.data.battery_options?.length} battery options available
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Selected Vehicle Battery Details */}
      {selectedVehicle && selectedVehicle.type === 'car' && (
        <MultiOptionBatteryCard
          vehicle={selectedVehicle.name}
          vehicleData={selectedVehicle.data}
        />
      )}

      {/* Category Overview when no search */}
      {!selectedVehicle && !searchTerm && (
        <div className="space-y-6">

          {/* Quick Access Categories */}
          <div className="bg-neutral-900 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Vehicle Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-blue-600 rounded-lg p-4 text-center">
                <Car className="w-8 h-8 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Cars (LMV)</h3>
                <p className="text-sm opacity-90">{Object.keys(vehicleBatteryData.cars_lmv).length} models</p>
                <p className="text-xs opacity-75">DIN, ISS, JIS standards</p>
              </div>
              <div className="bg-green-600 rounded-lg p-4 text-center">
                <Zap className="w-8 h-8 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Scooters</h3>
                <p className="text-sm opacity-90">100cc-150cc range</p>
                <p className="text-xs opacity-75">YTZ, YTX series</p>
              </div>
              <div className="bg-orange-600 rounded-lg p-4 text-center">
                <Zap className="w-8 h-8 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Motorcycles</h3>
                <p className="text-sm opacity-90">{Object.keys(vehicleBatteryData.motorcycles).length} models</p>
                <p className="text-xs opacity-75">YTX series</p>
              </div>
              <div className="bg-red-600 rounded-lg p-4 text-center">
                <Truck className="w-8 h-8 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Commercial</h3>
                <p className="text-sm opacity-90">Trucks & Auto</p>
                <p className="text-xs opacity-75">Heavy duty batteries</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Battery Standards Info */}
      <div className="mt-8 bg-neutral-900 rounded-lg p-6">
        <h2 className="text-lg font-bold text-red-500 mb-3">Understanding Battery Codes & Standards</h2>
        <div className="grid md:grid-cols-4 gap-4 text-sm text-gray-200">
          <div>
            <h3 className="font-semibold mb-2 text-red-400">DIN Codes</h3>
            <p>European standard (e.g., DIN44, DIN55, DIN88) - specifies dimensions, terminal types, and performance for cars and commercial vehicles.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-red-400">ISS Codes</h3>
            <p>Indian standard specifications (e.g., ISS55) - designed for specific Indian vehicle models and climate conditions.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-red-400">JIS Codes</h3>
            <p>Japanese standard (e.g., 55B24LS, 38B20L) - common in Asian vehicles, includes performance rank and terminal position.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-red-400">YTX/YTZ Series</h3>
            <p>Motorcycle & scooter batteries (e.g., YTX7A, YTZ4V) - sealed, maintenance-free batteries for two-wheelers.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedVehicleBatteryFinder;
