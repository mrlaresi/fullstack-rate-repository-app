import { gql } from "@apollo/client";

export const SIGN_IN = gql`
	mutation Authenticate($credentials: AuthenticateInput!) {
		authenticate(credentials: $credentials) {
			accessToken
		}
	}
`;

export const CREATE_REVIEW = gql`
	mutation CreateReview($input: CreateReviewInput!) {
		createReview(review: $input) {
			repository {
				id
			}
		}
	}
`;

export const CREATE_USER = gql`
	mutation CreateUser($input: CreateUserInput!) {
		createUser(user: $input) {
			id
		}
	}
`;

export const DELETE_REVIEW = gql`
	mutation DeleteReview($id: ID!) {
		deleteReview(id: $id)
	}
`;