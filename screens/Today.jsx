import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View ,Button, Alert} from 'react-native';
import HomeStackScreen from './HomeStackScreen';
import Week from './Week';
import Month from './Month';
import addButton from '../components/AddButton'

export default function Today({ navigation}) {

    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <Button onPress={() => Alert.alert("How much would you like to add")} title="+" />
        ),
      });
    });
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>  
        <Text>Home screen</Text>
        <Button
          title="Week View"
          onPress={() => navigation.navigate(Week)}
        />
        <Button
          title="Month View"
          onPress={() => navigation.navigate(Month)}
        />
      </View>
      );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });