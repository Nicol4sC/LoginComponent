import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, }}>Login</Text>
            <TextInput style={{ height: 70, width: 300, border: 'solid', borderWidth: 1, borderColor: 'white', margin: '10px', color: 'white' }}
                placeholder='email'
                inputMode='email'
                color='white'
            />

            <TextInput style={{ height: 70, width: 300, border: 'solid', borderWidth: 1, borderColor: 'white', margin: '10px', color: 'white'}}
                placeholder='senha'
                inputMode='none'
                secureTextEntry={true}
                color='white'
            />
            <Button style={styles.btn}
                onPress={click}
                title="Entrar"
                color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
