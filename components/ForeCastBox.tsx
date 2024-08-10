import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { WeatherData } from "@/app/(tabs)/types/Weather";
import { ForecastWeatherData } from "@/app/(tabs)/types/Forecast";

const ForeCastBox = ({ lat, lon }: { lat: number; lon: number }) => {
  const [forecastData, setForecastData] =
    useState<ForecastWeatherData | null>();

  const getForecastData = async () => {
    try {
      const weatherData: AxiosResponse<ForecastWeatherData> = await axios.get(
        `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${lon}&appid=${process.env.EXPO_PUBLIC_API_KEY}`
      );
      setForecastData(weatherData.data);
    } catch (error) {
      console.log(" Cannot get data:", error);
    }
  };

  // console.log(weatherData);

  useEffect(() => {
    getForecastData();
  }, [lat, lon]);
  return (
    <View style={styles.container}>
      {forecastData?.list.map((forecast) => (
        <View>
          <Text style={styles.timeText}>
            {new Date(forecast.dt_txt).getHours()}
          </Text>
          <Text style={styles.weatherText}>{forecast.weather[0].main}</Text>
          <Text style={styles.tempText}>{forecast.main.temp}</Text>
        </View>
      ))}
    </View>
  );
};

export default ForeCastBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  timeText: { color: "#fff" },
  weatherText: { color: "#fff" },
  tempText: { color: "#fff" },
});
