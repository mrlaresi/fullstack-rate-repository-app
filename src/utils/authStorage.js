import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStorage {
	constructor(namespace = "auth") {
		this.namespace = namespace;
		this.KEY = `${this.namespace}:authenticationToken`;
	}

	async getAccessToken() {
		return await AsyncStorage.getItem(this.KEY);
	}

	async setAccessToken(accessToken) {
		await AsyncStorage.setItem(
			this.KEY,
			accessToken
		);
	}

	async removeAccessToken() {
		await AsyncStorage.removeItem(this.KEY);
	}
}

export default AuthStorage;