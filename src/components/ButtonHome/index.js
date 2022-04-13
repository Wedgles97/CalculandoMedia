import React from 'react';
import { View, StyleSheet } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons'

export default function ButtonHome({ focused, size}) {
    return (
        <View style={[styles.container, { backgroundColor: focused ? '#b83b14' : '#e64a19' }]}>
            <MaterialIcons name='home' color={ focused ? '#fff' : '#fff'} size={size}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20   
    }
})