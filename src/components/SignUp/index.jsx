import React from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../../grahpql/mutations";
import { useNavigate } from "react-router-native";
import useSignIn from "../../hooks/useSignIn";
import SignUpContainer from "./SignUpContainer";

const SignUp = () => {
	const [mutate] = useMutation(CREATE_USER);
	const navigate = useNavigate();
	const [signIn] = useSignIn();

	const onSubmit = async (values) => {
		const { data } = await mutate({ variables: { input: {
			username: values.username,
			password: values.password,
		} } });

		if (!data.createUser?.id) { return; }
		const token = await signIn({ username: values.username, password: values.password });
		token ?	navigate("/") : undefined;
	};

	return (
		<SignUpContainer onSubmit={onSubmit} />
	);
};

export default SignUp;