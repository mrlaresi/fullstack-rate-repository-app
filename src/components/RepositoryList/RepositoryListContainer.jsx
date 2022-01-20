import React from "react";
import { FlatList } from "react-native";

import Pressable from "../Pressable";
import ItemSeparator from "../ItemSeparator";
import RepositoryItem from "../RepositoryItem";
import RepositoryHeader from "./RepositoryHeader";



const RepositoryListContainer = ({
	repositories,
	searchKeyword,
	setSearchKeyword,
	sort,
	setSort,
	handlePress,
	onEndReached
}) => {

	const repositoryNodes = repositories
		? repositories.edges.map(edge => edge.node)
		: [];

	return (
		<FlatList
			data={repositoryNodes}
			ItemSeparatorComponent={ItemSeparator}
			ListHeaderComponent={<RepositoryHeader
				searchKey={searchKeyword}
				setSearchKey={setSearchKeyword}
				selected={sort}
				setSelected={setSort}
			/>}
			onEndReached={onEndReached}
			onEndReachedThreshold={0.5}
			renderItem={({ item }) =>
				<Pressable onPress={() => handlePress(item.id)}>
					<RepositoryItem key={item.id} repository={item} />
				</Pressable>
			}
		/>
	);
};

export default RepositoryListContainer;