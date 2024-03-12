import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import React from "react";
import LoginButton from "../components/LoginButton";
import { LinearGradient } from "expo-linear-gradient";

import {
	useFonts,
	Hind_300Light,
	Hind_400Regular,
	Hind_500Medium,
	Hind_600SemiBold,
	Hind_700Bold,
} from "@expo-google-fonts/hind";
import { useNavigation } from "@react-navigation/native";
const LoginScreen = () => {
	let [fontsLoaded] = useFonts({
		Hind_300Light,
		Hind_400Regular,
		Hind_500Medium,
		Hind_600SemiBold,
		Hind_700Bold,
	});

	if (!fontsLoaded) {
		return null;
	}
	const navigation = useNavigation() as any; // Fix this 💀 figure out why it doesn't work without as any
	const authenticate = () => {
		console.log("Test");
		navigation.replace("Main");
	};
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
				<View style={styles.middleContainer}></View>
				<View style={styles.bottomContainer}>
					<LoginButton onPress={authenticate} />
					<Text style={styles.bottomText}>
						Cantata uses the Spotify API to work.
					</Text>
				</View>
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
		flex: 2,
		justifyContent: "flex-start",
	},
	middleContainer: {
		flex: 4,
		justifyContent: "center",
		alignItems: "center",
	},
	bottomContainer: {
		flex: 1.5,
		justifyContent: "space-evenly",
		alignItems: "center",
	},
	taglineContainer: {
		paddingTop: 32,
		fontSize: 40,
		lineHeight: 48,
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
	topText: {
		fontSize: 24,
		fontFamily: "Hind_600SemiBold",
	},
	bottomText: {
		fontFamily: "Hind_400Regular",
		fontSize: 16,
		color: "#FFFFFF",
	},
});
