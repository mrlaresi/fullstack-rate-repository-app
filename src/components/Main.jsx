import React from "react";
import { Route, Routes } from "react-router-native";
import AppBar from "./AppBar";
import RepositoryList from "./RepositoryList";
import SignIn from "./SignIn";
import View from "./View";

const Main = () => {
	return (
		<View type="main">
			<AppBar />
			<Routes>
				<Route path="/" element={<RepositoryList />} />
				<Route path="/signin" element={<SignIn />} />
				<Route path="*" element={<RepositoryList />} />
			</Routes>
		</View>
	);
};

export default Main;