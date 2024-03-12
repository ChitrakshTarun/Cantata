import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	Image,
	StatusBar,
	FlatList,
} from "react-native";
import React from "react";
import AlbumCard from "../components/AlbumCard";

const HomeScreen = () => {
	return (
		<ScrollView style={styles.container}>
			<View style={styles.brandContainer}>
				<Image
					source={require("../../assets/catonglass.png")}
					style={{ width: 36, height: 36 }}
				/>
				<Text style={styles.headContainer}>Good morning, user</Text>
			</View>
			<Text style={styles.taglineContainer}>Subsection 1</Text>
			<ScrollView // Build reusable component out of this
				horizontal
				nestedScrollEnabled={true}
				showsHorizontalScrollIndicator={false}
			>
				<AlbumCard // For temporary show, use a list of AlbumCard components
					albumName="Cat On Glass"
					artist="Kanye West, Taylor Swift"
					artwork={require("../../assets/catonglass.png")}
				/>
				<AlbumCard
					albumName="Cat On Glass"
					artist="Kanye West, Taylor Swift"
					artwork={require("../../assets/catonglass.png")}
				/>
				<AlbumCard
					albumName="Cat On Glass"
					artist="Kanye West, Taylor Swift"
					artwork={require("../../assets/catonglass.png")}
				/>
				<AlbumCard
					albumName="Cat On Glass"
					artist="Kanye West, Taylor Swift"
					artwork={require("../../assets/catonglass.png")}
				/>
				<AlbumCard
					albumName="Cat On Glass"
					artist="Kanye West, Taylor Swift"
					artwork={require("../../assets/catonglass.png")}
				/>
				<AlbumCard
					albumName="Cat On Glass"
					artist="Kanye West, Taylor Swift"
					artwork={require("../../assets/catonglass.png")}
				/>
			</ScrollView>
		</ScrollView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	brandContainer: {
		flexDirection: "row",
	},
	container: {
		marginTop: (StatusBar.currentHeight ?? 0) + 16, // For personal reference. In this code, (StatusBar.currentHeight ?? 0) ensures that if StatusBar.currentHeight is undefined, it defaults to 0. Therefore, even if StatusBar.currentHeight is undefined, you'll still be adding 16 pixels to 0, ensuring the margin is always increased by 16 pixels.
		marginHorizontal: 16,
	},
	headContainer: {
		fontSize: 24,
		fontFamily: "Hind_700Bold",
		marginLeft: 12,
	},
	taglineContainer: {
		paddingTop: 16,
		fontSize: 28,
		lineHeight: 48,
		fontFamily: "Hind_600SemiBold",
	},
});
