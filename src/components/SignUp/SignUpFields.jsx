import React from "react";
import FormikTextInput from "../FormikTextInput";
import View from "../View";
import Pressable from "../Pressable";
import Text from "../Text";

const SignUpFields = ({ onSubmit }) => {
	return (
		<View>
			<FormikTextInput name="username" placeholder="Username" />
			<FormikTextInput name="password" secureTextEntry placeholder="Password" />
			<FormikTextInput name="passwordConfirmation" secureTextEntry placeholder="Password confirmation" />
			<Pressable onPress={onSubmit} border background padding margin="around" text="center">
				<Text fontSize="subheading" fontWeight="bold">Sign in</Text>
			</Pressable>
		</View>
	);
};

export default SignUpFields;