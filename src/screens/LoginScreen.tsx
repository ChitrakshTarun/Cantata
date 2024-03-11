import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import React from "react";
import LoginButton from "../components/LoginButton";
import { LinearGradient } from "expo-linear-gradient";
import {
	useFonts,
	Hind_600SemiBold,
	Hind_700Bold,
} from "@expo-google-fonts/hind";
const LoginScreen = () => {
	let [fontsLoaded] = useFonts({
		Hind_600SemiBold,
		Hind_700Bold,
	});

	if (!fontsLoaded) {
		return null;
	}

	return (
		<LinearGradient
			colors={["#FFFFFF", "#73d2de"]}
			style={{ flex: 1 }}
		>
			<View style={styles.container}>
				<View style={styles.topContainer}>
					<View style={styles.brandContainer}>
						<Image
							source={require("../../assets/icon.png")}
							style={{ width: 36, height: 36 }}
						/>
						<Text style={styles.headContainer}>Cantata</Text>
					</View>
					<Text style={styles.taglineContainer}>Discover. Play. Repeat.</Text>
				</View>
				<View style={styles.textContainer}>
					<LoginButton />
					<Text style={styles.bottomText}>
						Cantata uses the Spotify API to work
					</Text>
				</View>
				<View style={styles.buttonContainer}></View>
			</View>
		</LinearGradient>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: (StatusBar.currentHeight ?? 0) + 16, // For personal reference. In this code, (StatusBar.currentHeight ?? 0) ensures that if StatusBar.currentHeight is undefined, it defaults to 0. Therefore, even if StatusBar.currentHeight is undefined, you'll still be adding 16 pixels to 0, ensuring the margin is always increased by 16 pixels.
		marginHorizontal: 16,
	},

	topContainer: {
		flex: 1,
		justifyContent: "flex-start",
	},
	taglineContainer: {
		fontSize: 40,
		fontFamily: "Hind_600SemiBold",
	},
	brandContainer: {
		flexDirection: "row",
	},
	headContainer: {
		fontSize: 24,
		fontFamily: "Hind_700Bold",
		marginLeft: 12,
	},
	imageContainer: {
		flex: 1,
	},
	textContainer: {
		flex: 2,
		justifyContent: "space-evenly",
		alignItems: "center",
	},
	topText: {
		fontSize: 24,
		fontFamily: "Hind_600SemiBold",
	},
	bottomText: {
		fontFamily: "Hind_600SemiBold",
		fontSize: 16,
		color: "gray",
	},
	buttonContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
