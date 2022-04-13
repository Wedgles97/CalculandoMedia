import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
	Text,
	SafeAreaView,
	TouchableOpacity,
	Image,
} from 'react-native';

import scholar from '../../assets/images/scholar.png';

import { styles } from './styles';

export default function Home() {
	const navigation = useNavigation();
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.textTittle}>Calcule sua Média</Text>

			<Image source={scholar} style={styles.image} />

			<TouchableOpacity 
				style={styles.inputBtn} 
				activeOpacity={0.7}
				onPress={() => {
					navigation.navigate('Novo')
				}}
				
				
			>
				<Text style={styles.inputBtnText}>Lorem</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
}
