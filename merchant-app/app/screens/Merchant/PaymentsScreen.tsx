// screens/Merchant/PaymentsScreen.tsx
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function PaymentsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payments</Text>
      <Button title="Tap Card (Simulated)" onPress={() => alert("Card tapped!")} />
      <Button title="Show QR Code" onPress={() => alert("QR Code shown!")} />
      <Button title="Send Payment Link" onPress={() => alert("Link sent!")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
});
