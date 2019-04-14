const MAX_SAFE_INTEGER = require('./maxSafeInteger');

const isSafeNumber = (value) => typeof value === 'number' && Math.abs(value) <= MAX_SAFE_INTEGER;

module.exports = isSafeNumber;
