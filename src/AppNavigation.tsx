// components
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// screens
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import ProfileScreen from "./screens/ProfileScreen";
import LibraryScreen from "./screens/LibraryScreen";
// Icons
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottomTabNavigator() {
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarActiveTintColor: "#73d2de",
			}}
		>
			<Tab.Screen
				name="Home"
				component={HomeScreen}
				options={{
					tabBarLabel: "Home",
					headerShown: false,
					tabBarIcon: ({ focused }) =>
						focused ? (
							<Ionicons
								name="home"
								size={24}
								color="#73d2de"
							/>
						) : (
							<Ionicons
								name="home-outline"
								size={24}
								color="black"
							/>
						),
				}}
			/>
			<Tab.Screen
				name="Search"
				component={SearchScreen}
				options={{
					tabBarLabel: "Search",
					headerShown: false,
					tabBarIcon: ({ focused }) =>
						focused ? (
							<Ionicons
								name="search"
								size={24}
								color="#73d2de"
							/>
						) : (
							<Ionicons
								name="search-outline"
								size={24}
								color="black"
							/>
						),
				}}
			/>
			<Tab.Screen
				name="Library"
				component={LibraryScreen}
				options={{
					tabBarLabel: "Library",
					headerShown: false,
					tabBarIcon: ({ focused }) =>
						focused ? (
							<Ionicons
								name="musical-note"
								size={24}
								color="#73d2de"
							/>
						) : (
							<Ionicons
								name="musical-note-outline"
								size={24}
								color="black"
							/>
						),
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={ProfileScreen}
				options={{
					tabBarLabel: "Profile",
					headerShown: false,
					tabBarIcon: ({ focused }) =>
						focused ? (
							<Ionicons
								name="person"
								size={24}
								color="#73d2de"
							/>
						) : (
							<Ionicons
								name="person-outline"
								size={24}
								color="black"
							/>
						),
				}}
			/>
		</Tab.Navigator>
	);
}

function AppNavigation() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Main"
					component={BottomTabNavigator}
					options={{
						headerShown: false,
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default AppNavigation;
