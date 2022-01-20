import React from "react";

import FormikTextInput from "../FormikTextInput";
import Pressable from "../Pressable";
import Text from "../Text";
import View from "../View";

const SignInForm = ({ onSubmit }) => {
	return (
		<View>
			<FormikTextInput name="username" placeholder="Username" />
			<FormikTextInput name="password" secureTextEntry placeholder="Password" />
			<Pressable onPress={onSubmit} border background padding margin="around" text="center">
				<Text fontSize="subheading" fontWeight="bold">Sign in</Text>
			</Pressable>
		</View>
	);
};

export default SignInForm;