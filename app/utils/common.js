export const removeWhiteSpaceFromString = (text) => {
	if (!text || typeof text !== 'string' || !text.length) return null;

	const cleanedString = text.split(' ').join('').trim();
	return cleanedString || null;
};

export const isValidString = (text) => {
	if (text && typeof text === 'string') return true;
	return false;
};
