import React from "react";
import { ScrollView } from "react-native";
import AverageCalculator from "../../components/AverageCalculator";
import CheckIntervals from "../../components/CheckIntervals";

import { styles } from "./style";

export default function New() {
	return (
		<ScrollView 
			style={styles.container} 
			contentContainerStyle={{ 
				justifyContent: 'center', 
				alignItems: 'center', 
				paddingTop: 20, 
				paddingBottom: 40 
			}}
		>
		<AverageCalculator />

		<CheckIntervals />
		</ScrollView>
	);
}