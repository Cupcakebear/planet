import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {createAppContainer, createBottomTabNavigator} from 'react-navigation'
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Progress() {
    return (
      <View style={styles.container}>
        <Text>progress</Text>
        <StatusBar style="auto" />
      </View>
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