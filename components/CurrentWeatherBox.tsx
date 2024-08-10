import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function CurrentWeatherBox({
  temp,
  weather,
}: {
  temp: string;
  weather: string;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.tempText}>{temp || "0.00°"}F</Text>
      <Text>Icons</Text>
      <Text style={styles.weatherText}>{weather || "Rain"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#1d2488",
    borderRadius: 20,
    paddingVertical: 40,
  },
  tempText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 40,
  },
  weatherText: {
    fontWeight: "300",
    color: "#fff",
    fontSize: 20,
  },
  weatherIcon: {
    color: "#fff",
  },
});
