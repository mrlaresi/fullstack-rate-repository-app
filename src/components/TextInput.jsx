import React from "react";
import { StyleSheet, TextInput as NativeTextInput } from "react-native";

const styles = StyleSheet.create({
	error: {
		borderColor: "#500000",
		color: "#500000"
	}
});

const TextInput = ({ style, error, ...props }) => {
	const textInputStyle = [
		style,
		error && styles.error
	];

	return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;