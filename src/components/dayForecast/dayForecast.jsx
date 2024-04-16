import React, { useContext } from "react";
import { primaryContext } from "../../Context/primaryContext";

const DayForecast = () => {
  const { dailyData } = useContext(primaryContext);
  const dailyDataInformation = dailyData.list;

  // Initialize an array to store selected items
  const selectedData = [];

  // Loop to select every 8th item from dailyDataInformation
  for (let i = 0; i < dailyDataInformation.length; i += 8) {
    const selectedItem = dailyDataInformation[i];
    if (selectedItem) {
      selectedData.push(selectedItem);
    }
  }

  const temp = (temperature) => {
    // Convert temperature from Kelvin to Fahrenheit
    return Math.round(((temperature - 273.15) * 9) / 5 + 32);
  };

  const dayOfTheWeek = (timestamp) => {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const date = new Date(timestamp * 1000);
    const dayOfTheWeekIndex = date.getDay();
    return daysOfWeek[dayOfTheWeekIndex];
  };

  return (
    <section className="overallContainer">
      <h3>Day Forecast</h3>
      <div className="forecastContainer">
        {selectedData.map((item, index) => (
          <div key={index} className="eachForecastContainer">
            <img
              src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
              alt={item.weather[0].description}
            />
            <p>{`${temp(item.main.temp)} °F`}</p>
            <h4>{dayOfTheWeek(item.dt)}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DayForecast;
