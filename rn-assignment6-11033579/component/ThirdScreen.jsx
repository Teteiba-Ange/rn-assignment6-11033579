import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

const ThirdScreen = () => {
  const handlePress = () => {
    // Handle button press logic here
    console.log('Checked out');
  };

  return (
    <View>
      <View >
        <Text style={{fontWeight:'200'}}>EST. TOTAL</Text>
      </View>
      <View style={{flexDirection:'row-reverse'}}>
        <Text style={{color:'brown'}}>$240</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={handlePress}
      >
        <Image
          source={require('../assets/shoppingBag.png')}
          style={styles.buttonImage}
        />
        <Text style={styles.buttonText}>CHECKOUT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    justifyContent:'center'
  },
  buttonImage: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: 'white',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ThirdScreen;




