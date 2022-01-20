import { gql } from "@apollo/client";
import { PAGE_INFOS, REPOSITORY_DETAIL, REVIEW_DETAIL } from "./fragments";

export const GET_REPOSITORIES = gql`
	query getRepositories(
		$orderDirection: OrderDirection,
		$orderBy: AllRepositoriesOrderBy,
		$searchKeyword: String,
		$after: String,
		$first: Int
	) {
		repositories(
			orderDirection: $orderDirection
			orderBy: $orderBy
			searchKeyword: $searchKeyword
			after: $after
			first: $first
		) {
			edges {
				node {
					...RepositoryDetail
				}
				cursor
			}
			pageInfo {
				...PageInfos
			}
		}
	}
	${REPOSITORY_DETAIL}${PAGE_INFOS}
`;

export const GET_REPOSITORY = gql`
	query getRepository($repository: ID!, $first: Int, $after: String) {
		repository(id: $repository) {
			...RepositoryDetail
			url
			reviews(first: $first, after: $after) {
				edges {
					node {
						...ReviewDetail
					}
					cursor
				}
				pageInfo {
					...PageInfos
				}
			}
		}
	}${REPOSITORY_DETAIL}${REVIEW_DETAIL}${PAGE_INFOS}
`;

export const GET_CURRENT_USER = gql`
	query getCurrentUser($includeReviews: Boolean = false, $first: Int, $after: String) {
		me {
			id
			username
			reviews(first: $first, after: $after) @include(if: $includeReviews) {
				edges {
					node {
						...ReviewDetail
						repository {
							fullName
							url
						}
					}
					cursor
				}
				totalCount
				pageInfo {
					...PageInfos
				}
			}
		}
	}${REVIEW_DETAIL}${PAGE_INFOS}
`;