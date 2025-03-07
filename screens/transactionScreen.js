import React, { useState, useContext } from "react";
import { View, TextInput, Button, Alert } from "react-native";
import { TransactionContext } from "../context/transaction";

export default function AddTransactionScreen({ navigation }) {
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const { addTransaction } = useContext(TransactionContext);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const storeData = () => {
    if (!description || !amount) {
      Alert.alert("All fields are required !");
      return;
    }
    addTransaction({ description, amount: parseFloat(amount), location, type, category, date});
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput placeholder="Enter Category" onChangeText={setCategory} style={{ borderBottomWidth: 1, marginBottom: 15 }} />
      <TextInput placeholder="Enter Description" onChangeText={setDescription} style={{ borderBottomWidth: 1, marginBottom: 15 }} />
      <TextInput placeholder="Enter Amount" keyboardType="numeric" onChangeText={setAmount} style={{ borderBottomWidth: 1, marginBottom: 15 }} />
      <TextInput placeholder="Enter Location" onChangeText={setLocation} style={{ borderBottomWidth: 1, marginBottom: 15 }} />
      <TextInput placeholder="Enter Transaction Type" onChangeText={setType} style={{ borderBottomWidth: 1, marginBottom: 15 }} />
      <TextInput placeholder="yyyy-mm-dd" onChangeText={setDate} style={{ borderBottomWidth: 1, marginBottom: 15 }} />
      <Button title="Add" onPress={storeData}/>
    </View>
  );
}