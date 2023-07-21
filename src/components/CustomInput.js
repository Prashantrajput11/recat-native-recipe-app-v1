import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Controller } from "react-hook-form";

const CustomInput = ({ placeholder, control, name }) => {
	return (
		<View>
			<Controller
				control={control}
				rules={{
					required: true,
				}}
				name={name}
				render={({ field: { onChange, onBlur, value } }) => (
					<TextInput
						value={value}
						placeholder={placeholder}
						onChangeText={onChange}
						onBlur={onBlur}
						style={styles.inputContainer}
					/>
				)}
			/>
		</View>
	);
};

export default CustomInput;

const styles = StyleSheet.create({
	inputContainer: {
		borderWidth: 1,
		borderColor: "green",
		paddingVertical: 8,
		borderRadius: 4,
	},
});
