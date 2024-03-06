import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'; 
import {BellIcon} from 'react-native-heroicons/outline'
                   
const Header = () => { 
  return (
    <View style={styles.container}>
       
      <View> 
        <Image  
        source={require('../../assets/images/avatar.jpg')} 
        style={styles.image}
        // resizeMode='contain'
        /> 
      </View>
      <View>    
        <BellIcon size={30} strokeWidth={2} color={'#ffffff'}/>
      </View>
    </View>
  ) 
}

export default Header 
 
const styles = StyleSheet.create({
  container: { 
    // backgroundColor: "#0000001b",
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'space-between', 
    paddingHorizontal: 10, 
    marginRight: 10
  },
  image: {
    width: 45,
    height: 45,
    borderWidth: 1.5,
    borderRadius: 50,
    borderColor: 'white'
  }
})
