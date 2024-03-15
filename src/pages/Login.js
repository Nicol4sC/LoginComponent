import { View, ImageBackground } from "react-native";
import LoginText from "../components/LoginText";
import LoginInput from "../components/LoginInput";
import LoginButton from "../components/LoginButton";
import LoginImage from "../components/LoginImage";
import styles from "../styles/StyleSheet";
import LoginImageBackground from "../components/LoginImageBackground";

export default function Login() {

  const fundo = {uri :'https://images5.alphacoders.com/913/913418.jpg'}
  return (
    <View style={styles.container}>
      <LoginImageBackground source={fundo}> 
        
        {/* Texto */}
        <LoginText />
        {/* Input */}
        <LoginInput />
        {/* Button */}
        <LoginButton />
      </LoginImageBackground>
    </View>
  );
}