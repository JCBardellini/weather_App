import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const primaryContext = createContext();

const PrimaryProvider = ({ children }) => {
  const weatherApiKey = "df1fd18342690d43086da43326902da5";

  const [weatherData, setWeatherData] = useState();
  const [hourlyData, setHourlyData] = useState();
  const [airPollutionData, setAirPollutionData] = useState();
  const [cityName, setCityName] = useState("Seattle");

  useEffect(() => {
    const dataFromWeatherApi = () => {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${weatherApiKey}`;
      const hourlyUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${weatherApiKey}`;
      try {
        const data = axios.get(apiUrl).then((res) => {
          const response = res.data;
          setWeatherData(response);
        });
        const hourlyData = axios.get(hourlyUrl).then((res) => {
          const hourlyResponse = res.data;
          const hourlyListData = hourlyResponse.list.slice(2, 8);
        });
      } catch (error) {
        console.error("error in obtaining the API call" + error);
      }
    };
    dataFromWeatherApi();
  }, [cityName, weatherApiKey]);

  useEffect(() => {
    if (weatherData) {
      // Only perform this logic when weatherData is available
      const { coord } = weatherData;
      if (coord) {
        const { lon, lat } = coord;
        // console.log(lon, lat);
        const airPollutionUrl = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${weatherApiKey}`;
        try {
          axios.get(airPollutionUrl).then((res) => {
            const airPollutionResponse = res.data;
            // console.log(airPollutionResponse);
            setAirPollutionData(airPollutionResponse);
          });
        } catch (error) {
          console.error("Error in obtaining the air pollution data:", error);
        }
      }
    }
  }, [weatherData, weatherApiKey]);

  // console.log(weatherData);
  return (
    <primaryContext.Provider
      value={{
        cityName,
        setCityName,
        weatherData,
        setWeatherData,
        airPollutionData,
        setAirPollutionData,
        hourlyData,
        setHourlyData,
      }}
    >
      {children}
    </primaryContext.Provider>
  );
};

export default PrimaryProvider;
