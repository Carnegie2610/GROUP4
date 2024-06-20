import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './Screen/HomeScreen';
import LandingPage from './Screen/landingPage';
import LoginPage from './Screen/LoginPage';
import CreateAccount from './Screen/createAcountPage';
const Stack = createNativeStackNavigator();


function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} /> 
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LoginPage" component={LoginPage} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;