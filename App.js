import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Button, StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';

import Journal from './screens/Journal';
import Settings from './screens/Settings';
import Progress from './screens/Progress';
import HomeStackScreen from './screens/HomeStackScreen'
import Details from './screens/Week';
import AddButton from './components/AddButton';

const Tab = createBottomTabNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'ios-compass';
            } else if (route.name === 'Journal') {
              iconName = 'ios-person';
            } else if (route.name === 'Progress') {
              iconName = 'ios-person';
            } else if (route.name === 'Settings') {
              iconName = 'ios-person';
            }


            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name = "Home" component = {HomeStackScreen} />
        <Tab.Screen name = "Journal" component = {Journal} />

        <Tab.Screen name = "Progress" component = {Progress} />
        <Tab.Screen name = "Settings" component = {Settings} />
      </Tab.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
