import "./App.css";
import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard.jsx";
import {LocationProvider, WeatherProvider, FavouriteProvider } from './providers/index.js'


function App() {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FavouriteProvider>
          <div className="grid place-items-center h-screen">
            <Header />
            <main>
              <section className="lg:mt-14 lg:me-14">
                <WeatherBoard />
              </section>
            </main>
          </div>
        </FavouriteProvider>
      </WeatherProvider>
    </LocationProvider>
  );
}

export default App;
