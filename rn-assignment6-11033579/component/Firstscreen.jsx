import { View, Text,FlatList,TouchableHighlight,StyleSheet,Image} from 'react-native'
import React from 'react'
import { useState ,useEffect } from 'react'


const Firstscreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../assets/Menu.png')}/>
      </View>
      <View style={{flex:1,alignSelf:'center'}}>
        <Image source={require('../assets/Logo.png')}/>
      </View>
      <View style={{flexDirection:'row-reverse',marginRight:50}}>
        <Image source={require('../assets/Search.png')}/>
      </View>
      <View style={{flexDirection:'row-reverse',marginRight:20}}>
        <Image source={require('../assets/shoppingBag.png')}/>
      </View>
      
      
    </View>
  )
}

export default Firstscreen
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-between',
        marginLeft:20,
        marginBottom:70,
        alignContent:'space-between'
    }
})