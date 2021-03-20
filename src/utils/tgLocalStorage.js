export default class TGLocalStorage {
	constructor({ prefix = '', key, defaultValue }) {
		if (!key) {
			throw Error('key is required');
		}

		this.prefix = prefix;
		this.key = key;
		this.defaultValue = defaultValue;

		if (defaultValue) {
			this.setItem({ value: defaultValue });
		}
	}

	get getKey() {
		const prefix = this.prefix ? `${this.prefix.toUpperCase()}_` : '';
		return `${prefix}${this.key}`;
	}

	setItem({ value }) {
		try {
			const type = typeof value;
			window.localStorage.setItem(this.getKey, JSON.stringify({ type, value }));
		} catch (e) {
			console.error(e);
		}
	}

	getItem() {
		try {
			const storedObject = window.localStorage.getItem(this.getKey);
			const parsedObject = JSON.parse(storedObject);
			if (parsedObject && parsedObject.value) {
				if (typeof parsedObject.value === 'string' && parsedObject.type === 'object') {
					return JSON.parse(parsedObject.value);
				}
				if (typeof parsedObject.value === 'string' && parsedObject.type === 'number') {
					return Number(parsedObject.value);
				}
				return parsedObject.value;
			}
			return this.defaultValue;
		} catch (e) {
			console.error(e);
			throw e;
		}
	}

	removeItem() {
		try {
			window.localStorage.removeItem(this.getKey);
		} catch (e) {
			console.error(e);
		}
	}
}
