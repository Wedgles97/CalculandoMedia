import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%'
	},
	title: {
		color: '#000',
		fontSize: 16,
		padding: 10,
		fontWeight: '700',
	},
	field: {
		width: '60%',
		marginBottom: 10,
	},
	label: {
		color: '#000',
		fontSize: 14,
		fontWeight: '700',
	},
	input: {
		backgroundColor: '#fff',
		borderRadius: 20,
		minHeight: 35,
		paddingLeft: 20,
		marginTop: 10,
		width: '100%',
		color: '#e64a19',
	},
	inputBtn: {
		borderRadius: 20,
		backgroundColor: '#F2AF29',
		width: 250,
		height: 40,
		marginTop: 10,
		justifyContent: 'center',
	},
	inputBtnText: {
		color: '#fff',
		textAlign: 'center',
		fontSize: 16,
		fontWeight: '700',
	},
	TextResult: {
		fontSize: 18,
		fontWeight: 'bold',
		marginTop: 10,
		color: '#fff',
		paddingLeft: 10,
	},
	cardResult: {
		marginTop: 10,
		width: 250,
		height: 80,
		backgroundColor: '#e64a19',
		borderRadius: 10,
	},
	result: {
		fontSize: 18,
		fontWeight: 'bold',
		marginTop: 10,
		color: '#000',
		paddingLeft: 10,
	},
});
