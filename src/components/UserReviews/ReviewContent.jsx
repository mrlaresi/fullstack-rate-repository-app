import React from "react";
import Pressable from "../Pressable";
import ReviewItem from "../ReviewItem";
import Text from "../Text";
import View from "../View";

const ReviewContent = ({ review, openLink, deleteReview }) => {
	return (
		<>
			<ReviewItem
				key={review.id}
				number={review.rating}
				name={review.repository.fullName}
				date={review.createdAt}
				review={review.text}
			/>
			<View flexParent="row" type="parent">
				<Pressable onPress={() => openLink(review.repository.url)} text="center" background padding border flex margin="between">
					<Text>View Repository</Text>
				</Pressable>
				<Pressable onPress={() => deleteReview(review.id)} text="center" background="red" padding border flex>
					<Text>Delete Review</Text>
				</Pressable>
			</View>
		</>
	);
};

export default ReviewContent;