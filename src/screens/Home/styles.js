import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
		flex: 1,
		backgroundColor: '#e64a19',
		justifyContent: 'center',
		alignItems: 'center',
	},
	image: {
		marginTop: 10,
		width: 180,
		height: 180,
		top: '15%'
	},
	textTittle: {
		color: '#fff',
		fontSize: 30,
		padding: 0,
		marginTop: 10,
		fontWeight: 'bold',
		textTransform: 'uppercase',
	},
	inputBtn: {
		borderRadius: 30,
		backgroundColor: 'white',
		width: 250,
		height: 60,
		marginTop: 250,
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