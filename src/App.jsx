import "./App.css";
import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard.jsx";
import WeatherProvider from "./providers/WeatherProvider.jsx";

function App() {
  return (
    <WeatherProvider>
      <div className="grid place-items-center h-screen">
        <Header />
        <main>
          <section className="lg:mt-14 lg:me-14">
            <WeatherBoard />
          </section>
        </main>
      </div>
    </WeatherProvider>
  );
}

export default App;
