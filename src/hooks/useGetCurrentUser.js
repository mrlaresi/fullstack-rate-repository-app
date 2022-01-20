import { useQuery } from "@apollo/client";

import { GET_CURRENT_USER } from "../grahpql/queries";


const useGetCurrentUser = (variables) => {
	const { loading, data, fetchMore, refetch, ...result } = useQuery(GET_CURRENT_USER, {
		variables,
		fetchPolicy: "cache-and-network"
	});

	const handleFetchMore = () => {
		const canFetchMore = !loading && data?.me.reviews.pageInfo.hasNextPage;

		if (!canFetchMore) {
			return;
		}

		fetchMore({
			variables: {
				after: data.me.reviews.pageInfo.endCursor,
				...variables
			}
		});
	};

	const refetchReviews = () => {
		refetch(variables);
	};

	return {
		user: data?.me,
		fetchMore: handleFetchMore,
		loading,
		refetch: refetchReviews,
		...result
	};
};

export default useGetCurrentUser;