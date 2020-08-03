import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function AddButton(){
    return(
        <View>
            <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#fff"    
            />
        </View>
    );
}