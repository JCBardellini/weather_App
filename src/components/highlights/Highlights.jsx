import React from "react";
import Wind from "../../assets/icons/wind.png";
import Sunrise from "../../assets/icons/sunrise.png";
import Sunset from "../../assets/icons/sunset.png";
import Humidity from "../../assets/icons/humidity.png";
import Pressure from "../../assets/icons/pressure.png";
import Visibility from "../../assets/icons/visibility.png";
import FeelsLike from "../../assets/icons/thermometer.png";
import "./hightlights.css";

const Highlights = () => {
  return (
    <section className="overallContainerHighlights">
      <h3>Today's Highlight</h3>
      <div className="highlightsContainer">
        <div className="pollutantsContainer">
          <h4>Pollutants</h4>
          <div className="eachPollutantContainer">
            <img src={Wind} alt="wind Icon" className="icons" />
            <p>Good</p>
            <ul>
              <li>O3: num</li>
              <li>SO2: num</li>
              <li>NO2: num</li>
              <li>CO: num</li>
            </ul>
          </div>
        </div>
        <div className="timeHighlightContainer">
          <h4>Sunrise & Sunset</h4>
          <div className="time">
            <div className="timeHighlight">
              <img src={Sunrise} alt="Sunrise Icon" className="icons" />
              <p>Time</p>
            </div>
            <div className="timeHighlight">
              <img src={Sunset} alt="Sunset Icon" className="icons" />
              <p>Time</p>
            </div>
          </div>
        </div>
        <div className="eachHighlightContainer">
          <h4>Humidity</h4>
          <div className="eachHighlight">
            <img src={Humidity} alt="Humidity Icon" className="icons" />
            <p>88%</p>
          </div>
        </div>
        <div className="eachHighlightContainer">
          <h4>Pressure</h4>
          <div className="eachHighlight">
            <img src={Pressure} alt="Pressure Icon" className="icons" />
            <p>30.03inHg</p>
          </div>
        </div>
        <div className="eachHighlightContainer">
          <h4>Pressure</h4>
          <div className="eachHighlight">
            <img src={Visibility} alt="Visibility Icon" className="icons" />
            <p>30.03inHg</p>
          </div>
        </div>
        <div className="eachHighlightContainer">
          <h4>Feels Like</h4>
          <div className="eachHighlight">
            <img src={FeelsLike} alt="Temperature Icon" className="icons" />
            <p>30.03inHg</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
