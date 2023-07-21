import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import RecipeDetailsScreen from "../screens/RecipeDetailsScreen";
import CustomText from "./CustomText";
import { PRIMARY_COLOR } from "../constants/colors";
import Icon from "react-native-vector-icons/FontAwesome";

const RecipeCard = ({ recipe }) => {
	const navigation = useNavigation();
	const { id, title, steps, ratings, ingredients } = recipe;
	console.log(recipe);

	return (
		<View style={styles.recipeCardConatiner}>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
					// backgroundColor: "red",
				}}
			>
				<Image
					source={{
						uri: "https://cdn.pixabay.com/photo/2015/08/25/03/50/background-906135_1280.jpg",
					}}
					style={{ width: 60, height: 60, borderRadius: 30, marginRight: 20 }}
				/>

				<View>
					<CustomText text={title} textSize={18} textWeight={"bold"} />
					<CustomText
						text="230 Cal"
						textStyle={"italic"}
						extraStyle={{ marginTop: 6 }}
					/>
				</View>

				{/* icons to edit and delete */}

				<View style={{ flexDirection: "row" }}>
					<View
						style={{
							backgroundColor: PRIMARY_COLOR,
							height: 30,
							width: 30,
							borderRadius: 15,
							alignItems: "center",
							justifyContent: "center",
							marginRight: 6,
						}}
					>
						<Icon name="pencil" size={15} color="#fff" />
					</View>

					<View
						style={{
							backgroundColor: PRIMARY_COLOR,
							height: 30,
							width: 30,
							borderRadius: 15,
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Icon name="trash" size={15} color="#fff" />
					</View>
				</View>
			</View>

			{/* Ratings || Total Time  */}
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "center",
					backgroundColor: "#b3d9b3",
					borderRadius: 4,
					paddingVertical: 3,
					marginTop: 6,
					paddingHorizontal: 6,
				}}
			>
				<CustomText text={`${ratings}⭐️`} textColor={"#5A5656"} />
				<View style={{ marginHorizontal: 8 }}>
					<Text>|</Text>
				</View>
				<CustomText text={`2 hours`} textColor={"#5A5656"} />
				<View style={{ marginHorizontal: 8 }}>
					<Text>|</Text>
				</View>
				<CustomText text={`Arun Mittal`} textColor={"#5A5656"} />
			</View>
			{/* Recipe Description */}

			<CustomText
				text={"Cut a fresh vegateble..."}
				extraStyle={{ marginTop: 6 }}
			/>
			{/* <Text> {`${steps}...`}</Text> */}

			<Pressable
				style={styles.moreCta}
				onPress={() => navigation.navigate("RecipeDetailsScreen", { id: id })}
			>
				<Text style={{ color: "#fff" }}>Details</Text>
			</Pressable>
		</View>
	);
};

export default RecipeCard;

const styles = StyleSheet.create({
	recipeCardConatiner: {
		backgroundColor: "#fff",
		paddingHorizontal: 16,
		paddingVertical: 12,
		borderRadius: 12,
		marginVertical: 16,
	},

	moreCta: {
		paddingHorizontal: 6,
		backgroundColor: PRIMARY_COLOR,
		width: 100,
		paddingVertical: 4,
		borderRadius: 6,
		marginTop: 6,
	},
});
