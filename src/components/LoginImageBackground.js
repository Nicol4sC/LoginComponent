import react from "react";
import { ImageBackground } from "react-native";
import styles from "../styles/StyleSheet";

export default function LoginImageBackground({source, children}) {
  return(
    <ImageBackground source= {source} style={styles.ImageBackground}>
      {children}
    </ImageBackground>
  );
}