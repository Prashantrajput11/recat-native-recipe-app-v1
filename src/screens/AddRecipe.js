import { StyleSheet, Text, TextInput, View, Pressable } from "react-native";
import React from "react";
import { useForm } from "react-hook-form";
import CustomInput from "../components/CustomInput";
import supabase from "../services/supabase";

const AddRecipe = () => {
	const {
		control,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = async (recipeData) => {
		const { title, steps, ratings } = recipeData;
		const { data, error } = await supabase
			.from("recipes")
			.insert([{ title, steps, ratings }])
			.select();

		if (error) {
			console.log(error);

			throw new Error("Cabins could not be not deleted");
		}

		reset();
	};
	return (
		<View style={{ marginHorizontal: 16 }}>
			<Text>AddRecipe</Text>
			<CustomInput
				placeholder={"enter recipe title"}
				name={"title"}
				control={control}
			/>
			{errors.title && <Text style={{ color: "red" }}>This is required.</Text>}
			<CustomInput
				placeholder={"enter recipe steps"}
				name={"steps"}
				control={control}
			/>
			{errors.steps && <Text style={{ color: "red" }}>This is required.</Text>}

			<CustomInput
				placeholder={"enter recipe rating"}
				name={"ratings"}
				control={control}
			/>
			{errors.ratings && (
				<Text style={{ color: "red" }}>This is required.</Text>
			)}

			<Pressable style={styles.addCta} onPress={handleSubmit(onSubmit)}>
				<Text>add</Text>
			</Pressable>
		</View>
	);
};

export default AddRecipe;

const styles = StyleSheet.create({
	addCta: {
		backgroundColor: "green",
		width: 100,
		alignItems: "center",
		paddingVertical: 6,
		marginTop: 6,
	},
});
