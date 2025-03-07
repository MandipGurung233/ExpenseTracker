import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handlinglogin = () => {
    if (username === "admin" && password === "admin") {
      navigation.replace("Dashboard");
    } else {
      Alert.alert("Invalid login details");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TrackTheExpense</Text>
      <TextInput placeholder="Enter Username" style={styles.input} value={username} onChangeText={setUsername} />
      <TextInput placeholder="Enter Password" style={styles.input} value={password} secureTextEntry onChangeText={setPassword} />
      <Button title="Log-In" onPress={handlinglogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 10 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20, color:'red'},
  input: { width: "100%", padding: 10, borderBottomWidth: 1, marginBottom: 10},
});