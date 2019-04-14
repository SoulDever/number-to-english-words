module.exports = {
	updateObject: (oldState, updatedObject) => {
		return {
			...oldState,
			...updatedObject
		}
	},
	capitalize: (str) => {
		return str && str.charAt(0).toUpperCase() + str.slice(1);
	},
	checkValidEmail: (email) => {
		if(!email || email.trim() === ''){
			return false;
		}

		const regExp = '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$';

		const matcher = new RegExp(regExp);
		const keywordTest = email.trim();

		return matcher.test(keywordTest);
	},
};
