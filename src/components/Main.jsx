import React from "react";
import { Redirect, Route, Switch } from "react-router-native";
import AppBar from "./AppBar";
import RepositoryList from "./RepositoryList";
import SignIn from "./SignIn";
import View from "./View";

const Main = () => {
	return (
		<View type="main">
			<AppBar />
			<Switch>
				<Route path="/" exact >
					<RepositoryList />
				</Route>
				<Route>
					<SignIn path="/signin" />
				</Route>
				<Redirect to="/" />
			</Switch>
		</View>
	);
};

export default Main;