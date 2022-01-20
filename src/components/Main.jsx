import React from "react";
import { Route, Routes } from "react-router-native";

import AppBar from "./AppBar";
import CreateReview from "./CreateReview";
import RepositoryList from "./RepositoryList";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import SingleRepository from "./SingleRepository";
import UserReviews from "./UserReviews";
import View from "./View";

const Main = () => {
	return (
		<View type="main">
			<AppBar />
			<Routes>
				<Route path="/" element={<RepositoryList />} />
				<Route path="/:repoId" element={<SingleRepository />} />
				<Route path="/signin" element={<SignIn />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/myReviews" element={<UserReviews />} />
				<Route path="/createReview" element={<CreateReview />} />
				<Route path="*" element={<RepositoryList />} />
			</Routes>
		</View>
	);
};

export default Main;