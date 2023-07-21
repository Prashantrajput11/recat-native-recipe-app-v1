import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import CustomText from "./CustomText";

const ProfileHeader = () => {
	return (
		<View
			style={{
				flexDirection: "row",
				justifyContent: "space-between",
				marginVertical: 20,
			}}
		>
			<View>
				<CustomText text="Hello, John" textColor={"#808080"} />
				<View style={{ width: 300 }}>
					<CustomText
						text="What would you like to cook today?"
						textColor={"#000"}
						textSize={24}
						textWeight={"bold"}
					/>
				</View>
			</View>

			<View>
				<Image
					source={{
						uri: "https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_1280.jpg",
					}}
					style={{ height: 60, width: 60, borderRadius: 30 }}
				/>
			</View>
		</View>
	);
};

export default ProfileHeader;

const styles = StyleSheet.create({});
