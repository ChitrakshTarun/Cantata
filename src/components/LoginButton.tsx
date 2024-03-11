import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

const LoginButton = () => {
	return (
		<TouchableOpacity style={styles.button}>
			<FontAwesome6
				name="spotify"
				size={28}
				color="white"
			/>
			<Text style={styles.buttonText}>Login with Spotify</Text>

			<FontAwesome6
				name="angle-right"
				size={28}
				color="white"
			/>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		borderColor: "#fff",
		backgroundColor: "rgba(0, 0, 0, 0.075)",
		borderWidth: 1,
		borderRadius: 16,
		padding: 10,
		justifyContent: "space-evenly",
		alignItems: "center",
		flexDirection: "row",
		width: "90%",
	},
	buttonText: {
		color: "white",
		fontSize: 22,
		fontWeight: "bold",
	},
});

export default LoginButton;
