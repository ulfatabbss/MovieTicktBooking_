import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import TicketScreen from './TicketScreen';
import UserAccountScreen from './UserAccountScreen';
import {SafeAreaView} from 'react-native-safe-area-context';
import Color from '../utilities/color';
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveBackgroundColor: 'black',
          tabBarInactiveBackgroundColor: 'black',
          tabBarActiveTintColor: 'white',
          tabBarStyle: {
            height: 60,
            width:'100%',
            backgroundColor: 'red',
            alignItems: 'center',paddingBottom:0
          },
        }}>
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => (
                <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: focused ? 60 : null,
                  width: 60,

                  backgroundColor: focused ? Color.orange : 'black',
                  borderRadius: 90,
                }}>
                <Image
                  style={{height: 30, width: 30, alignSelf: 'center'}}
                  resizeMode="contain"
                  source={require('../assets/homePageimg/b1.png')}></Image>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{
            tabBarIcon: ({focused}) => (
                <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: focused ? 60 : 50,
                  width: focused ? 60 : 50,
                  backgroundColor: focused ? Color.orange : 'black',
                  borderRadius: focused?30:null,
                }}>
                <Image
                  style={{height: 30, width: 30, alignSelf: 'center'}}
                  resizeMode="contain"
                  source={require('../assets/homePageimg/b2.png')}></Image>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="TicketScreen"
          component={TicketScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: focused ? 60 : null,
                  width: 60,

                  backgroundColor: focused ? Color.orange : 'black',
                  borderRadius: 90,
                }}>
                <Image
                  style={{height: 30, width: 30, alignSelf: 'center'}}
                  resizeMode="contain"
                  source={require('../assets/homePageimg/b3.png')}></Image>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="UserAccountScreen"
          component={UserAccountScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: focused ? 60 : null,
                  width: 60,

                  backgroundColor: focused ? Color.orange : 'black',
                  borderRadius: 90,
                }}>
                <Image
                  style={{height: 30, width: 30, alignSelf: 'center'}}
                  resizeMode="contain"
                  source={require('../assets/homePageimg/b4.png')}></Image>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default Tabs;

const styles = StyleSheet.create({});
