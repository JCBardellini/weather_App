import { useEffect, useState } from "react";
import "./App.css";
import Highlights from "./components/highlights/Highlights";
import SearchInput from "./components/searchInput/searchInput";
import TodayWeather from "./components/todayWeather/TodayWeather";
import axios from "axios";
import Hourly from "./components/hourly/hourly";
import DayForecast from "./components/dayForecast/dayForecast";

function App() {
  const weatherApiKey = "df1fd18342690d43086da43326902da5";
  const [geoLocationData, setGeoLocationData] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("highlights");

  // function that gets the users geoLocation
  const geoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setGeoLocationData({ latitude, longitude });
      });
    } else {
      console.log("No Geolocation Support");
    }
  };

  useEffect(() => {
    geoLocation();
  }, []);

  console.log(geoLocationData);

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
