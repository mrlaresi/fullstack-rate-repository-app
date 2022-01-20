import React from "react";
import { Pressable as NativePressable, StyleSheet } from "react-native";

import theme from "../theme";

const styles = StyleSheet.create({
	border: {
		borderRadius: theme.border.borderRadius
	},
	backgroundColor: {
		backgroundColor: theme.colors.detailSecondary
	},
	warnColor: {
		backgroundColor: theme.colors.detailRed
	},
	centerText: {
		display: "flex",
		alignItems: "center"
	},
	marginSpaceBetween: {
		marginRight: 20
	},
	marginAround: {
		margin: 20
	},
	padding: {
		padding: 15
	},
	flex: {
		flexGrow: 1,
		flexShrink: 1,
		flexBasis: 0
	}
});

const Pressable = ({ text, border, background, margin, padding, flex, style, ...props }) => {
	const pressableStyle = [
		styles.defaultButton,
		text === "center" && styles.centerText,
		border && styles.border,
		background && styles.backgroundColor,
		background === "red" && styles.warnColor,
		margin === "between" && styles.marginSpaceBetween,
		margin === "around" && styles.marginAround,
		padding && styles.padding,
		flex && styles.flex,
		style
	];
	return <NativePressable style={pressableStyle} {...props} />;
};

export default Pressable;