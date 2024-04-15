import React, { useContext } from "react";
import Wind from "../../assets/icons/wind.png";
import Sunrise from "../../assets/icons/sunrise.png";
import Sunset from "../../assets/icons/sunset.png";
import Humidity from "../../assets/icons/humidity.png";
import Pressure from "../../assets/icons/pressure.png";
import Visibility from "../../assets/icons/visibility.png";
import FeelsLike from "../../assets/icons/thermometer.png";
import "./hightlights.css";
import { primaryContext } from "../../Context/primaryContext";

const Highlights = () => {
  const { weatherData, airPollutionData } = useContext(primaryContext);
  // console.log(weatherData);
  // console.log(airPollutionData);
  const pollutionData = airPollutionData.list[0].components;
  // console.log(pollutionData);

  const meterToMiles = 0.000621371;
  const visibility = weatherData.visibility * meterToMiles;
  const sunrise = weatherData.sys.sunrise;
  const sunset = weatherData.sys.sunset;
  const inHg = 0.02953;
  const pressure = weatherData.main.pressure * inHg;
  const feelsLike = Math.round(
    ((weatherData.main.feels_like - 273.15) * 9) / 5 + 32
  );

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
    <section className="overallContainerHighlights">
      <h3>Today's Highlight</h3>
      <div className="highlightsContainer">
        <div className="pollutantsContainer">
          <h4>Pollutants</h4>
          <div className="eachPollutantContainer">
            <img src={Wind} alt="wind Icon" className="icons" />

            <ul>
              <li>O3: {pollutionData.o3}</li>
              <li>SO2: {pollutionData.so2}</li>
              <li>NO2: {pollutionData.no2}</li>
              <li>CO: {pollutionData.co}</li>
            </ul>
          </div>
        </div>
        <div className="timeHighlightContainer">
          <h4>Sunrise & Sunset</h4>
          <div className="time">
            <div className="timeHighlight">
              <img src={Sunrise} alt="Sunrise Icon" className="icons" />
              <p>{convertTimestamp(sunrise)}</p>
            </div>
            <div className="timeHighlight">
              <img src={Sunset} alt="Sunset Icon" className="icons" />
              <p>{convertTimestamp(sunset)}</p>
            </div>
          </div>
        </div>
        <div className="eachHighlightContainer">
          <h4>Humidity</h4>
          <div className="eachHighlight">
            <img src={Humidity} alt="Humidity Icon" className="icons" />
            <p>{weatherData.main.humidity}%</p>
          </div>
        </div>
        <div className="eachHighlightContainer">
          <h4>Pressure</h4>
          <div className="eachHighlight">
            <img src={Pressure} alt="Pressure Icon" className="icons" />
            <p>{pressure.toFixed(2)} inHg</p>
          </div>
        </div>
        <div className="eachHighlightContainer">
          <h4>Visibility</h4>
          <div className="eachHighlight">
            <img src={Visibility} alt="Visibility Icon" className="icons" />
            <p>{visibility.toFixed(2)} mi</p>
          </div>
        </div>
        <div className="eachHighlightContainer">
          <h4>Feels Like</h4>
          <div className="eachHighlight">
            <img src={FeelsLike} alt="Temperature Icon" className="icons" />
            <p>{feelsLike}&deg;</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
