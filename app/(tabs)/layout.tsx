import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Segitiga */}
      <View style={styles.triangle} />

      {/* Bentuk Pil (NIM) */}
      <View style={styles.pill}>
        <Text style={styles.pillText}>105841104622</Text>
      </View>

      {/* Persegi Panjang (Nama) */}
      <View style={styles.nameBox}>
        <Text style={styles.nameText}>MUH. AKBAR HARUDDIN</Text>
      </View>

      {/* Titik Bulat */}
      <View style={styles.circle} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", // hitam
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 30,
    borderRightWidth: 30,
    borderBottomWidth: 60,
    borderStyle: "solid",
    backgroundColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "orange",
  },
  pill: {
    backgroundColor: "gray", // biru -> abu abu
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 50,
  },
  pillText: {
    color: "lightblue", // putih -> biru muda
    fontSize: 18,
    textAlign: "center",
  },
  nameBox: {
    backgroundColor: "brown", // hijau -> cokelat
    width: 220,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 10,
  },
  nameText: {
    color: "lightblue", // putih -> biru muda
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  circle: {
    width: 20,
    height: 20,
    backgroundColor: "gray", // biru -> abu abu
    borderRadius: 10,
  },
});
