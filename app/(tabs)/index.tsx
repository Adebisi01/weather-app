import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import LocationButton from "@/components/LocationButton";
import { SafeAreaView } from "react-native-safe-area-context";
import CurrentWeatherBox from "@/components/CurrentWeatherBox";
import { WeatherData } from "./types/Weather";
import AdditionInfo from "@/components/AdditionInfo";
import { getWeatherData } from "@/api";

export default function HomeScreen() {
  const [currentLocation, setCurrentLocation] = useState<{
    lat: number;
    lon: number;
  }>({ lat: 44.34, lon: 10.99 });
  const [weatherData, setWeatherData] = useState<WeatherData | null>();

  useEffect(() => {
    const callGetWeatherData = async () => {
      const data = await getWeatherData(
        currentLocation.lat,
        currentLocation.lon
      );
      setWeatherData(data);
    };
    callGetWeatherData();
  }, [currentLocation]);

  const LOCATIONS = [
    {
      lat: 6.5244,
      lon: 3.3792,
      text: "Lagos",
      setCurrentLocation: setCurrentLocation,
    },
    {
      lat: 9.0563,
      lon: 7.4985,
      text: "Abuja",
      setCurrentLocation: setCurrentLocation,
    },
    {
      lat: 4.8472,
      lon: 6.9746,
      text: "Port-Harcort",
      setCurrentLocation: setCurrentLocation,
    },
  ];
  return (
    <SafeAreaView>
      <ScrollView style={styles.screenWrapper}>
        <CurrentWeatherBox
          weather={weatherData?.weather[0].main.toString()!}
          temp={weatherData?.main.temp.toString()!}
        />
        {/* <View>
          <Text>Weather Forecast</Text>
          <View>
            <ForeCastBox lat={currentLocation.lat} lon={currentLocation.lon} />
          </View>
        </View> */}

        <View>
          <Text style={styles.additionalInfoText}>Additional Information</Text>

          <View style={styles.additionInfoContainer}>
            <AdditionInfo
              title="Wind Speed"
              value={weatherData?.wind.speed.toString()!}
            />
            <AdditionInfo
              title="Pressure"
              value={weatherData?.main.pressure.toString()!}
            />
            <AdditionInfo
              title="Humidity"
              value={weatherData?.main.humidity.toString()!}
            />
          </View>
          <View style={styles.buttonContainer}>
            {LOCATIONS.map((location) => (
              <LocationButton
                currentLocation={currentLocation}
                key={location.text}
                lat={location.lat}
                lon={location.lon}
                text={location.text}
                setCurrentLocation={location.setCurrentLocation}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenWrapper: {
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: 10,
    paddingVertical: 40,
  },
  additionalInfoText: {
    fontSize: 20,
    color: "#fff",
    paddingVertical: 20,
    fontWeight: "700",
  },
  additionInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
