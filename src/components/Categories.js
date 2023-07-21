import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { LIGHTER_PRIMARY_10, PRIMARY_COLOR } from "../constants/colors";

const Categories = ({ categories }) => {
	return (
		<ScrollView horizontal showsHorizontalScrollIndicator={false}>
			{categories.map((category) => (
				<View key={category.id} style={styles.categoryItem}>
					<Text style={styles.categoryEmoji}>{category.emoji}</Text>
					<Text style={styles.categoryText}>{category.text}</Text>
				</View>
			))}
		</ScrollView>
	);
};

export default Categories;

const styles = StyleSheet.create({
	categoryItem: {
		// flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		marginRight: 16,
		paddingVertical: 12,
		paddingHorizontal: 6,
		backgroundColor: PRIMARY_COLOR,
		borderRadius: 4,
		width: 80,
		marginVertical: 6,
	},
	categoryEmoji: {
		fontSize: 18,
		marginRight: 8,
	},
	categoryText: {
		fontSize: 14,
		color: "#fff",
	},
});
