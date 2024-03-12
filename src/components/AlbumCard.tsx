import {
	StyleSheet,
	Text,
	View,
	Image,
	ImageSourcePropType,
} from "react-native";
import React from "react";

interface AlbumCardProps {
	albumName: string;
	artist: string;
	artwork: ImageSourcePropType;
}

const AlbumCard: React.FC<AlbumCardProps> = ({
	albumName,
	artist,
	artwork,
}) => {
	return (
		<View style={styles.container}>
			<View style={styles.artworkContainer}>
				<Image
					source={artwork}
					style={{ width: 180, height: 180, borderRadius: 4 }}
				/>
			</View>
			<View style={styles.textContainer}>
				<Text style={styles.albumName}>{albumName}</Text>
				<Text style={styles.artist}>{artist}</Text>
			</View>
		</View>
	);
};

export default AlbumCard;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#FFFFFF",
		borderRadius: 5,
		width: 200,
		height: 250,
		marginRight: 10,
	},
	artworkContainer: {
		flex: 4,
		//		backgroundColor: "#ff0000",
		justifyContent: "center",
		alignItems: "center",
	},
	textContainer: {
		flex: 1,
		justifyContent: "space-evenly",
		paddingHorizontal: 10,
		paddingBottom: 10,
	},
	albumName: {
		fontSize: 20,
		fontFamily: "Hind_600SemiBold",
		marginBottom: 5,
	},
	artist: {
		fontSize: 16,
		fontFamily: "Hind_400Regular",
		color: "#888",
	},
});
