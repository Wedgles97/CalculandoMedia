import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Entypo, MaterialIcons } from '@expo/vector-icons';

import Home from '../screens/Home';
import Main from '../screens/Main';

const { Navigator, Screen } = createBottomTabNavigator();

export default function Routes() {
    return (
      <NavigationContainer>
        <Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: '#121212',
              borderTopColor: 'transparent',
            },
            tabBarActiveTintColor: '#FFF',
          }}
        >
          <Screen
            name="Inicio"
            component={Home}
            options={{
              tabBarLabel: 'Inicio',
              tabBarIcon: ({ color, size }) => (
                <Entypo name="home" color={color} size={size} />
              ),
            }}
          />

          <Screen
            name="Main"
            component={Main}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="grade" size={size} color={color} />
              ),
            }}
          />
        </Navigator>
      </NavigationContainer>
    );
}
