import { View, TextInput } from "react-native";
import styles from "../styles/StyleSheet";

export default function LoginInput({placeholder, secureTextEntry}) {
  return (
    <View style={styles.container}>
            <TextInput style={{ height: 100, width: 500, border: 'solid', borderWidth: 1, borderColor: 'white', margin: '10px', color: 'white' }}
                placeholder='email'
                inputMode='email'
                color='white'
            />

       <TextInput style={{ height: 100, width: 500, border: 'solid', borderWidth: 1, borderColor: 'white', margin: '10px', color: 'white'}}
       placeholder='senha'
       inputMode='none'
       secureTextEntry={true}
       color='white'
   />
    </View>
  );
}