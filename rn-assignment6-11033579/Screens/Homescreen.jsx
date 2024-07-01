// HomeScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity,StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Firstscreen from '../component/Firstscreen';
import Secondscreen from '../component/Secondscreen';
const HomeScreen = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Office Wear', price: 120, image: require('../assets/dress1.png') },
    { id: 2, name: 'Black', price:120, image: require('../assets/dress2.png') },
    { id: 3, name: 'Church Wear', price:120, image: require('../assets/dress3.png') },
    { id: 4, name: 'Lamerei', price: 120, image: require('../assets/dress4.png') },
    { id: 5, name: '21WN', price:120, image: require('../assets/dress5.png') },
    { id: 6, name: 'Lopo', price:120, image: require('../assets/dress6.png') },
    { id: 7, name: '21WN', price: 120, image: require('../assets/dress7.png') },
    { id: 8, name: 'Lame', price:120, image: require('../assets/dress3.png') }
  
    //...
  ]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('cart').then((cartItems) => {
      if (cartItems) {
        setCart(JSON.parse(cartItems));
      }
    });
  }, []);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    AsyncStorage.setItem('cart', JSON.stringify(newCart));
  };

  return (
    <View style={styles.container}>
        <Firstscreen/>
        <Secondscreen/>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View >
            <Image source={item.image} style={{ width: 100, height: 100 }} />
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
            <TouchableOpacity onPress={() => handleAddToCart(item)}>
              <Text>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;
const styles=StyleSheet.create({
    container:{
        flex:1
    }
})
