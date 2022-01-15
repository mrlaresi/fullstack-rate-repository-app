import { Formik } from "formik";
import React from "react";
import { Pressable, StyleSheet } from "react-native";
import * as yup from "yup";

import theme from "../theme";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";
import View from "./View";

const initialValues = {
	name: "",
	password: ""
};

const validationSchema = yup.object().shape({
	username: yup
		.string()
		.required("Username is required"),
	password: yup
		.string()
		.required("Password is required")
});

const container = {
	marginTop: 20,
	marginLeft: 20,
	marginRight: 20,
	borderRadius: 5,
};

const styles = StyleSheet.create({
	input: {
		...container,
		borderWidth: 2,
		borderColor: theme.colors.secondary,
		padding: 15,
		color: theme.colors.textPrimary

	},
	button: {
		...container,
		marginBottom: 20,
		padding: 15,
		backgroundColor: theme.colors.detailSecondary,
		color: theme.colors.textSecondary,
	},
	buttonContent: {
		backgroundColor: theme.colors.detailSecondary,
		display: "flex",
		alignItems: "center"
	}
});

const SignIn = () => {
	const onSubmit = (values) => {
		console.log(values);
	};

	return (
		<>
			<Formik
				initialValues={initialValues}
				onSubmit={onSubmit}
				validationSchema={validationSchema}
			>
				{({ handleSubmit }) => {
					return (
						<View>
							<FormikTextInput name="username" style={styles.input} />
							<FormikTextInput name="password" style={styles.input} secureTextEntry />
							<Pressable onPress={handleSubmit} style={styles.button}>
								<View style={styles.buttonContent}>
									<Text fontSize="subheading" fontWeight="bold">Sign in</Text>
								</View>
							</Pressable>
						</View>
					);
				}}
			</Formik>
		</>
	);
};

export default SignIn;