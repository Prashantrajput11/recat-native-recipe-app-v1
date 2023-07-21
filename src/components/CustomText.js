import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CustomText = ({
	text,
	textColor,
	textSize,
	textWeight,
	textStyle,
	extraStyle,
}) => {
	return (
		<View>
			<Text
				style={[
					{
						color: textColor,
						fontSize: textSize,
						fontWeight: textWeight,
						fontStyle: textStyle,
					},
					extraStyle,
				]}
			>
				{text}
			</Text>
		</View>
	);
};

export default CustomText;

const styles = StyleSheet.create({});
