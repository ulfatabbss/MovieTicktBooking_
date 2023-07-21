import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from './src/screens/HomeScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MovieDetailsScreen from './src/screens/MovieDetailsScreen';
import SearchScreen from './src/screens/SearchScreen';
import TicketBookingScreen from './src/screens/TicketBookingScreen';
import TicketScreen from './src/screens/TicketScreen';
import UserAccountScreen from './src/screens/UserAccountScreen';
import Tabs from './src/screens/Tabs';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
   
    
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="MovieDetailsScreen" component={MovieDetailsScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="TicketBookingScreen" component={TicketBookingScreen} />
      <Stack.Screen name="TicketScreen" component={TicketScreen} />
      <Stack.Screen name="UserAccountScreen" component={UserAccountScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})