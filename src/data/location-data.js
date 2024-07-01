const data = [
  { location: "New York", latitude: 40.712776, longitude: -74.005974 },
  { location: "Los Angeles", latitude: 34.052235, longitude: -118.243683 },
  { location: "Chicago", latitude: 41.878113, longitude: -87.629799 },
  { location: "Houston", latitude: 29.760427, longitude: -95.369804 },
  { location: "Phoenix", latitude: 33.448376, longitude: -112.074036 },
  { location: "Philadelphia", latitude: 39.952583, longitude: -75.165222 },
  { location: "San Antonio", latitude: 29.424122, longitude: -98.493629 },
  { location: "San Diego", latitude: 32.715736, longitude: -117.161087 },
  { location: "Dallas", latitude: 32.776665, longitude: -96.796989 },
  { location: "Afghanistan", latitude: 33.93911, longitude: 67.709953 },
  { location: "Australia", latitude: -25.274398, longitude: 133.775136 },
  { location: "Brazil", latitude: -14.235004, longitude: -51.92528 },
  { location: "Canada", latitude: 56.130366, longitude: -106.346771 },
  { location: "China", latitude: 35.86166, longitude: 104.195397 },
  { location: "Egypt", latitude: 26.820553, longitude: 30.802498 },
  { location: "France", latitude: 46.603354, longitude: 1.888334 },
  { location: "Germany", latitude: 51.165691, longitude: 10.451526 },
  { location: "India", latitude: 20.593684, longitude: 78.96288 },
  { location: "Indonesia", latitude: -0.789275, longitude: 113.921327 },
  { location: "Italy", latitude: 41.87194, longitude: 12.56738 },
  { location: "Kenya", latitude: -1.292066, longitude: 36.821946 },
  { location: "Mexico", latitude: 23.634501, longitude: -102.552784 },
  { location: "Nigeria", latitude: 9.081999, longitude: 8.675277 },
  { location: "Pakistan", latitude: 30.375321, longitude: 69.345116 },
  { location: "Russia", latitude: 61.52401, longitude: 105.318756 },
  { location: "Saudi Arabia", latitude: 23.885942, longitude: 45.079162 },
  { location: "South Africa", latitude: -30.559482, longitude: 22.937506 },
  { location: "South Korea", latitude: 35.907757, longitude: 127.766922 },
  { location: "Spain", latitude: 40.463667, longitude: -3.74922 },
  { location: "Thailand", latitude: 15.870032, longitude: 100.992541 },
  { location: "Turkey", latitude: 38.963745, longitude: 35.243322 },
  { location: "Ukraine", latitude: 48.379433, longitude: 31.16558 },
  { location: "United Kingdom", latitude: 55.378051, longitude: -3.435973 },
  { location: "United States", latitude: 37.09024, longitude: -95.712891 },
  { location: "Argentina", latitude: -38.416097, longitude: -63.616672 },
  { location: "Chile", latitude: -35.675147, longitude: -71.542969 },
  { location: "Colombia", latitude: 4.570868, longitude: -74.297333 },
  { location: "Vietnam", latitude: 14.058324, longitude: 108.277199 },
  { location: "Kabul", latitude: 34.5553, longitude: 69.2075 },
  { location: "Tirana", latitude: 41.3275, longitude: 19.8189 },
  { location: "Algiers", latitude: 36.7372, longitude: 3.086 },
  { location: "Andorra la Vella", latitude: 42.5078, longitude: 1.5211 },
  { location: "Luanda", latitude: -8.8383, longitude: 13.2344 },
  { location: "Buenos Aires", latitude: -34.6118, longitude: -58.4173 },
  { location: "Yerevan", latitude: 40.1833, longitude: 44.5167 },
  { location: "Canberra", latitude: -35.282, longitude: 149.128 },
  { location: "Vienna", latitude: 48.2064, longitude: 16.3614 },
  { location: "Baku", latitude: 40.3777, longitude: 49.892 },
  { location: "Nassau", latitude: 25.0343, longitude: -77.3963 },
  { location: "Manama", latitude: 26.225, longitude: 50.5775 },
  { location: "Dhaka", latitude: 23.8103, longitude: 90.4125 },
  { location: "Bridgetown", latitude: 13.0975, longitude: -59.6167 },
  { location: "Minsk", latitude: 53.9, longitude: 27.5667 },
  { location: "Brussels", latitude: 50.8503, longitude: 4.3517 },
  { location: "Belmopan", latitude: 17.25, longitude: -88.7667 },
  { location: "Porto-Novo", latitude: 6.4969, longitude: 2.6296 },
  { location: "Thimphu", latitude: 27.4661, longitude: 89.6419 },
  { location: "Sucre", latitude: -19.0333, longitude: -65.2627 },
  { location: "Sarajevo", latitude: 43.8563, longitude: 18.4131 },
  { location: "Gaborone", latitude: -24.6581, longitude: 25.9122 },
  { location: "Brasília", latitude: -15.7797, longitude: -47.9297 },
  { location: "Sofia", latitude: 42.6975, longitude: 23.3242 },
  { location: "Ouagadougou", latitude: 12.3686, longitude: -1.5275 },
  { location: "Gitega", latitude: -3.4281, longitude: 29.9246 },
  { location: "Praia", latitude: 14.933, longitude: -23.5128 },
  { location: "Phnom Penh", latitude: 11.565, longitude: 104.921 },
  { location: "Yaoundé", latitude: 3.848, longitude: 11.5021 },
  { location: "Ottawa", latitude: 45.4215, longitude: -75.6972 },
  { location: "Bangui", latitude: 4.3622, longitude: 18.5873 },
  { location: "N'Djamena", latitude: 12.1348, longitude: 15.0557 },
  { location: "Santiago", latitude: -33.4691, longitude: -70.641 },
  { location: "Beijing", latitude: 39.9042, longitude: 116.4074 },
  { location: "Bogotá", latitude: 4.711, longitude: -74.0721 },
  { location: "Moroni", latitude: -11.7022, longitude: 43.2551 },
  { location: "Kinshasa", latitude: -4.325, longitude: 15.3222 },
  { location: "Brazzaville", latitude: -4.2634, longitude: 15.2429 },
  { location: "San José", latitude: 9.9281, longitude: -84.0907 },
  { location: "Zagreb", latitude: 45.815, longitude: 15.9819 },
  { location: "Havana", latitude: 23.1136, longitude: -82.3666 },
  { location: "Nicosia", latitude: 35.1856, longitude: 33.3823 },
  { location: "Prague", latitude: 50.0755, longitude: 14.4378 },
  { location: "Copenhagen", latitude: 55.6761, longitude: 12.5683 },
  { location: "Djibouti", latitude: 11.8251, longitude: 42.5903 },
  { location: "Roseau", latitude: 15.2994, longitude: -61.39 },
  { location: "Santo Domingo", latitude: 18.4861, longitude: -69.9312 },
  { location: "Quito", latitude: -0.2299, longitude: -78.5249 },
  { location: "Cairo", latitude: 30.0444, longitude: 31.2357 },
  { location: "San Salvador", latitude: 13.6929, longitude: -89.2182 },
  { location: "Malabo", latitude: 3.75, longitude: 8.7833 },
  { location: "Asmara", latitude: 15.3229, longitude: 38.9251 },
  { location: "Tallinn", latitude: 59.437, longitude: 24.7535 },
  { location: "Addis Ababa", latitude: 9.03, longitude: 38.74 },
  { location: "Suva", latitude: -18.1248, longitude: 178.4501 },
  { location: "Helsinki", latitude: 60.1695, longitude: 24.9355 },
  { location: "Paris", latitude: 48.8566, longitude: 2.3522 },
  { location: "Libreville", latitude: 0.4162, longitude: 9.4673 },
  { location: "Banjul", latitude: 13.4549, longitude: -16.579 },
  { location: "Tbilisi", latitude: 41.7151, longitude: 44.8271 },
  { location: "Berlin", latitude: 52.52, longitude: 13.405 },
  { location: "Accra", latitude: 5.6037, longitude: -0.187 },
  { location: "Athens", latitude: 37.9838, longitude: 23.7275 },
  { location: "Guatemala City", latitude: 14.6349, longitude: -90.5069 },
];

function getLocations() {
  return data;
}

function getLocationByName(location) {
  if (!location) return null;

  const filtered = data.filter((item) => item.location === location);

  if (filtered.length > 0) {
    return filtered[0];
  } else {
    const defaultLocation = {
      location: "",
      latitude: 0,
      longitude: 0,
    };
    return defaultLocation;
  }
}

export { getLocationByName, getLocations };
