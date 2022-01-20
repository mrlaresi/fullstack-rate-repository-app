import React from "react";
import Pressable from "../Pressable";
import RepositoryItem from "../RepositoryItem";
import Text from "../Text";

const RepositoryInfo = ({ repository, openLink }) => {
	return (
		<>
			<RepositoryItem repository={repository} viewGit={true} />
			<Pressable onPress={() => openLink()} border background padding margin="around" text="center">
				<Text>Open in GitHub</Text>
			</Pressable>
		</>
	);
};

export default RepositoryInfo;