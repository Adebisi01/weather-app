import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";

export default function LocationButton({
  text,
  lat,
  lon,
  currentLocation,
  setCurrentLocation,
}: {
  text: string;
  lat: number;
  lon: number;
  currentLocation: {
    lat: number;
    lon: number;
  };
  setCurrentLocation: React.Dispatch<
    React.SetStateAction<{
      lat: number;
      lon: number;
    }>
  >;
}) {
  return (
    <Pressable
      style={
        currentLocation?.lat === lat && currentLocation?.lon === lon
          ? styles.button
          : styles.unSelectedButton
      }
      onPress={() => {
        setCurrentLocation({ lat, lon });
      }}
    >
      <Text style={styles.text}>{text} </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#1d2488",
    color: "#fff",
    padding: 10,
    borderRadius: 20,
  },
  unSelectedButton: {
    borderColor: "#1d2488",

    color: "#fff",
    padding: 10,
    borderRadius: 20,
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
});
