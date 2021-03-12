import _ from 'lodash';

export const getStateObject = (state, reducerKey, objectKey, { initialValue = {} } = {}) => {
	return _.get(state, `[${reducerKey}].${objectKey}`, initialValue);
};

export const searchItemFields = (item, searchString, searchFields) => {
	if (!item || !searchString || searchString.trim() === '') {
		return true;
	}

	const searchTexts = searchString.split(' ');

	let hasOneOfSearchStrings = false;

	searchTexts.every(searchText => {
		const filterRegx = new RegExp(_.escapeRegExp(searchText), 'i');
		if (!searchFields) {
			const itemJSON = JSON.stringify(item);
			hasOneOfSearchStrings = filterRegx.test(itemJSON);
			return hasOneOfSearchStrings;
		}
		let hasOneOfSearchFields = false;
		searchFields.some(searchField => {
			let propertyName = '';
			const propertyParts = searchField.split('.');
			const leftBracket = "['";
			const rightBracket = "']";
			propertyParts.forEach(propertyPart => {
				propertyName = propertyName.concat(leftBracket, propertyPart, rightBracket);
			});
			const propertyValue = _.get(item, propertyName);
			hasOneOfSearchFields = filterRegx.test(propertyValue);
			return hasOneOfSearchFields;
		});
		hasOneOfSearchStrings = hasOneOfSearchFields;
		return hasOneOfSearchFields;
	});

	return hasOneOfSearchStrings;
};

export const getLimitAndOffset = (pagination = {}) => {
	const { currentPage = 1, rowsPerPage = 10 } = pagination;
	return {
		limit: rowsPerPage,
		offset: (currentPage - 1) * rowsPerPage,
	};
};

/**
 * Converts given number to money
 *
 * ex: formatNumber(4656.8099999999995) -> "4.656,80"
 * ex: formatNumber(23123.123) ->  "23.123,12"
 * ex: formatNumber(23123.123456, 3) ->  "23.123,123"
 * ex: formatNumber(50.00) -> "50"
 * ex: formatNumber(50000) -> "50.000"
 * @param {number} number
 * @param {number} The number of digits to appear after the decimal point
 * @param {string} returnType
 *
 * @returns {string}
 */
export const formatNumber = (_number, numberOfDigitsAfterDecimalPoint = 2) => {
	if (_number !== 0 && !_number && !_.isNumber(_number)) return '';
	const newNumber = (Math.floor(_number * 100) / 100).toFixed(numberOfDigitsAfterDecimalPoint);
	const [integerPart, fractionalPart] = newNumber.split('.');
	const newIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
	if (fractionalPart === '00') {
		return newIntegerPart;
	}
	return [newIntegerPart, fractionalPart].join('.');
};

/**
 * @param {array} list
 * @param {object<{field: string}>} options
 * @returns {object}
 */
export const createMap = (list = [], options = { field: '_id' }) => {
	const map = {};
	list.forEach(item => {
		const mapKey = _.get(item, options.field, '');
		_.set(map, mapKey, item);
	});
	return map;
};

export const isNullOrEmpty = param => {
	let variable = param;
	if (typeof variable === 'string') {
		variable = variable.trim();
	}
	return !(typeof variable !== 'undefined' && variable !== null && variable !== '');
};

export const pushByPath = (obj, path, item) => {
	if (_.has(obj, path)) {
		const arr = _.get(obj, path);
		arr.push(item);
	} else {
		_.set(obj, path, [item]);
	}
};

export const getSelectFilterOption = (input, option = {}) => {
	const label = option.label || option.children;
	return _.includes(_.lowerCase(label), _.lowerCase(input));
};

/**
 * Remove item from array by given path and index
 *
 * Note: this function mutates array.
 *
 * @param {Object|Array} data (object or array)
 * @param {Array|String} The array path to remove given index
 * @param {Number} index to be removed from given data by path
 *
 * @returns {undefined}
 */

export const removeItemFromArrayByPath = (data, arrayPath, indexToRemove) => {
	const array = _.get(data, arrayPath, []);
	if (!_.isEmpty(array)) {
		array.splice(indexToRemove, 1);
	}
};

/**
 * Checks if the object has the all the given paths
 *
 * @param {Object} object
 * @param {Array} The array of paths to check
 *
 * @returns {Boolean}
 */
export const hasPathsAndNonEmptyValues = (object = {}, paths = []) => {
	return paths.every(path => {
		return !!_.get(object, path);
	});
};
