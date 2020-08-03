import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View ,Button} from 'react-native';
import Week from './Week';
import Today from './Today'
import Month from './Month';

import { NavigationContainer } from '@react-navigation/native';


const HomeStack = createStackNavigator();


export default function HomeStackScreen() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="Today" component={Today}/>        
        <HomeStack.Screen name="Week" component={Week} />
        <HomeStack.Screen name="Month" component={Month}/>
      </HomeStack.Navigator>
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