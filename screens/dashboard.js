import React, { useContext } from "react";
import { View, Text, FlatList, Button, TouchableOpacity } from "react-native";
import { TransactionContext } from "../context/transaction";

export default function DashboardScreen({ navigation }) {
  const { transactions } = useContext(TransactionContext);

  return (
    <View style={{ flex: 1, padding:10}}>
      <Button title="Adding New Transaction" onPress={() => navigation.navigate("AddTransaction")} />
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("TransactionDetail", { transaction: item })}>
            <View style={{ padding: 8, borderBottomWidth: 0.5 }}>
              <Text style={{ fontSize: 14, fontWeight: "bold" }}>{item.category}- ${item.amount}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <Button title="Log-out" color="red" onPress={() => navigation.replace("Login")} />
    </View>
  );
}
