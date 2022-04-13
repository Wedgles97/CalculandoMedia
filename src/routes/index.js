import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Entypo, MaterialIcons, Feather } from '@expo/vector-icons';


import Home from '../screens/Home';
import New from '../screens/New';
import Profile from '../screens/Profile';
import Search from '../screens/Search';
import Notification from '../screens/Notification';

import ButtonHome from '../components/ButtonHome';

const { Navigator, Screen } = createBottomTabNavigator();

export default function Routes() {
    return (
		<NavigationContainer>
			<Navigator
				screenOptions={{
					headerShown: false,
					tabBarStyle: {
					backgroundColor: '##fff',
					borderTopColor: 'transparent',
					},
					tabBarActiveTintColor: '#e64a19',
				}}
       		 >
			<Screen
				name="Novo"
				component={New}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Entypo name="plus" size={size} color={color} />
					),
				}}
			/>
			<Screen
				name="Pesquisar"
				component={Search}
				options={{
				tabBarIcon: ({ color, size }) => (
					<Feather name="search" size={size} color={color} />
				),
				}}
			/>
			<Screen
				name="Inicio"
				component={Home}
				options={{
				tabBarLabel: '',
				tabBarIcon: ({ focused, color, size }) => (
					<ButtonHome size={size} color={color} focused={focused}/>
              	),
            	}}
          	/>

			<Screen
				name="Notificação"
				component={Notification}
				options={{
				tabBarIcon: ({ color, size }) => (
					<Entypo name="notification" size={size} color={color} />
				),
				}}
			/>
			<Screen
				name="Perfil"
				component={Profile}
				options={{
				tabBarIcon: ({ color, size }) => (
					<Feather name="user" size={size} color={color} />
				),
				}}
			/>
        	</Navigator>
      	</NavigationContainer>
    );
}
