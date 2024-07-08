// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './Screens/HomeScreen';
import ProductDetailScreen from './Screens/ProductDetailScreen';
import CartScreen from './Screens/CartScreen';
import DrawerContent from './components/DrawerContent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="HomeStack" component={HomeStack} />
        <Drawer.Screen name="CartScreen" component={CartScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;



