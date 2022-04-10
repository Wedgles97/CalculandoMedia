import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
	return (
		<View style={styles.container}>
		<Text style={styles.tittle}>Minha Média</Text>
		<TextInput 
			style={styles.input} 
			maxLength={4} 
			keyboardType='decimal-pad' 
			placeholder='Nota 1'
		/>
		<TextInput 
			style={styles.input} 
			maxLength={4} 
			keyboardType='decimal-pad' 
			placeholder='Nota 2'
		/>
		<TextInput 
			style={styles.input} 
			maxLength={4} 
			keyboardType='decimal-pad' 
			placeholder='Nota 3'
		/>

		<TouchableOpacity style={styles.inputBtn} activeOpacity={0.7}>
			<Text style={styles.inputBtnText}>Calcular Média</Text>
		</TouchableOpacity>

		<Text style={styles.TextResult}>Resultado:</Text>


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
		width: 150
	},
	inputBtn: {
		borderRadius: 5,
		backgroundColor: '#e64a19',
		width: 180,
		height: 30,
		marginTop: 10,
		justifyContent: 'center'
	},
	inputBtnText: {
		color: '#fff',
		textAlign: 'center'
	},
	TextResult: {
		fontSize: 18,
		fontWeight: 'bold'
	}
});