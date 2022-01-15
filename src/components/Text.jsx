import React from "react";
import { Text as NativeText, StyleSheet, Platform } from "react-native";

import theme from "../theme";

const styles = StyleSheet.create({
	text: {
		color: theme.colors.textPrimary,
		fontSize: theme.fontSizes.body,
		fontFamily: Platform.select(theme.fonts),
		fontWeight: theme.fontWeights.normal,
	},
	colorTextSecondary: {
		color: theme.colors.textSecondary,
	},
	colorPrimary: {
		color: theme.colors.primary,
	},
	fontSizeSubheading: {
		fontSize: theme.fontSizes.subheading,
		marginTop: 5,
		marginBottom: 5
	},
	fontSizeHeading: {
		fontSize: theme.fontSizes.heading
	},
	fontWeightBold: {
		fontWeight: theme.fontWeights.bold,
	},
});

const Text = ({ color, fontSize, fontWeight, style, ...props }) => {
	const textStyle = [
		styles.text,
		color === "textSecondary" && styles.colorTextSecondary,
		color === "primary" && styles.colorPrimary,
		fontSize === "subheading" && styles.fontSizeSubheading,
		fontSize === "heading" && styles.fontSizeHeading,
		fontWeight === "bold" && styles.fontWeightBold,
		style,
	];

	return <NativeText style={textStyle} {...props} />;
};

export default Text;