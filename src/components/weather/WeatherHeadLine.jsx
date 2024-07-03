import { useContext } from "react";
import CloudIcon from "../../assets/cloud.svg";
import HazeIcon from "../../assets/haze.svg";
import SunIcon from "../../assets/sun.svg";
import RainyIcon from "../../assets/rainy.svg";
import ThunderIcon from "../../assets/thunder.svg";
import PinIcon from "../../assets/pin.svg";
import { WeatherContext } from "../../context";
import { getFormattedDate } from "../../utils/date-util";

function WeatherHeadLine() {
  const { weatherData } = useContext(WeatherContext);
  const { climate, location, temperature, time } = weatherData;

  function getWeatherIcon(climate) {
    switch (climate) {
      case "Rain":
        return RainyIcon;
      case "Cloud":
        return CloudIcon;
      case "Haze":
        return HazeIcon;
      case "Sun":
        return SunIcon;
      case "Thunder":
        return ThunderIcon;
      default:
        return SunIcon;
    }
  }

  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={getWeatherIcon(climate)} alt="cloud" />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {Math.round(temperature)}°
          </h1>
          <div className="flex items-center space-x-2 md:mb-4">
            <img src={PinIcon} alt="Pin Icon" />
            <h2 className="text-2xl lg:text-[50px]">{location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">
        {getFormattedDate(time, "time")} -{" "}
        {getFormattedDate(time, "date", false)}
      </p>
    </div>
  );
}

export default WeatherHeadLine;
