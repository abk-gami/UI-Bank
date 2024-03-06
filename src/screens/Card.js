import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { carousalData } from '../utils/index'
import CardItem from '../components/CardItem'

const Card = () => {
  return (
    <View style={styles.container}>
      <Text
      style={styles.text}
      >Card</Text>

      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{margin:5}}
      >

      {carousalData.map((stuff) => (
        <CardItem
        key={stuff.id}
        image={stuff.imgUrl}
        price={stuff.price}
        cardType={stuff.cardType}
        cardNumber={stuff.cardNumber}
        backgroundColor={stuff.backgroundColor}
        textColor={stuff.textColor}
        />
      ))}
      </ScrollView>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginBottom: 4,
  },
  text: {
    fontFamily: 'PoppinsBold',
    fontSize: 34,
    marginBottom: 4,
    color: 'white',
    paddingHorizontal: 10,
  }
})