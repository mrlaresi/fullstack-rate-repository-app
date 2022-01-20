import { useApolloClient, useQuery } from "@apollo/client";
import React from "react";
import { ScrollView } from "react-native";
import { Link } from "react-router-native";

import { GET_CURRENT_USER } from "../grahpql/queries";
import useAuthStorage from "../hooks/useAuthStorage";
import Pressable from "./Pressable";
import Text from "./Text";
import View from "./View";

const AppBar = () => {
	const { data } = useQuery(GET_CURRENT_USER);
	const apolloClient = useApolloClient();
	const authStorage = useAuthStorage();

	const handleSignOut = async () => {
		await authStorage.removeAccessToken();
		apolloClient.resetStore();
	};

	return (
		<View type="bar" color="detail">
			<ScrollView horizontal>
				<Pressable margin="between">
					<Link to="/">
						<Text fontSize="heading" fontWeight="bold">Repositories</Text>
					</Link>
				</Pressable>
				{data?.me?.id
					?
					<>
						<Pressable margin="between">
							<Link to="/createReview">
								<Text fontSize="heading" fontWeight="bold">Create a review</Text>
							</Link>
						</Pressable>
						<Pressable margin="between">
							<Link to="/myReviews">
								<Text fontSize="heading" fontWeight="bold">My reviews</Text>
							</Link>
						</Pressable>
						<Pressable onPress={handleSignOut}>
							<Text fontSize="heading" fontWeight="bold">Sign out</Text>
						</Pressable>
					</>
					:
					<>
						<Pressable margin="between">
							<Link to="/signin">
								<Text fontSize="heading" fontWeight="bold">Sign in</Text>
							</Link>
						</Pressable>
						<Pressable >
							<Link to="/signup">
								<Text fontSize="heading" fontWeight="bold">Sign up</Text>
							</Link>
						</Pressable>
					</>
				}
			</ScrollView>
		</View>
	);
};

export default AppBar;