import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../grahpql/queries";

const useRepositories = () => {
	const { loading, data } = useQuery(GET_REPOSITORIES, {
		fetchPolicy: "cache-and-network"
	});

	return loading
		? { repositories: null, loading }
		: { repositories: data.repositories, loading };
};

export default useRepositories;