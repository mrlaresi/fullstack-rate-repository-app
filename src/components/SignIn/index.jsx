import React from "react";
import { useNavigate } from "react-router-native";

import useSignIn from "../../hooks/useSignIn";
import SignInContainer from "./SignInContainer";

const SignIn = () => {
	const [signIn] = useSignIn();
	const navigate = useNavigate();

	const onSubmit = async (values) => {
		const { username, password } = values;
		try {
			const token  = await signIn({ username, password });
			token ?	navigate("/") : undefined;
		} catch (e) {
			console.log("Error happened!");
			console.log(e);
		}
	};

	return (
		<SignInContainer onSubmit={onSubmit} />
	);
};

export default SignIn;