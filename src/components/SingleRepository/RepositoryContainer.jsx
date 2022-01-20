import React from "react";
import { FlatList } from "react-native";
import ItemSeparator from "../ItemSeparator";
import ReviewItem from "../ReviewItem";
import Text from "../Text";
import RepositoryInfo from "./RepositoryInfo";

const RepositoryContainer = ({ repository, onEndReached, openLink }) => {
	const reviewNodes = repository?.reviews
		? repository.reviews.edges.map(edge => edge.node)
		: [];

	return (
		repository ?
			<FlatList
				data={reviewNodes}
				ItemSeparatorComponent={ItemSeparator}
				renderItem={({ item }) => <ReviewItem
					key={item.id}
					number={item.rating}
					name={item.user.username}
					date={item.createdAt}
					review={item.text}
				/>}
				keyExtractor={(item) => item.id}
				onEndReached={onEndReached}
				onEndReachedThreshold={0.5}
				ListHeaderComponent={() =>
					<>
						<RepositoryInfo repository={repository} openLink={openLink} />
						{ItemSeparator()}
					</>
				}
			/>
			: <Text>Loading repository</Text>
	);
};

export default RepositoryContainer;