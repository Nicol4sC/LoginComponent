import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "../styles/StyleSheet";

export default function LoginButton() {
  pressButton = () => {
    alert("Você está logado!");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ marginHorizontal: 30, height: 80, backgroundColor: "black", justifyContent: "center", alignItems: "center", borderRadius: 10, width: 200 }}
        onPress={pressButton}
        activeOpacity={0.5}
      >
        <Text style={{ color: "white", fontSize: 20}}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}
