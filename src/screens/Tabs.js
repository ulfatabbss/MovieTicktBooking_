import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import MovieDetailsScreen from './MovieDetailsScreen';
import SearchScreen from './SearchScreen';
import TicketScreen from './TicketScreen';
import UserAccountScreen from './UserAccountScreen';
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown:false,tabBarActiveBackgroundColor:'black',tabBarInactiveBackgroundColor:'black',
    tabBarActiveTintColor:'white',
    tabBarShowLabel:false,tabBarStyle:{}}}>
    <Tab.Screen name="HomeScreen" component={HomeScreen} options={{tabBarIcon:({focused})=>(
        <View
        style={{alignItems:'center',
        justifyContent:'center',
        height:focused?60:null,
        width:60,
        
        
        backgroundColor:focused?'rgba(255, 85, 36, 1)':'black',
        borderRadius:90}}>
            <Image
            style={{height:30,width:30,alignSelf:'center'}}
            resizeMode='conatin'
            source={require('../assets/homePageimg/b1.png')}>

            </Image>

        </View>
    )}} />
     <Tab.Screen name="SearchScreen" component={SearchScreen} options={{tabBarIcon:({focused})=>(
        <View
        style={{alignItems:'center',
        justifyContent:'center',
        height:focused?60:null,
        width:60,
        
        
        backgroundColor:focused?'rgba(255, 85, 36, 1)':'black',
        borderRadius:90}}>
            <Image
            style={{height:30,width:30,alignSelf:'center'}}
            resizeMode='conatin'
            source={require('../assets/homePageimg/b2.png')}>

            </Image>

        </View>
    )}} />
     <Tab.Screen name="TicketScreen" component={TicketScreen} options={{tabBarIcon:({focused})=>(
        <View
        style={{alignItems:'center',
        justifyContent:'center',
        height:focused?60:null,
        width:60,
        
        
        backgroundColor:focused?'rgba(255, 85, 36, 1)':'black',
        borderRadius:90}}>
            <Image
            style={{height:30,width:30,alignSelf:'center'}}
            resizeMode='conatin'
            source={require('../assets/homePageimg/b3.png')}>

            </Image>

        </View>
    )}} />
     <Tab.Screen name="UserAccountScreen" component={UserAccountScreen} options={{tabBarIcon:({focused})=>(
        <View
        style={{alignItems:'center',
        justifyContent:'center',
        height:focused?60:null,
        width:60,
        
        
        backgroundColor:focused?'rgba(255, 85, 36, 1)':'black',
        borderRadius:90}}>
            <Image
            style={{height:30,width:30,alignSelf:'center'}}
            resizeMode='conatin'
            source={require('../assets/homePageimg/b4.png')}>

            </Image>

        </View>
    )}} />

    
  </Tab.Navigator>
  )
}

export default Tabs

const styles = StyleSheet.create({})