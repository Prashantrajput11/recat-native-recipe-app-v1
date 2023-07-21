import { FlatList, StyleSheet, Text, View, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";

import supabase from "../services/supabase";
import Categories from "../components/Categories";
import ProfileHeader from "../components/ProfileHeader";
import CustomText from "../components/CustomText";
import { PRIMARY_COLOR } from "../constants/colors";

const categories = [
	{
		id: "01",
		text: "BreakFast",
		emoji: "🥞",
	},
	{
		id: "02",
		text: "Lunch",
		emoji: "🌭",
	},
	{
		id: "03",
		text: "Brunch",
		emoji: "🍞",
	},
	{
		id: "04",
		text: "Dinner",
		emoji: "🥗",
	},
	{
		id: "05",
		text: "Dessert",
		emoji: "🍨",
	},
];

const HomeScreen = ({ navigation }) => {
	const [recipes, setRecipes] = useState([]);
	useEffect(() => {
		getRecipes();
	}, []);

	async function getRecipes() {
		let { data: recipes, error } = await supabase.from("recipes").select("*");
		if (error) {
			console.log(error);
		}

		setRecipes(recipes);
	}
	return (
		<View style={{ marginHorizontal: 16, flex: 1 }}>
			{/* User's Profile Header */}
			<ProfileHeader />

			{/* Recipes Categories */}
			<CustomText text={"Categories"} textWeight={600} textSize={22} />
			<View>
				<Categories categories={categories} />
			</View>

			{/* Add Your Own Recipe Section */}
			<Pressable
				style={styles.addRecipeCta}
				onPress={() => navigation.navigate("AddRecipe")}
			>
				<Text style={{ color: "#fff", textAlign: "center" }}>
					Add Your Own recipe
				</Text>
			</Pressable>

			{/* Recipe Card */}
			<FlatList
				data={recipes}
				renderItem={({ item }) => <RecipeCard recipe={item} />}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	addRecipeCta: {
		paddingHorizontal: 6,
		backgroundColor: "red",
		// width: 100,
		paddingVertical: 4,
		borderRadius: 6,
		marginVertical: 32,
		backgroundColor: PRIMARY_COLOR,
	},
});
