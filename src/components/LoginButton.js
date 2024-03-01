import { View, Button } from "react-native";
import styles from "../styles/StyleSheet";

export default function LoginButton() {
  pressButton = () => {
    alert("Você está logado!");
  };

  return (
    <View style={styles.container}>
      <View style={{ margin: 20, height: 50 }}>
        <Button onPress={pressButton} title="Entrar" color="black" />
      </View>
    </View>
  );
}