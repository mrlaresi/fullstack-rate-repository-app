import React from "react";
import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../../grahpql/mutations";
import { useNavigate } from "react-router-native";
import ReviewFormContainer from "./ReviewFormContainer";



const CreateReview = () => {
	const [mutate] = useMutation(CREATE_REVIEW);
	const navigate = useNavigate();
	const onSubmit = async (values) => {
		const { data } = await mutate({ variables: { input: {
			ownerName: values.ownerName,
			repositoryName: values.repositoryName,
			rating: Number(values.rating),
			text: values.text
		} } });
		navigate(`/${data.createReview.repository.id}`);
	};

	return (
		<ReviewFormContainer onSubmit={onSubmit} />
	);
};

export default CreateReview;