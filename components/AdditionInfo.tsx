import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function AdditionInfo({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    gap: 4,
    borderWidth: 2,

    borderColor: "#1d2488",
  },
  title: {
    color: "#fff",
    fontWeight: "300",
    fontSize: 15,
  },
  value: { color: "#fff", fontWeight: "700", fontSize: 20 },
});
