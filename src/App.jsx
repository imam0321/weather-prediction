import Page from "./Page.jsx";
import {
  LocationProvider,
  WeatherProvider,
  FavouriteProvider,
} from "./providers/index.js";

function App() {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FavouriteProvider>
          <Page />
        </FavouriteProvider>
      </WeatherProvider>
    </LocationProvider>
  );
}

export default App;
