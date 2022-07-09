import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Components/Home';
import {
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_700Bold
} from '@expo-google-fonts/josefin-sans';
import { useState } from 'react';
export default function App() {
  let [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_700Bold,
  });
  const [darkMode,setDark] = useState(true);
  return (
    <View style={darkMode ? styles.container : styles.containerLight}>
      <Home darkMode={darkMode} setDark={setDark}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: 'JosefinSans_400Regular',
    backgroundColor: 'hsl(235, 21%, 11%)',
    minHeight: '100vh'
  },
  containerLight: {
    fontFamily: 'JosefinSans_400Regular',
    backgroundColor: 'hsl(0, 0%, 98%)',
    minHeight: '100vh'
  },

});
