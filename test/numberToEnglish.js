/*!
 * Number-To-English-Words util
 * @version v1.0.0
 * @link https://github.com/SoulDever
 * @author Lorenzo Balsano (https://github.com/SoulDever)
 */
(function () {
    'use strict';

    var root = typeof self == 'object' && self.self === self && self ||
        typeof global == 'object' && global.global === global && global ||
        this;

    // ========== file: /Users/lorenzobalsano/Documents/Developer/Freelancer/number-to-english-words/app/core/isSafeNumber.js ==========


var isSafeNumber = function isSafeNumber(value) {
  return typeof value === 'number' && Math.abs(value) <= MAX_SAFE_INTEGER;
};


// ========== file: /Users/lorenzobalsano/Documents/Developer/Freelancer/number-to-english-words/app/core/numberToEnglish.js ==========


var TEN = 10;
var ONE_HUNDRED = 100;
var ONE_THOUSAND = 1000;
var ONE_MILLION = 1000000;
var ONE_BILLION = 1000000000;
var ONE_TRILLION = 1000000000000;
var ONE_QUADRILLION = 1000000000000000;
var MAX = 2000000000000000;
var FROM_ZERO_TO_NINETEEN = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
var TENTHS = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

function generateWords(number) {
  var remainder,
      word,
      words = arguments[1]; // Return words

  if (number === 0) {
    if (!words) return 'zero';
    var maxIndexForWords = words.length - 1;
    var newWords = words.map(function (item, index) {
      if (index < maxIndexForWords - 1) return item.replace(/ and$/, '');else return item;
    });
    return newWords.join(' ').replace(/ and$/, '');
  } // Edge case for words!


  if (!words) {
    words = [];
  } // If negative prepend “negative”


  if (number < 0) {
    words.push('negative');
    number = Math.abs(number);
  }

  if (number < 20) {
    remainder = 0;
    word = FROM_ZERO_TO_NINETEEN[number];
  } else if (number < ONE_HUNDRED) {
    remainder = number % TEN;
    word = TENTHS[Math.floor(number / TEN)]; // Check reminder to add “-”

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

var toEnglishWords = function toEnglishWords(number) {
  if (number === Number.POSITIVE_INFINITY) {
    return 'infinity';
  }

  if (number === Number.NEGATIVE_INFINITY) {
    return 'negative infinity';
  }

  var num = parseInt(number, 10);

  if (!isSafeNumber(num)) {
    // Here check type and  ±2000000000000000 requirement fro value
    throw new RangeError('Input is not a number or it’s either too large or too small.');
  }

  return generateWords(num);
};



    var numberToEnglishWords = {
        toEnglishWords: toEnglishWords,
    };

    if (typeof exports != 'undefined') {
        if (typeof module != 'undefined' && module.exports) {
            exports = module.exports = numberToEnglishWords;
        }
        exports.numberToEnglishWords = numberToEnglishWords;
    } else {
        root.numberToEnglishWords = numberToEnglishWords;
    }

}());