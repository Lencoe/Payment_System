// screens/Merchant/TransactionsScreen.tsx
import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const transactions = [
  { id: "1", date: "2025-10-01", amount: "R250.00", status: "Success" },
  { id: "2", date: "2025-10-02", amount: "R150.00", status: "Failed" },
  { id: "3", date: "2025-10-02", amount: "R500.00", status: "Success" },
];

export default function TransactionsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transaction History</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.transaction}>
            {item.date} | {item.amount} | {item.status}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
  transaction: { fontSize: 16, padding: 8, borderBottomWidth: 1, borderColor: "#ccc" },
});
