import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/login";
import DashboardScreen from "../screens/dashboard";
import TransactionDetailScreen from "../screens/transactionDetail";
import AddTransactionScreen from "../screens/transactionScreen";

const Stack = createStackNavigator();
export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="TransactionDetail" component={TransactionDetailScreen} />
      <Stack.Screen name="AddTransaction" component={AddTransactionScreen} />
    </Stack.Navigator>
  );
}