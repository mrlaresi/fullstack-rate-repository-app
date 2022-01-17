import React from "react";
import Image from "../Image";
import RepositoryStat from "./RepositoryStat";

import Text from "../Text";
import View from "../View";

const RepositoryItem = ({ repository }) => {
	return (
		<View type="repository">
			<View flexParent="row" >
				<View flex="nogrow">
					<Image source={{ uri: repository.ownerAvatarUrl }} />
				</View>
				<View flex="grow" style={{ marginLeft: 20 }}>
					<Text fontSize="subheading" fontWeight="bold">{repository.fullName}</Text>
					<View style={{ width: "80%" }}><Text>{repository.description}</Text></View>
					<View><View type="language"><Text>{repository.language}</Text></View></View>
				</View>
			</View>
			<View flexParent="row" style={{ marginTop: 20 }}>
				<RepositoryStat stat={repository.stargazersCount} text={"Stars"} />
				<RepositoryStat stat={repository.forksCount} text={"Forks"} />
				<RepositoryStat stat={repository.reviewCount} text={"Reviews"} />
				<RepositoryStat stat={repository.ratingAverage} text={"Rating"} />
			</View>
		</View>
	);
};

export default RepositoryItem;