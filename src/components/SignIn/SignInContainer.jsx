import { Formik } from "formik";
import React from "react";
import * as yup from "yup";
import SignInForm from "./SignInForm";

const initialValues = {
	username: "",
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

const SignInContainer = ({ onSubmit }) => {
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			validationSchema={validationSchema}
		>
			{({ handleSubmit }) => {
				return (
					<SignInForm onSubmit={handleSubmit} />
				);
			}}
		</Formik>
	);
};

export default SignInContainer;