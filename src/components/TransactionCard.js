import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
    
    const {width, height} = Dimensions.get('window')
export default function TransactionCard({
    name,
    type,
    amount,
    date,
    imageSource,
}) {
  return (
    <TouchableOpacity>

    <View style={styles.container}>  

        <View style={{backgroundColor: '#ffffff'}}> 
        <Image  
        source={imageSource}
        // style={{ width: "100%", aspectRatio: 1/1 }}
        style={{width: 65, height: 65, aspectRatio: 1/1}}
        resizeMode='contain' 
        /> 
        </View> 
   
        <View > 
            <Text style={styles.first}>{name}</Text> 
            <Text style={styles.second}>{type}</Text>  
        </View> 
    
        <View>
            <Text style={styles.third}>{amount}</Text>
            <Text style={styles.second}>{date}</Text> 
        </View> 

    </View>
        </TouchableOpacity> 
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '100%',
        maxWidth: width,
        height: height*0.12,
        flexDirection: 'row',
        borderRadius: 20,
        alignItems: 'center',
        paddingHorizontal: 20,
        justifyContent: 'space-between'
    },
    first: {
        fontFamily:'PoppinsBold',
        fontSize: 27
    },
    second:{
        fontFamily: 'PoppinsMedium',
        fontSize: 17
    },
    third:{
        fontFamily: 'PoppinsSemiBold',
        fontSize: 23
    },
})