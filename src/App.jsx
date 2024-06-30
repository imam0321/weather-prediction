import "./App.css";
import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard.jsx";

function App() {
  return (
    <div className="grid place-items-center h-screen">
      <Header />
      <main>
        <section className="lg:mt-14">
          <WeatherBoard/>
        </section>
      </main>
    </div>
  );
}

export default App;
