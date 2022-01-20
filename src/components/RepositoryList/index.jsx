import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-native";
import { useDebounce } from "use-debounce";

import useRepositories from "../../hooks/useRepositories";
import RepositoryListContainer from "./RepositoryListContainer";

const RepositoryList = () => {
	const { repositories, fetchMore, refetch } = useRepositories({
		first: 5
	});
	const [sort, setSort] = useState("Latest repositories");
	const [searchKeyword, setSearchKeyword] = useState("");
	const [value] = useDebounce(searchKeyword, 500);
	const navigate = useNavigate();

	useEffect(() => {
		refetch({ ...sort, searchKeyword: value });
	}, [sort, value]);

	const handlePress = (id) => {
		navigate(`/${id}`);
	};

	const onEndReached = () => {
		fetchMore();
	};

	return <RepositoryListContainer
		repositories={repositories}
		sort={sort}
		setSort={setSort}
		searchKeyword={searchKeyword}
		setSearchKeyword={setSearchKeyword}
		handlePress={handlePress}
		onEndReached={onEndReached}
	/>;
};

export default RepositoryList;