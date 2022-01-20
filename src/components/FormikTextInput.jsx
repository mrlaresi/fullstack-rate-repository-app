import React from "react";
import { StyleSheet } from "react-native";
import { useField } from "formik";

import TextInput from "./TextInput";
import Text from "./Text";
import theme from "../theme";
import View from "./View";

const styles = StyleSheet.create({
	container: {
		marginTop: 20,
		marginLeft: 20,
		marginRight: 20
	},
	errorText: {
		color: "#900000"
	},
	input: {
		padding: 15,
		...theme.border,
		color: theme.colors.textPrimary
	},
});

const FormikTextInput = ({ name, ...props }) => {
	const [field, meta, helpers] = useField(name);
	const showError = meta.touched && meta.error;

	return (
		<View style={styles.container}>
			<TextInput
				onChangeText={value => helpers.setValue(value)}
				onBlur={() => helpers.setTouched(true)}
				value={field.value}
				error={showError}
				placeholderTextColor={theme.colors.textSecondary}
				style={styles.input}
				{...props}
			/>
			{showError && <Text style={styles.errorText}>{meta.error}</Text>}
		</View>
	);
};

export default FormikTextInput;