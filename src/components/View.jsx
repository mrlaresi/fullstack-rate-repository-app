import React from "react";
import { View as NativeView, StyleSheet } from "react-native";
import Constants from "expo-constants";

import theme from "../theme";

const styles = StyleSheet.create({
	defaultContainer: {
		backgroundColor: theme.colors.primary,
	},
	mainContainer: {
		flexGrow: 1,
		flexShrink: 1,
		backgroundColor: theme.colors.secondary,
	},
	barContainer: {
		paddingTop: Constants.statusBarHeight,
		backgroundColor: theme.colors.detailPrimary,
		paddingLeft: 20,
		paddingBottom: 12
	},
	repoContainer: {
		padding: 20,
	},
	languageContainer: {
		marginTop: 5,
		padding: 5,
		backgroundColor: theme.colors.detailSecondary,
		borderRadius: 10,
		alignSelf: "flex-start"
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
		alignContent: "space-between"
	},
	flexNoGrowContainer: {
		flexGrow: 0
	},
	flexGrowContainer: {
		flexGrow: 1
	}
});

const View = ({ type, flex, flexParent, style, ...props }) => {
	const viewStyle = [
		styles.defaultContainer,
		type === "main" && styles.mainContainer,
		type === "bar" && styles.barContainer,
		type === "repository" && styles.repoContainer,
		type === "language" && styles.languageContainer,
		flexParent === "row" && styles.flexParentRow,
		flexParent === "column" && styles.flexParentColumn,
		flex === "nogrow" && styles.flexNoGrowContainer,
		flex === "grow" && styles.flexGrowContainer,
		style,
	];

	return <NativeView style={viewStyle} {...props} />;
};

export default View;