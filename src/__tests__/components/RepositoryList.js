import React from "react";
import { render } from "@testing-library/react-native";

import RepositoryListContainer from "../../components/RepositoryList/RepositoryListContainer";

describe("RepositoryList", () => {
	describe("RepositoryListContainer", () => {
		it("renders repository information correctly", () => {
			const repositories = {
				totalCount: 8,
				pageInfo: {
					hasNextPage: true,
					endCursor:
						"WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
					startCursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
				},
				edges: [
					{
						node: {
							id: "jaredpalmer.formik",
							fullName: "jaredpalmer/formik",
							description: "Build forms in React, without the tears",
							language: "TypeScript",
							forksCount: 1619,
							stargazersCount: 21856,
							ratingAverage: 88,
							reviewCount: 3,
							ownerAvatarUrl:
								"https://avatars2.githubusercontent.com/u/4060187?v=4",
						},
						cursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
					},
					{
						node: {
							id: "async-library.react-async",
							fullName: "async-library/react-async",
							description: "Flexible promise-based React data loader",
							language: "JavaScript",
							forksCount: 69,
							stargazersCount: 1760,
							ratingAverage: 72,
							reviewCount: 3,
							ownerAvatarUrl:
								"https://avatars1.githubusercontent.com/u/54310907?v=4",
						},
						cursor:
							"WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
					},
				],
			};

			const clampStat = (value) => {
				if (value > 999) {
					return Math.round(value / 100) / 10 + "k";
				}
				return value;
			};

			// Add your test code here
			const { getAllByTestId } = render(<RepositoryListContainer repositories={repositories} />);
			const repositoryItems = getAllByTestId("repositoryItem");
			const repositoryNumberValues = getAllByTestId("repositoryNumberValue");
			const [firstRepositoryItem, secondRepositoryItem] = repositoryItems;
			const firstRepo = repositories.edges[0].node;
			const secondRepo = repositories.edges[1].node;

			expect(firstRepositoryItem).toHaveTextContent(firstRepo.fullName);
			expect(firstRepositoryItem).toHaveTextContent(firstRepo.description);
			expect(firstRepositoryItem).toHaveTextContent(firstRepo.language);
			expect(repositoryNumberValues[0]).toHaveTextContent(clampStat(firstRepo.stargazersCount));
			expect(repositoryNumberValues[1]).toHaveTextContent(clampStat(firstRepo.forksCount));
			expect(repositoryNumberValues[2]).toHaveTextContent(clampStat(firstRepo.reviewCount));
			expect(repositoryNumberValues[3]).toHaveTextContent(clampStat(firstRepo.ratingAverage));

			expect(secondRepositoryItem).toHaveTextContent(secondRepo.fullName);
		});
	});
});