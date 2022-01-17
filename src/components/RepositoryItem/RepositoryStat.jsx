import React from "react";
import Text from "../Text";
import View from "../View";

const RepositoryStat = ({ stat, text }) => {
	const clampStat = (value) => {
		if (value > 999) {
			return Math.round(value / 100) / 10 + "k";
		}
		return value;
	};

	return (
		<View flexParent="column">
			<View flex="nogrow" style={{ alignSelf: "center" }}>
				<Text fontWeight="bold">{clampStat(stat)}</Text>
			</View>
			<View flex="nogrow">
				<Text>{text}</Text>
			</View>
		</View>
	);
};

export default RepositoryStat;