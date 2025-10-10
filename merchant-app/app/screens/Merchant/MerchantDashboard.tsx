import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

type Feature = {
  key: string;
  label: string;
  icon: React.ReactNode;
  color: string;
  phase: string;
};

const FEATURES: Feature[] = [
  { key: "pos", label: "POS & Inventory", icon: <MaterialCommunityIcons name="cash-register" size={28} color="#fff" />, color: "#1776b6", phase: "Phase 1" },
  { key: "payments", label: "Payments History", icon: <Ionicons name="card" size={28} color="#fff" />, color: "#4da6ff", phase: "Phase 1" },
  { key: "payouts", label: "Payouts", icon: <MaterialCommunityIcons name="bank-transfer" size={28} color="#fff" />, color: "#0099cc", phase: "Phase 1" },
  { key: "staff", label: "Staff Accounts", icon: <Ionicons name="people" size={28} color="#fff" />, color: "#1776b6", phase: "Phase 2" },
  { key: "sales", label: "Sales Analysis", icon: <Ionicons name="bar-chart" size={28} color="#fff" />, color: "#4da6ff", phase: "Phase 2" },
  { key: "invoicing", label: "Invoicing", icon: <MaterialCommunityIcons name="file-document" size={28} color="#fff" />, color: "#0099cc", phase: "Phase 2" },
  { key: "links", label: "Payment Links", icon: <MaterialCommunityIcons name="link-variant" size={28} color="#fff" />, color: "#1776b6", phase: "Phase 3" },
  { key: "shopfront", label: "Shopfront", icon: <MaterialCommunityIcons name="storefront-outline" size={28} color="#fff" />, color: "#4da6ff", phase: "Phase 3" },
];

export default function MerchantDashboard({ navigation }: any) {
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);

  if (selectedFeature) {
    return (
      <SafeAreaView style={styles.safe}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setSelectedFeature(null)}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{selectedFeature.label}</Text>
        </View>

        {/* Detail Card */}
        <ScrollView contentContainerStyle={styles.detailContainer}>
          <View style={styles.detailCard}>
            <Text style={styles.detailTitle}>{selectedFeature.label}</Text>
            <Text style={styles.detailText}>
              This section will display content for {selectedFeature.label}. You can later replace this with actual screens for that feature.
            </Text>
          </View>
        </ScrollView>

        <BottomNav />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.topBar}>
        <Text style={styles.brand}>Vital Core Tech</Text>
        <Image source={{ uri: "https://via.placeholder.com/40x40.png?text=V" }} style={styles.avatar} />
      </View>

      <Text style={styles.dashboardTitle}>Merchant Dashboard</Text>
      <Text style={styles.subtitle}>Manage your business operations easily</Text>

      <FlatList
        data={FEATURES}
        numColumns={2}
        keyExtractor={(item) => item.key}
        contentContainerStyle={styles.grid}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.card, { backgroundColor: item.color }]}
            onPress={() => setSelectedFeature(item)}
          >
            <View style={styles.iconContainer}>{item.icon}</View>
            <Text style={styles.label}>{item.label}</Text>
            <Text style={styles.phase}>{item.phase}</Text>
          </TouchableOpacity>
        )}
      />

      <BottomNav />
    </SafeAreaView>
  );
}

function BottomNav() {
  return (
    <View style={styles.navContainer}>
      <TouchableOpacity>
        <Ionicons name="mail-outline" size={26} color="#fff" />
      </TouchableOpacity>

      <View style={styles.navCenter}>
        <Ionicons name="filter" size={26} color="#1776b6" />
      </View>

      <TouchableOpacity>
        <Ionicons name="person-outline" size={26} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#f3f6fb", paddingHorizontal: 20 },
  topBar: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: 10 },
  brand: { fontSize: 20, fontWeight: "700", color: "#1776b6" },
  avatar: { width: 40, height: 40, borderRadius: 20 },
  dashboardTitle: { fontSize: 26, fontWeight: "700", color: "#0f172a", marginTop: 5 },
  subtitle: { color: "#6b7280", marginBottom: 15 },
  grid: { paddingBottom: 100 },
  card: { flex: 1, margin: 8, borderRadius: 20, paddingVertical: 30, alignItems: "center", justifyContent: "center", elevation: 3 },
  iconContainer: { marginBottom: 10 },
  label: { fontSize: 14, color: "#fff", fontWeight: "700", textAlign: "center" },
  phase: { color: "rgba(255,255,255,0.8)", fontSize: 12, marginTop: 4 },
  header: { backgroundColor: "#1776b6", flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12 },
  headerTitle: { color: "#fff", fontWeight: "700", fontSize: 18, marginLeft: 10 },
  detailContainer: { paddingVertical: 20, paddingBottom: 120 },
  detailCard: { backgroundColor: "#fff", borderRadius: 20, padding: 20, elevation: 4 },
  detailTitle: { fontSize: 22, fontWeight: "700", color: "#1776b6", marginBottom: 10 },
  detailText: { color: "#374151", lineHeight: 20 },
  navContainer: { position: "absolute", bottom: 15, left: 20, right: 20, backgroundColor: "#1776b6", flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 35, paddingVertical: 14, borderRadius: 30, elevation: 8 },
  navCenter: { backgroundColor: "#fff", padding: 10, borderRadius: 30, position: "absolute", alignSelf: "center", bottom: 14 },
});
