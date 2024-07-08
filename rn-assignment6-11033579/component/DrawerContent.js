// components/DrawerContent.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

const DrawerContent = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView>
        <DrawerItem
          label="Home"
          onPress={() => navigation.navigate('Home')}
        />
        <DrawerItem
          label="Cart"
          onPress={() => navigation.navigate('CartScreen')}
        />
        {/* Add more drawer items as needed */}
      </DrawerContentScrollView>
    </View>
  );
};

export default DrawerContent;
