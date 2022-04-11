import React from 'react';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Home } from './src/Screen/Home';

export default function App() {
	return (
		<SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<StatusBar style="auto"/>
			<Home />
		</SafeAreaView>
	);
}