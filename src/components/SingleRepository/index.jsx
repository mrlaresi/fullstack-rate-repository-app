import React from "react";
import { Linking } from "react-native";
import { useParams } from "react-router-native";

import useRepository from "../../hooks/useRepository";
import RepositoryContainer from "./RepositoryContainer";


const SingleRepository = () => {
	const { repoId } = useParams();
	const { repository, fetchMore } = useRepository(repoId, {
		first: 5
	});

	const openLink = () => {
		Linking.openURL(repository.url);
	};

	const onEndReached = () => {
		fetchMore();
	};

	return <RepositoryContainer
		repository={repository}
		onEndReached={onEndReached}
		openLink={openLink}
	/>;
};

export default SingleRepository;