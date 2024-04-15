import React, { useContext } from "react";
import "./hourly.css";
import { primaryContext } from "../../Context/primaryContext";

const Hourly = () => {
  const { hourlyData } = useContext(primaryContext);
  // console.log(hourlyData);
  // Ensure hourlyData exists and is an array before mapping
  const everyThreeHours = hourlyData || [];

  const temp = (temperature) => {
    // Convert temperature from Kelvin to Fahrenheit
    return Math.round(((temperature - 273.15) * 9) / 5 + 32);
  };
  const convertTimestamp = (timestamp) => {
    const date = new Date(timestamp * 1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    const formattedMinutes = minutes.substring(minutes.length - 2);
    const formattedTime =
      hours >= 12
        ? `${hours % 12}:${formattedMinutes} PM`
        : `${hours}:${formattedMinutes} AM`;
    return formattedTime;
  };

  return (
    <section className="overallContainer">
      <h3>Hourly Forecast</h3>
      <div className="forecastContainer">
        {/* Map over the data to display it */}
        {everyThreeHours.map((item) => (
          <div key={item.dt} className="eachForecastContainer">
            <img
              src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
              alt={item.weather[0].description}
            />
            <p>{`${temp(item.main.temp)} °F`}</p>
            <h4>{convertTimestamp(item.dt)}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hourly;
