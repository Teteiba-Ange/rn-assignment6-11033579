import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'

const Secondscreen = () => {
  return (
    <View style={{flex:1,marginBottom:20}}>
  
      <View style={{flexDirection:'row-reverse',marginRight:50}}>
        <Image source={require('../assets/Listview.png')}/>
      </View>
      <View style={{flexDirection:'row-reverse',marginRight:20}}>
        <Image source={require('../assets/Filter.png')}/>
      </View>
    </View>
  )
}

export default Secondscreen