import React from "react";
import { Image as NativeImage, StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		width: 50,
		height: 50,
	},
});

const Image = ({ style, ...props }) => {
	const viewStyle = [
		styles.container,
		style,
	];

	return <NativeImage style={viewStyle} {...props} />;
};

export default Image;