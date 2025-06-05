export interface Location {
  lat: number;
  lng: number;
}

const BUSINESS_LOCATION: Location = { lat: 9.68956689149637, lng: 76.34075736939705 };
const LOCATION_STORAGE_KEY = 'user_location';

// Fetch user location
export async function fetchUserLocation(): Promise<Location> {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by your browser.'));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location: Location = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        // Store location in local storage
        localStorage.setItem(LOCATION_STORAGE_KEY, JSON.stringify(location));
        resolve(location);
      },
      (error) => {
        reject(new Error('Location access is required. Please enable location or contact us directly.'));
      }
    );
  });
}

// Retrieve stored location
export function getStoredLocation(): Location | null {
  const stored = localStorage.getItem(LOCATION_STORAGE_KEY);
  return stored ? JSON.parse(stored) : null;
}

// Calculate distance using Google Maps Distance Matrix API (mocked for prototype)
export async function calculateDistance(userLocation: Location): Promise<number> {
  // In a real app, use Google Maps Distance Matrix API
  // Example: fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=${userLocation.lat},${userLocation.lng}&destinations=${BUSINESS_LOCATION.lat},${BUSINESS_LOCATION.lng}&key=YOUR_API_KEY`)
  // Mocked distance for prototype
  const mockedDistance = 10; // 10 km
  return mockedDistance;
}