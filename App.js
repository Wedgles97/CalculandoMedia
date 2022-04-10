import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native';

export default function App() {
	const [n1, setN1] = useState('');
	const [n2, setN2] = useState('');
	const [n3, setN3] = useState('');
	const [total, setTotal] = useState (0);

	const x = parseFloat(total);
	const por = x /3;

	function res() {
		setTotal(Number(n1) + Number(n2) + Number(n3));
		Keyboard.dismiss()
	}

	return (
		<View style={styles.container}>
		<Text style={styles.tittle}>Minha Média</Text>
		
		<TextInput 
			style={styles.input} 
			maxLength={4} 
			keyboardType='decimal-pad' 
			placeholder='Primeira Nota'
			value={n1} onChangeText={(int) => setN1(int)}		
		/>
		<TextInput 
			style={styles.input} 
			maxLength={4} 
			keyboardType='decimal-pad' 
			placeholder='Segunda Nota'
			value={n2} onChangeText={(int) => setN2(int)}	
		/>
		<TextInput 
			style={styles.input} 
			maxLength={4} 
			keyboardType='decimal-pad' 
			placeholder='Terceira Nota'
			value={n3} onChangeText={(int) => setN3(int)}	
		/>

		<TouchableOpacity style={styles.inputBtn} activeOpacity={0.7} onPress={res}>
			<Text style={styles.inputBtnText}>Calcular Média</Text>
		</TouchableOpacity>

		<View style={styles.cardResult}>
			<Text style={styles.TextResult}>Total: {total.toFixed(1)}</Text>
			<Text style={styles.TextResult}>Média: {por.toFixed(1)}</Text>
		</View>

		<StatusBar style="auto"/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	tittle: {
		color: '#e64a19',
		fontSize: 45,
		padding: 10,
		fontWeight: 'bold'
	},
	input: {
		borderBottomWidth: 1,
		textAlign: 'center',
		marginTop: 10,
		width: 250,
		color: '#e64a19'
	},
	inputBtn: {
		borderRadius: 5,
		backgroundColor: '#e64a19',
		width: 250,
		height: 40,
		marginTop: 10,
		justifyContent: 'center'
	},
	inputBtnText: {
		color: '#fff',
		textAlign: 'center'
	},
	TextResult: {
		fontSize: 18,
		fontWeight: 'bold',
		marginTop: 10,
		color: '#fff',
		paddingLeft: 10
	},
	cardResult: {
		marginTop: 10,
		width: 250,
		height: 80,
		backgroundColor: '#e64a19',
		borderRadius: 10
	}
});