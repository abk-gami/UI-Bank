import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { transactionData } from '../utils'
import TransactionCard from '../components/TransactionCard'
       
const Transactions = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Last Transactions</Text>


      <FlatList
      // horizontal
      data={transactionData}
      keyExtractor={(item) => item.id}
      initialNumToRender={20}
      contentContainerStyle={{paddingBottom: 100}}
      removeClippedSubviews={false}
      height={400}
      renderItem={({item})=><TransactionCard {...item} />}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={{marginBottom: 10}}/>}
      />
    </View>
  )
}
 
export default Transactions

const styles = StyleSheet.create({
  header: {
    fontSize: 34,
    fontFamily: 'PoppinsBold',
    color: 'white'
  },
  container: {
    padding: 10
  }
})
