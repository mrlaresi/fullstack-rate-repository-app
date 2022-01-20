import React from "react";
import { Picker } from "@react-native-picker/picker";
import { StyleSheet } from "react-native";
import theme from "../../theme";
import View from "../View";
import TextInput from "../TextInput";

const styles = StyleSheet.create({
	search: {
		marginBottom: 10,
		padding: 10,
		color: theme.colors.textPrimary,
		...theme.border
	},
	picker: {
		color: theme.colors.textPrimary,
	},
	pickeritem: {
		color: theme.colors.textPrimary,
		backgroundColor: theme.colors.secondary
	}
});

const RepositoryHeader = ({ searchKey, setSearchKey, selected, setSelected }) => {
	return (
		<View type="parent" color="secondary">
			<TextInput onChangeText={value => setSearchKey(value)}
				value={searchKey}
				placeholder="Search keyword"
				placeholderTextColor={theme.colors.textSecondary}
				style={styles.search} />
			<Picker
				style={styles.picker}
				selectedValue={selected}
				dropdownIconColor={theme.colors.textPrimary}
				onValueChange={(value) =>
					setSelected(value)}
			>
				<Picker.Item label="Latest repositories" value={{
					orderDirection: "DESC",
					orderBy: "CREATED_AT"
				}} style={styles.pickeritem} />
				<Picker.Item label="Highest rated" value={{
					orderDirection: "DESC",
					orderBy: "RATING_AVERAGE"
				}} style={styles.pickeritem} />
				<Picker.Item label="Lowest rated" value={{
					orderDirection: "ASC",
					orderBy: "RATING_AVERAGE"
				}} style={styles.pickeritem} />
			</Picker>
		</View>
	);
};

export default RepositoryHeader;