import React, { useContext } from "react";
import { primaryContext } from "../../Context/primaryContext";

const DayForecast = () => {
  const { weatherData } = useContext(primaryContext);
  console.log(weatherData);
  return (
    <section className="overallContainer">
      <h3>Day Forecast</h3>
      <div className="forecastContainer">
        <div className="eachForecastContainer">
          <img src="" alt="Icon" />
          <p>temp</p>
          <h4>Hour</h4>
        </div>
        <div className="eachForecastContainer">
          <img src="" alt="Icon" />
          <p>temp</p>
          <h4>Hour</h4>
        </div>
        <div className="eachForecastContainer">
          <img src="" alt="Icon" />
          <p>temp</p>
          <h4>Hour</h4>
        </div>
        <div className="eachForecastContainer">
          <img src="" alt="Icon" />
          <p>temp</p>
          <h4>Hour</h4>
        </div>
        <div className="eachForecastContainer">
          <img src="" alt="Icon" />
          <p>temp</p>
          <h4>Hour</h4>
        </div>
      </div>
    </section>
  );
};

export default DayForecast;
