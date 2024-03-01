import { View, ImageBackground } from "react-native";
import LoginText from "../components/LoginText";
import LoginInput from "../components/LoginInput";
import LoginButton from "../components/LoginButton";
import LoginImage from "../components/LoginImage";
import styles from "../styles/StyleSheet";

export default function Login() {
  return (
    <View style={styles.container}>
      <ImageBackground
       
        style={styles.img}
        source={require("../assets/imagens/emanon.png")}
      >
        {/* Texto */}
        <LoginText />
        {/* Input */}
        <LoginInput />
        {/* Button */}
        <LoginButton />
        {/* Imagem */}
        <LoginImage />
      </ImageBackground>
    </View>
  );
}