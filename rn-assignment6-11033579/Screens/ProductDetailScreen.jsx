// screens/ProductDetailScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const ProductDetailScreen = ({ route }) => {
  const { product } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{product.name}</Text>
      <Text>${product.price}</Text>
      <Text>{product.description}</Text>
      {/* Add to cart button */}
      <Button title="Add to Cart" onPress={() => alert('Added to cart!')} />
    </View>
  );
};

export default ProductDetailScreen;
