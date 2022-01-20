import React from "react";
import { format } from "date-fns";
import Text from "./Text";
import View from "./View";

const ReviewItem = ({ number, name, date, review }) => {
	return (
		<View flexParent="row" type="parent">
			<View border="round" flex="nogrow" style={{ alignItems: "center", justifyContent: "center" }}>
				<Text fontSize="heading">{number}</Text>
			</View>
			<View flex="grow" style={{ marginLeft: 15 }}>
				<Text fontSize="subheading" fontWeight="bold">{name}</Text>
				<Text color="secondary">{format(new Date(date), "yyyy.MM.dd")}</Text>
				<Text>{review}</Text>
			</View>
		</View>
	);
};

export default ReviewItem;