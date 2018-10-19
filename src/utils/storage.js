/*
 * storage
*/ 
export const session = {
	get(key) {
		if (!key) return;
		try {
			return window.sessionStorage.getItem(key);
		} catch(e) {
			console.warn(e);
		}
	},
	set(key, value) {
		if (!key) return;

		try {
			if (typeof value !== 'string') {
				value = JSON.stringify(value);
			}
			window.sessionStorage.setItem(key, value);
		} catch(e) {
			console.warn(e);
		}
		
	},
	rm(key)  {
		if (!key) return;
		try {
			window.sessionStorage.removeItem(key);
		} catch(e) {
			console.warn(e);
		}
	}
};

export const local = {
	get(key) {
		if (!key) return;
		try {
			return window.localStorage.getItem(key);
		} catch(e) {
			console.warn(e);
		}
	},
	set(key, value) {
		if (!key) return;
		
		try {
			if (typeof value !== 'string') {
				value = JSON.stringify(value);
			}
			window.localStorage.setItem(key, value);
		}catch(error) {
			console.warn(error);
		}
	},
	rm(key) {
		if (!key) return;

		try {
			window.localStorage.removeItem(key);
		} catch(e) {
			console.warn(e);
		}
	}
};
