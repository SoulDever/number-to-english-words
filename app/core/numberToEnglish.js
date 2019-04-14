const isSafeNumber = require('./isSafeNumber');

const TEN = 10;
const ONE_HUNDRED = 100;
const ONE_THOUSAND = 1000;
const ONE_MILLION = 1000000;
const ONE_BILLION = 1000000000;
const ONE_TRILLION = 1000000000000;
const ONE_QUADRILLION = 1000000000000000;
const MAX = 2000000000000000;

const FROM_ZERO_TO_NINETEEN = [
	'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
	'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
];

const TENTHS = [
	'zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
];

function generateWords(number) {
	let remainder, word, words = arguments[1];

	// Return words
	if (number === 0) {
		if(!words)
			return 'zero';

		const maxIndexForWords = words.length - 1;

		const newWords = words.map(
			function(item, index) {
				if(index < maxIndexForWords - 1)
					return item.replace(/ and$/, '');
				else
					return item;
			}
		);

		return newWords.join(' ').replace(/ and$/, '');
	}

	// Edge case for words!
	if (!words) {
		words = [];
	}

	// If negative prepend “negative”
	if (number < 0) {
		words.push('negative');
		number = Math.abs(number);
	}

	if (number < 20) {
		remainder = 0;
		word = FROM_ZERO_TO_NINETEEN[number];

	} else if (number < ONE_HUNDRED) {
		remainder = number % TEN;
		word = TENTHS[Math.floor(number / TEN)];
		// Check reminder to add “-”
		if (remainder) {
			word += '-' + FROM_ZERO_TO_NINETEEN[remainder];
			remainder = 0;
		}

	} else if (number < ONE_THOUSAND) {
		remainder = number % ONE_HUNDRED;
		word = generateWords(Math.floor(number / ONE_HUNDRED)) + ' hundred and';

	} else if (number < ONE_MILLION) {
		remainder = number % ONE_THOUSAND;
		word = generateWords(Math.floor(number / ONE_THOUSAND)) + ' thousand and';

	} else if (number < ONE_BILLION) {
		remainder = number % ONE_MILLION;
		word = generateWords(Math.floor(number / ONE_MILLION)) + ' million and';

	} else if (number < ONE_TRILLION) {
		remainder = number % ONE_BILLION;
		word = generateWords(Math.floor(number / ONE_BILLION)) + ' billion and';

	} else if (number < ONE_QUADRILLION) {
		remainder = number % ONE_TRILLION;
		word = generateWords(Math.floor(number / ONE_TRILLION)) + ' trillion and';

	} else if (number <= MAX) {
		remainder = number % ONE_QUADRILLION;
		word = generateWords(Math.floor(number / ONE_QUADRILLION)) + ' quadrillion and';
	}

	words.push(word);
	return generateWords(remainder, words);
}

const toEnglishWords = (number) => {
	if(number === Number.POSITIVE_INFINITY){
		return 'infinity'
	}

	if(number === Number.NEGATIVE_INFINITY){
		return 'negative infinity'
	}

	const num = parseInt(number, 10);

	if (!isSafeNumber(num)) {
		// Here check type and  ±2000000000000000 requirement fro value
		throw new RangeError(
			'Input is not a number or it’s either too large or too small.'
		);
	}

	return generateWords(num);
}

module.exports = toEnglishWords;
