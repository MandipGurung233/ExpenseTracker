import React from "react";
import { View, Text } from "react-native";

export default function TransactionDetailScreen({ route }) {
  const { transaction } = route.params;

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Description: {transaction.description}</Text>
      <Text>Amount: ${transaction.amount}</Text>
      <Text>Location: {transaction.location}</Text>
      <Text>Transaction type: {transaction.type}</Text>
      <Text>Category: {transaction.category}</Text>
    </View>
  );
}