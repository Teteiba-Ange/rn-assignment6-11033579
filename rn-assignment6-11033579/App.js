import React from 'react';
import CartScreen from './Screens/CartScreen';  
import { StyleSheet, View } from 'react-native';
import HomeScreen from './Screens/Homescreen';  

const App = () => {
  return (
    <View style={styles.container}>
      <HomeScreen />
      <CartScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
  },
});

