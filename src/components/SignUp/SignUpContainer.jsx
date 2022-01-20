import { Formik } from "formik";
import React from "react";
import * as yup from "yup";
import SignUpFields from "./SignUpFields";

const initialValues = {
	username: "",
	password: ""
};

const validationSchema = yup.object().shape({
	username: yup
		.string()
		.required("Username is required")
		.max(30, "Username cannot be longer than 30 characters"),
	password: yup
		.string()
		.required("Repository name is required")
		.min(5, "Password must be longer than 5 characters")
		.max(50, "Password cannot be longer than 50 characters"),
	passwordConfirmation: yup
		.string()
		.oneOf([yup.ref("password"), null], "Password don't match")
		.required("Password confirm is required")
});

const SignUpContainer = ({ onSubmit }) => {
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			validationSchema={validationSchema}
		>
			{({ handleSubmit }) => {
				return (
					<SignUpFields onSubmit={handleSubmit} />
				);
			}}
		</Formik>
	);
};

export default SignUpContainer;