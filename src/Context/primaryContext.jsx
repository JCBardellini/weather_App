import React, { createContext, useEffect, useState } from "react";

export const primaryContext = createContext();

const PrimaryProvider = ({ children }) => {
  const weatherApiKey = "df1fd18342690d43086da43326902da5";

  const [weatherData, setWeatherData] = useState();
  const [cityName, setCityName] = useState("");

  useEffect(() => {}, []);
  console.log("hello world");
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
