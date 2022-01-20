import React from "react";
import FormikTextInput from "../FormikTextInput";
import Pressable from "../Pressable";
import Text from "../Text";
import View from "../View";

const ReviewFormFields = ({ onSubmit }) => {
	return (
		<View>
			<FormikTextInput name="ownerName" placeholder="Repository owner's name" />
			<FormikTextInput name="repositoryName" placeholder="Repository's name" />
			<FormikTextInput name="rating" placeholder="Rating between 0 and 100" />
			<FormikTextInput name="text" placeholder="Review" multiline/>
			<Pressable onPress={onSubmit} border background padding margin="around" text="center">
				<Text>Create a review</Text>
			</Pressable>
		</View>
	);
};

export default ReviewFormFields;