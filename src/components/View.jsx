import React from "react";
import { View as NativeView, StyleSheet } from "react-native";
import Constants from "expo-constants";

import theme from "../theme";

const styles = StyleSheet.create({
	defaultContainer: {
		backgroundColor: theme.colors.primary,
	},
	mainContainer: {
		flex: 1
	},
	barContainer: {
		paddingTop: Constants.statusBarHeight,
		paddingLeft: 20,
		paddingBottom: 12
	},
	parentContainer: {
		padding: 15,
	},
	separatorContainer: {
		height: 10,
	},
	languageContainer: {
		marginTop: 5,
		padding: 5,
		borderRadius: 10,
		alignSelf: "flex-start"
	},
	colorSecondary: {
		backgroundColor: theme.colors.secondary,
	},
	colorDetail: {
		backgroundColor: theme.colors.detailPrimary,
	},
	colorDetailSecondary: {
		backgroundColor: theme.colors.detailSecondary
	},
	borderRound: {
		height: 50,
		width: 50,
		borderRadius: 25,
		borderWidth: theme.border.borderWidth,
		borderColor: theme.colors.detailSecondary
	},
	flexParentRow: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-around",
	},
	flexParentColumn: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-around",
		alignContent: "space-between",
	},
	flexNoGrowContainer: {
		flex: 0,
	},
	flexGrowContainer: {
		flexGrow: 1,
		flexShrink: 1
	},
});

const View = ({ type, color, border, flexParent, flex, style, ...props }) => {
	const viewStyle = [
		styles.defaultContainer,
		type === "main" && styles.mainContainer,
		type === "bar" && styles.barContainer,
		type === "parent" && styles.parentContainer,
		type === "language" && styles.languageContainer,
		type === "separator" && styles.separatorContainer,
		color === "secondary" && styles.colorSecondary,
		color === "detail" && styles.colorDetail,
		color === "detailSecondary" && styles.colorDetailSecondary,
		border === "round" && styles.borderRound,
		flexParent === "row" && styles.flexParentRow,
		flexParent === "column" && styles.flexParentColumn,
		flex === "nogrow" && styles.flexNoGrowContainer,
		flex === "grow" && styles.flexGrowContainer,
		style,
	];

	return <NativeView style={viewStyle} {...props} />;
};

export default View;