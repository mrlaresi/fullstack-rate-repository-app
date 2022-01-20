import { Formik } from "formik";
import React from "react";
import * as yup from "yup";
import ReviewFormFields from "./ReviewFormFields";

const initialValues = {
	ownerName: "",
	repositoryName: "",
	rating: "",
	text: ""
};

const validationSchema = yup.object().shape({
	ownerName: yup
		.string()
		.required("Repository owner is required"),
	repositoryName: yup
		.string()
		.required("Repository name is required"),
	rating: yup
		.number()
		.required("Rating is required")
		.min(0, "Rating must be a number between 0 and 100")
		.max(100, "Rating must be a number between 0 and 100"),
	text: yup
		.string()
		.optional()
});

const ReviewFormContainer = ({ onSubmit }) => {
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			validationSchema={validationSchema}
		>
			{({ handleSubmit }) => {
				return (
					<ReviewFormFields onSubmit={handleSubmit} />
				);
			}}
		</Formik>
	);
};

export default ReviewFormContainer;