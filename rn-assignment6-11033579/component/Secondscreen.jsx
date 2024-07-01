import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'

const Secondscreen = () => {
  return (
    <View>
      <View>
        <Image source={require('../assets/Listview.png')}/>
      </View>
      <View>
        <Image source={require('../assets/Filter.png')}/>
      </View>
    </View>
  )
}

export default Secondscreen