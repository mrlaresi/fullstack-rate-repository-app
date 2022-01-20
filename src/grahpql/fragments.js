import { gql } from "@apollo/client";

export const REPOSITORY_DETAIL = gql`
	fragment RepositoryDetail on Repository {
		id
		ownerAvatarUrl
		fullName
		description
		language
		stargazersCount
		forksCount
		reviewCount
		ratingAverage
	}
`;

export const REVIEW_DETAIL = gql`
	fragment ReviewDetail on Review {
		id
		text
		rating
		createdAt
		user {
			id
			username
		}
	}
`;

export const PAGE_INFOS = gql`
	fragment PageInfos on PageInfo {
		endCursor
		startCursor
		hasNextPage
	}
`;