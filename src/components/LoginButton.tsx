import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

interface LoginButtonProps {
	onPress: () => void;
}

const LoginButton: React.FC<LoginButtonProps> = ({ onPress }) => {
	return (
		<Pressable
			style={styles.button}
			onPress={onPress}
		>
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
		</Pressable>
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
