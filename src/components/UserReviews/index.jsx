import { useMutation } from "@apollo/client";
import React from "react";
import { Alert, Linking } from "react-native";
import { DELETE_REVIEW } from "../../grahpql/mutations";
import useGetCurrentUser from "../../hooks/useGetCurrentUser";

import ReviewContainer from "./ReviewContainer";

const UserReviews = () => {
	const { user, fetchMore, refetch } = useGetCurrentUser({
		includeReviews: true,
		first: 7
	});
	const [mutate] = useMutation(DELETE_REVIEW);

	const onEndReached = () => {
		fetchMore();
	};

	const openLink = (url) => {
		Linking.openURL(url);
	};

	const deleteReview = (id) => {
		mutate({ variables: { id } });
		refetch();
	};

	const confirmDeletion = (id) => {
		Alert.alert(
			"Delete review",
			"Are you sure you want to delete this review?",
			[
				{ text: "Cancel", onPress: () => { return; } },
				{ text: "Delete", onPress: () => deleteReview(id) }]
		);
	};

	return <ReviewContainer user={user} onEndReached={onEndReached} openLink={openLink} deleteReview={confirmDeletion} />;
};

export default UserReviews;