import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
		flex: 1,
		backgroundColor: '#e64a19',
		justifyContent: 'center',
		alignItems: 'center',
	},
	image: {
		marginTop: 20,
		width: 150,
		height: 128,
		justifyContent: 'center',
	},
	textTittle: {
		color: '#fff',
		fontSize: 30,
		padding: 0,
		fontWeight: 'bold',
		textTransform: 'uppercase',
	},
	inputBtn: {
		borderRadius: 30,
		backgroundColor: 'white',
		width: 250,
		height: 60,
		marginTop: 350,
		justifyContent: 'center',
	},
	inputBtnText: {
		color: '#000',
		textAlign: 'center',
		fontSize: 30,
		fontWeight: 'bold',
		textTransform: 'uppercase',
	},
});