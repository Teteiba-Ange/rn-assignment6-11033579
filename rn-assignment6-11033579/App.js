import React  from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { StyleSheet, Text, View } from 'react-native';
import Homescreen from './Screens/Homescreen';

const  App=()=> {
  return (
    <View style={styles.container}>
      <Homescreen/>
      <NavigationContainer>
        
      </NavigationContainer>
      
    </View>
  );
}
export default  App
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:50
  },
});
