import React from "react";
import { FlatList } from "react-native";

import ItemSeparator from "../ItemSeparator";
import ReviewContent from "./ReviewContent";

const ReviewContainer = ({ user, onEndReached, openLink, deleteReview }) => {
	const reviewNodes = user?.reviews
		? user.reviews.edges.map(edge => edge.node)
		: [];

	return (
		<FlatList
			data={reviewNodes}
			ItemSeparatorComponent={ItemSeparator}
			renderItem={({ item }) =>
				<ReviewContent review={item} openLink={openLink} deleteReview={deleteReview} />
			}
			keyExtractor={(item) => item.id}
			onEndReached={onEndReached}
			onEndReachedThreshold={0.1}
		/>
	);
};

export default ReviewContainer;