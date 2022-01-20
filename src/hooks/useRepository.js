import { useQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../grahpql/queries";

const useRepository = (id, variables) => {
	const { loading, data, fetchMore, ...result } = useQuery(GET_REPOSITORY, {
		variables: { repository: id, ...variables },
		fetchPolicy: "cache-and-network"
	});

	const handleFetchMore = () => {
		const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

		if (!canFetchMore) {
			return;
		}

		fetchMore({
			variables: {
				after: data.repository.reviews.pageInfo.endCursor,
				...variables
			}
		});
	};

	return {
		repository: data?.repository,
		fetchMore: handleFetchMore,
		loading,
		...result
	};
};

export default useRepository;