// CartScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

 const CartScreen = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('cart').then((cartItems) => {
      if (cartItems) {
        setCart(JSON.parse(cartItems));
      }
    });
  }, []);

  const handleRemoveFromCart = (product) => {
    const newCart = cart.filter((item) => item.id!== product.id);
    setCart(newCart);
    AsyncStorage.setItem('cart', JSON.stringify(newCart));
  };

  return (
    <View>
      <FlatList
        data={cart}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
            <TouchableOpacity onPress={() => handleRemoveFromCart(item)}>
              <Text>Remove from Cart</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default CartScreen;