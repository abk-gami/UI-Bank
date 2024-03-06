import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './src/screens/Header';
import Transactions from './src/screens/Transactions';
import Card from './src/screens/Card';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

export default function App() {


  const [fontsLoaded, fontError] = useFonts({   
    PoppinsSemiBold: require('./src/fonts/Poppins-SemiBold.ttf'),
    PoppinsBold: require('./src/fonts/Poppins-Bold.ttf'),   
    PoppinsMedium: require('./src/fonts/Poppins-Medium.ttf')
  });
  
  // const onLayoutRootView = useCallback(async () => { 
  //   if (fontsLoaded || fontError) { 
  //     await SplashScreen.hideAsync();
  //   }  
  // }, [fontsLoaded, fontError]);  
  
  //   (!fontsLoaded) {
  //   return null; 
  // }   
    
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
  
    <View 
    // onLayout={onLayoutRootView}
    >
      <View style={styles.view}>
  
      <Header/>
   
      <Card/> 
   
      <Transactions/>

      </View>  
    </View>
    </SafeAreaView>
  );
}  
       
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a2828',
    padding: 6,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  view: {
    marginVertical: 6
  }
}); 
      