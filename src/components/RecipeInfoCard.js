import { StyleSheet, Text, View } from "react-native";
import React from "react";

const RecipeInfoCard = ({ recipes }) => {
	return (
		<View style={styles.extraInfoItem}>
			<Text style={{ fontSize: 24 }}>🔥</Text>

			<Text style={styles.recipeExtraInfoText}>
				{`${recipes?.calories} cal`}
			</Text>
		</View>
	);
};

export default RecipeInfoCard;

const styles = StyleSheet.create({});
