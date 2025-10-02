// navigation/MerchantStack.tsx
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MerchantDashboard from "@screens/Merchant/MerchantDashboard";
import PaymentsScreen from "@screens/Merchant/PaymentsScreen";
import TransactionsScreen from "@screens/Merchant/TransactionsScreen";
import InventoryScreen from "@screens/Merchant/InventoryScreen";
import StaffScreen from "@screens/Merchant/StaffScreen";
import ReportsScreen from "@screens/Merchant/ReportsScreen";

const Stack =createNativeStackNavigator();

export default function MerchantStack() {
  return (
    <Stack.Navigator initialRouteName="MerchantDashboard">
      <Stack.Screen name="MerchantDashboard" component={MerchantDashboard} options={{ title: "Dashboard" }} />
      <Stack.Screen name="Payments" component={PaymentsScreen} />
      <Stack.Screen name="Transactions" component={TransactionsScreen} />
      <Stack.Screen name="Inventory" component={InventoryScreen} />
      <Stack.Screen name="Staff" component={StaffScreen} />
      <Stack.Screen name="Reports" component={ReportsScreen} />
    </Stack.Navigator>
  );
}
