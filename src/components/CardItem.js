import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native'
import React from 'react'

    const {width, height} = Dimensions.get('window')

export default function CardItem({image, price, cardType, cardNumber,backgroundColor}) {
  return (
    <TouchableOpacity style={styles.buttons}>
    <View style={[styles.view, {backgroundColor: backgroundColor,}] }>
        <Image 
        source={image}
        style={styles.image}
        resizeMode='contain'
        />
        <View>
            <Text style={styles.cardNumber}>{cardNumber}</Text>
        </View>
        <View>
            <Text style={styles.price}>{price}</Text>
        </View>
        <View>
            <Text style={styles.cardType}>{cardType}</Text>
        </View>
    </View>
      {/* <Text >CardItem</Text> */}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    buttons:{
        marginRight: 4
    },
    view:{
        paddingVertical: 20,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        width: width * 0.45,
        height: height * 0.3,
        borderRadius: 18
    },
    image: {
        width: 65,
        height: 65,
    },
    cardNumber:{
        fontFamily: 'PoppinsSemiBold',
        color: 'white',
        fontSize: 16
    },
    price:{
        fontFamily: 'PoppinsBold',
        color: '#fff',
        fontSize:28
    },
    cardType: {
        color: 'white',
        fontFamily: 'PoppinsSemiBold'
    }

})