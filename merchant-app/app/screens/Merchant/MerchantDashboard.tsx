import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";

type TabKey = "Payments" | "Transactions" | "Inventory" | "Staff" | "Reports";

const SIDEBAR_ITEMS = [
  { key: "Payments" as TabKey, label: "Payments", emoji: "💳" },
  { key: "Transactions" as TabKey, label: "Transactions", emoji: "📄" },
  { key: "Inventory" as TabKey, label: "Inventory", emoji: "📦" },
  { key: "Staff" as TabKey, label: "Staff", emoji: "👥" },
  { key: "Reports" as TabKey, label: "Reports", emoji: "📊" },
];

// Use a placeholder image for now to avoid require() errors
const LOGO = { uri: "https://via.placeholder.com/64x64.png?text=ABC" };

export default function MerchantDashboard() {
  const [active, setActive] = useState<TabKey>("Payments");

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        {/* Sidebar */}
        <View style={styles.sidebar}>
          <Image source={LOGO} style={styles.logo} />
          <Text style={styles.brand}>ABC Ltd</Text>
          <Text style={styles.small}>Merchant dashboard</Text>
          <View style={styles.divider} />

          {SIDEBAR_ITEMS.map((item) => {
            const selected = item.key === active;
            return (
              <TouchableOpacity
                key={item.key}
                style={[styles.item, selected && styles.itemActive]}
                onPress={() => setActive(item.key)}
              >
                <Text style={[styles.itemEmoji, selected && styles.itemEmojiActive]}>
                  {item.emoji}
                </Text>
                <Text style={[styles.itemLabel, selected && styles.itemLabelActive]}>
                  {item.label}
                </Text>
              </TouchableOpacity>
            );
          })}

          <TouchableOpacity style={styles.logout}>
            <Text style={styles.logoutText}>⤴️ Log out</Text>
          </TouchableOpacity>
        </View>

        {/* Right content */}
        <View style={styles.content}>
          <View style={styles.headerRow}>
            <Text style={styles.headerTitle}>{active}</Text>
            <Text style={styles.headerSubtitle}>Overview and quick actions</Text>
          </View>

          <ScrollView contentContainerStyle={styles.contentScroll}>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Sample Card</Text>
              <Text>Content for {active}</Text>
            </View>
            <View style={{ height: 60 }} />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#4da6ff" },
  container: { flex: 1, flexDirection: "row" },

  // Sidebar
  sidebar: {
    width: 160,
    backgroundColor: "#1776b6",
    paddingTop: 20,
    paddingHorizontal: 12,
    paddingBottom: 16,
  },
  logo: { width: 56, height: 56, resizeMode: "contain", marginBottom: 8 },
  brand: { color: "#fff", fontSize: 16, fontWeight: "700", marginBottom: 2 },
  small: { color: "rgba(255,255,255,0.9)", fontSize: 12, marginBottom: 12 },
  divider: { height: 1, backgroundColor: "rgba(255,255,255,0.12)", marginVertical: 8 },
  item: { flexDirection: "row", alignItems: "center", paddingVertical: 10, paddingHorizontal: 6, borderRadius: 8, marginBottom: 8 },
  itemActive: { backgroundColor: "rgba(0,115,230,0.18)" },
  itemEmoji: { fontSize: 16, width: 28, color: "#e6f2ff" },
  itemEmojiActive: { transform: [{ scale: 1.03 }] },
  itemLabel: { color: "#e6f2ff", fontSize: 14 },
  itemLabelActive: { color: "#fff", fontWeight: "700" },
  logout: { paddingVertical: 10, alignItems: "flex-start", marginTop: 10 },
  logoutText: { color: "#e6f2ff", fontWeight: "600" },

  content: { flex: 1, padding: 22, backgroundColor: "#f3f6fb", borderTopLeftRadius: 18 },
  headerRow: { marginBottom: 12 },
  headerTitle: { fontSize: 28, fontWeight: "700", color: "#0f172a" },
  headerSubtitle: { color: "#6b7280", marginTop: 4 },
  contentScroll: { paddingBottom: 40 },

  card: { backgroundColor: "#fff", borderRadius: 14, padding: 20, marginBottom: 16, elevation: 3 },
  cardTitle: { fontSize: 18, fontWeight: "700", color: "#1776b6" },
});
