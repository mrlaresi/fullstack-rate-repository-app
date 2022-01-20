import { ApolloProvider } from "@apollo/client";
import React from "react";
import { NativeRouter } from "react-router-native";

import Main from "./src/components/Main";
import AuthStorageContext from "./src/contexts/AuthStorageContext";
import createApolloClient from "./src/utils/apolloClient";
import AuthStorage from "./src/utils/authStorage";

const authStorage = new AuthStorage();
const apolloCLient = createApolloClient(authStorage);

const App = () => {
	return (
		<>
			<NativeRouter>
				<ApolloProvider client={apolloCLient}>
					<AuthStorageContext.Provider value={authStorage}>
						<Main />
					</AuthStorageContext.Provider>
				</ApolloProvider>
			</NativeRouter>
		</>
	);
};

export default App;