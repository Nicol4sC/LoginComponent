import { View } from "react-native";
{
  /* Chama a página de Login */
}
import Login from "./src/pages/Login";

import styles from "./src/styles/StyleSheet";

export default function App() {
  return (
    <View style={{flex: 1}}>
        <Login />
      </View>
  );
}