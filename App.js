import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TransactionProvider } from "./context/transaction";
import AppNavigator from "./navigation/AppNavigator";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <TransactionProvider>
      <NavigationContainer>
        <AppNavigator />
        <StatusBar style="auto" />
      </NavigationContainer>
    </TransactionProvider>
  );
}