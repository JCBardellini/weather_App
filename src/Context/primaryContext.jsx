import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const primaryContext = createContext();

const PrimaryProvider = ({ children }) => {
  const weatherApiKey = "df1fd18342690d43086da43326902da5";

  const [weatherData, setWeatherData] = useState();
  const [cityName, setCityName] = useState("Seattle");

  useEffect(() => {
    const dataFromWeatherApi = () => {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${weatherApiKey}`;
      // console.log("API URL:", apiUrl);
      try {
        const data = axios.get(apiUrl).then((res) => {
          const response = res.data;
          // console.log(response);
          setWeatherData(response);
        });
      } catch (error) {
        console.error("error in obtaining the API call" + error);
      }
    };
    dataFromWeatherApi();
  }, [cityName, weatherApiKey]);

  console.log(weatherData);
  return (
    <primaryContext.Provider
      value={{
        cityName,
        setCityName,
        weatherData,
        setWeatherData,
      }}
    >
      {children}
    </primaryContext.Provider>
  );
};

export default PrimaryProvider;
