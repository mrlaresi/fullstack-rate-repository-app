import { useApolloClient, useQuery } from "@apollo/client";
import React from "react";
import { Pressable, ScrollView } from "react-native";
import { Link } from "react-router-native";

import { ME } from "../grahpql/queries";
import useAuthStorage from "../hooks/useAuthStorage";
import Text from "./Text";
import View from "./View";

const AppBar = () => {
	const { data } = useQuery(ME);
	const apolloClient = useApolloClient();
	const authStorage = useAuthStorage();

	const handleSignOut = async () => {
		await authStorage.removeAccessToken();
		apolloClient.resetStore();
	};

	return (
		<View type="bar">
			<ScrollView horizontal>
				<Pressable>
					<Link to="/">
						<Text fontSize="heading" fontWeight="bold">Repositories</Text>
					</Link>
				</Pressable>
				{data?.me?.id
					? <Pressable style={{ paddingLeft: 20 }} onPress={handleSignOut}>
						<Text fontSize="heading" fontWeight="bold">Sign out</Text>
					</Pressable>
					: <Pressable style={{ paddingLeft: 20 }}>
						<Link to="/signin">
							<Text fontSize="heading" fontWeight="bold">Sign in</Text>
						</Link>
					</Pressable>
				}
			</ScrollView>
		</View>
	);
};

export default AppBar;