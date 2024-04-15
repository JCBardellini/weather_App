import { useContext, useEffect, useState } from "react";
import "./App.css";
import Highlights from "./components/highlights/Highlights";
import SearchInput from "./components/searchInput/searchInput";
import TodayWeather from "./components/todayWeather/TodayWeather";
import axios from "axios";
import Hourly from "./components/hourly/hourly";
import DayForecast from "./components/dayForecast/dayForecast";
import { primaryContext } from "./Context/primaryContext";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("highlights");

  const { weatherData, airPollutionData } = useContext(primaryContext);
  // catching the undefined to return nothing  until data is collected
  if (!weatherData || !airPollutionData) return <></>;
  return (
    <>
      <div>
        <SearchInput />
        <div id="weatherSection">
          <TodayWeather />
          <div className="categoriesContainer">
            <div className="categories">
              <p onClick={() => setSelectedCategory("highlights")}>
                Highlights
              </p>
              <p onClick={() => setSelectedCategory("hourly")}>Hourly</p>
              <p onClick={() => setSelectedCategory("dayForecast")}>
                Day Forecast
              </p>
            </div>
            {/* Conditional rendering based on selectedCategory */}
            {selectedCategory === "highlights" && <Highlights />}
            {selectedCategory === "hourly" && <Hourly />}
            {selectedCategory === "dayForecast" && <DayForecast />}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
