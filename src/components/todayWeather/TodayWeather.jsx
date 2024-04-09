import React from "react";
import "./todayWeather.css";

const TodayWeather = () => {
  return (
    <section id="todaysWeatherContainer">
      <div className="weatherUpperContainer">
        <h2 className="weekday">Day</h2>
        <p className="date">date</p>
        <p>location</p>
      </div>
      <div className="weatherLowerContainer">
        <img src="" alt="weather-icon" />
        <h3>temp</h3>
        <h3>feels_like</h3>
      </div>
    </section>
  );
};

export default TodayWeather;
