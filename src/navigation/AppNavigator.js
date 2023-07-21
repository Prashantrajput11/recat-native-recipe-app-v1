import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import RecipeDetailsScreen from "../screens/RecipeDetailsScreen";
import AddRecipe from "../screens/AddRecipe";

const Stack = createNativeStackNavigator();

function AppNavigator() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="HomeScreen" component={HomeScreen} />
				<Stack.Screen
					name="RecipeDetailsScreen"
					component={RecipeDetailsScreen}
				/>
				<Stack.Screen name="AddRecipe" component={AddRecipe} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default AppNavigator;

const styles = StyleSheet.create({});
