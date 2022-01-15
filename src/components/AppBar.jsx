import React from "react";
import { Pressable, ScrollView } from "react-native";
import { Link } from "react-router-native";
import Text from "./Text";
import View from "./View";

const AppBar = () => {
	return (
		<View type="bar">
			<ScrollView horizontal>
				<Pressable>
					<Link to="/">
						<Text fontSize="heading" fontWeight="bold">Repositories</Text>
					</Link>
				</Pressable>
				<Pressable style={{ paddingLeft: 20 }}>
					<Link to="/signin">
						<Text fontSize="heading" fontWeight="bold">Sign in</Text>
					</Link>
				</Pressable>
			</ScrollView>
		</View>
	);
};

export default AppBar;