import React, { useContext } from "react";
import "./todayWeather.css";
import { primaryContext } from "../../Context/primaryContext";

const TodayWeather = () => {
  const { weatherData } = useContext(primaryContext);
  // console.log(weatherData);

  const day = new Date().toLocaleDateString("en-US", { weekday: "long" });
  const date = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const location = `${weatherData.name}, ${weatherData.sys.country}`;
  // console.log(location);
  const temperature = Math.round(
    ((weatherData.main.temp - 273.15) * 9) / 5 + 32
  );
  // console.log(temperature);

  return (
    <section id="todaysWeatherContainer">
      <div className="weatherUpperContainer">
        <h2 className="weekday">{day}</h2>
        <p className="date">{date}</p>
        <p>{location}</p>
      </div>
      <div className="weatherLowerContainer">
        <img
          className="weatherIcon"
          src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
          alt={weatherData.weather[0].description}
        />
        <h3>{temperature} &deg;F</h3>
        <h3>{weatherData.weather[0].main}</h3>
      </div>
    </section>
  );
};

export default TodayWeather;
