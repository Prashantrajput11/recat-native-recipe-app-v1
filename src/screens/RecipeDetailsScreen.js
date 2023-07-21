import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import supabase from "../services/supabase";
import {
	LIGHTER_PRIMARY_10,
	LIGHTER_PRIMARY_20,
	PRIMARY_COLOR,
} from "../constants/colors";
import RecipeInfoCard from "../components/RecipeInfoCard";

const RecipeDetailsScreen = () => {
	const [recipes, setRecipes] = useState({});
	const route = useRoute();
	useEffect(() => {
		getRecipeById();
	}, []);

	const id = route.params?.id;

	const getRecipeById = async () => {
		let { data: recipes, error } = await supabase
			.from("recipes")
			.select()
			.eq("id", id)
			.single();

		if (error) {
			console.log(error);
		}

		setRecipes(recipes);
	};
	return (
		<View style={{ marginHorizontal: 16 }}>
			{/* <Text>RecipeDetailsScreen</Text>
			<Text>{id}</Text> */}

			{/* Recipe Details header */}
			<View style={styles.recipeHeader}>
				<View style={{ flex: 1 }}>
					<Text>Recipe name - {recipes.title}</Text>
					<Text>By Recipe Author - {recipes.chef}</Text>
				</View>

				<Text>5 Rating</Text>
			</View>

			<View style={styles.recipeExtraInfo}>
				<View style={styles.row}>
					<View style={styles.extraInfoItem}>
						{/* <Icon name="rocket" size={30} color="#900" /> */}
						<Text style={{ fontSize: 24 }}>🔥</Text>

						<Text style={styles.recipeExtraInfoText}>
							{`${recipes?.calories} cal`}
						</Text>
					</View>
					<View style={styles.extraInfoItem}>
						<Text style={{ fontSize: 24, color: "#fff" }}>🕐</Text>
						<Text
							style={styles.recipeExtraInfoText}
						>{`${recipes?.cookingTime} minutes`}</Text>
					</View>
				</View>
				<View style={styles.row}>
					<View style={styles.extraInfoItem}>
						{/* <Icon name="rocket" size={30} color="#900" /> */}
						<Text style={{ fontSize: 24 }}>💀</Text>
						<Text style={styles.recipeExtraInfoText}>
							{recipes?.difficulty}
						</Text>
					</View>
					<View style={styles.extraInfoItem}>
						<Text style={{ fontSize: 24 }}>🥣</Text>
						<Text style={styles.recipeExtraInfoText}>
							{recipes?.dietaryInfo}
						</Text>
					</View>
				</View>
			</View>

			<View style={styles.recipeDescription}>
				<Text style={{ fontWeight: "bold", fontSize: 24 }}>Description</Text>
				<Text style={{ marginTop: 20 }}> {recipes.description}</Text>
			</View>

			<View style={{ marginTop: 20 }}>
				<Text style={{ fontWeight: "bold" }}>INGRIDIENTS </Text>
				<Text style={{ fontSize: 48 }}>🥝</Text>
			</View>
		</View>
	);
};

export default RecipeDetailsScreen;

const styles = StyleSheet.create({
	recipeHeader: {
		flexDirection: "row",
		backgroundColor: LIGHTER_PRIMARY_10,
		marginTop: 20,
		borderRadius: 6,
		paddingHorizontal: 6,
		paddingVertical: 12,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-evenly",
		marginBottom: 10, // Add some spacing between rows
	},

	recipeExtraInfo: {
		// flexDirection: "row",
		// justifyContent: "space-between",
		marginTop: 20,
		backgroundColor: PRIMARY_COLOR,
		// backgroundColor: "rgba(255, 165, 0, 0.2)",
		paddingHorizontal: 6,
		paddingVertical: 12,
		borderRadius: 8,
	},
	extraInfoItem: {
		backgroundColor: LIGHTER_PRIMARY_10,
		borderRadius: 6,
		padding: 6,
		alignItems: "center",
		width: 80,
		// shadowColor: "#000",
		// shadowOffset: {
		// 	width: 0,
		// 	height: 2,
		// },
		// shadowOpacity: 0.25,
		// shadowRadius: 3.84,
	},

	recipeExtraInfoText: {
		color: "#000",
	},

	recipeDescription: {
		marginTop: 20,
	},
});
