import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../grahpql/queries";

const useRepositories = (variables) => {
	const { loading, data, fetchMore, refetch, ...result } = useQuery(GET_REPOSITORIES, {
		variables,
		fetchPolicy: "cache-and-network"
	});

	const handleFetchMore = () => {
		const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

		if (!canFetchMore) {
			return;
		}

		fetchMore({
			variables: {
				after: data.repositories.pageInfo.endCursor,
				...variables
			}
		});
	};

	const findRepos = (variables) => {
		refetch(variables);
	};

	return {
		repositories: data?.repositories,
		fetchMore: handleFetchMore,
		loading,
		refetch: findRepos,
		...result
	};
};

export default useRepositories;