import { useLocalStorage } from "../hooks";
import { FavouriteContext } from "../context";

function FavouriteProvider({ children }) {
  const [favourites, setFavourites] = useLocalStorage("favourites", []);

  const addToFavourites = (latitude, longitude, location) => {
    setFavourites([...favourites, {
      latitude: latitude,
      longitude: longitude,
      location: location,
    }]);
  };

  const removeFromFavourites = (location) => {
    const restFavourites = favourites.filter(
      (fev) => fev.location !== location
    );
    setFavourites(restFavourites)
  };

  return (
    <FavouriteContext.Provider value={{ favourites, addToFavourites, removeFromFavourites }}>
      {children}
    </FavouriteContext.Provider>
  );
}

export default FavouriteProvider;
