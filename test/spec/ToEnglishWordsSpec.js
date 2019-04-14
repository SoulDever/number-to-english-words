'use strict';

var MAX_SAFE_INTEGER = 2000000000000000;

var toEnglishWord = typeof require !== 'undefined' ? require('../../app/core') : window.numberToEnglishWords.toEnglishWords;

describe('toEnglishWord', function () {
    var tests = [
        { input: 1, expect: "one" },
        { input: 5, expect: "five" },
        { input: 10, expect: "ten" },
        { input: 11, expect: "eleven" },
        { input: 12, expect: "twelve" },
        { input: 18, expect: "eighteen" },
        { input: 20, expect: "twenty" },
        { input: 19000, expect: "nineteen thousand" },
        { input: 319000, expect: "three hundred and nineteen thousand" },
        { input: 1000000, expect: "one million" },
        { input: 1000001, expect: "one million and one" },
        { input: 1011011, expect: "one million eleven thousand and eleven" },
        { input: 1101101, expect: "one million one hundred and one thousand one hundred and one" },
        { input: -6000006, expect: "negative six million and six" },
        { input: 100023999, expect: "one hundred million twenty-three thousand nine hundred and ninety-nine" },
        //{ input: 3.14159, expect: "three point one four one five nine" },
        //{ input: 0.0001, expect: "zero point zero zero zero one" },
        //{ input: -65721.55531, expect: "negative sixty-five thousand seven hundred and twenty-one point five five five three one" },
        { input: 0, expect: "zero" },
        { input: "6", expect: "six" },
        { input: Number.POSITIVE_INFINITY, expect: "infinity" },
        { input: Number.NEGATIVE_INFINITY, expect: "negative infinity" },
        { input: -50, expect: "negative fifty" },
        { input: -1234567899, expect: "negative one billion two hundred and thirty-four million five hundred and sixty-seven thousand eight hundred and ninety-nine" },
    ];

    function addTest(test) {
        it('should, if passed ' + test.input + ', return ' + test.expect, function () {
            expect(toEnglishWord(test.input)).toEqual(test.expect);
        });
    }

    tests.forEach(addTest);

    // Extend check for value and not only for type!
    it('should throw an error if input is not a number or it’s either greater than ' +  MAX_SAFE_INTEGER + ' or less than -' + MAX_SAFE_INTEGER, function() {
        var unsafe = 'not-a-number';

        expect(function() {
            toEnglishWord(unsafe);
        }).toThrowError(/Input is not a number or it’s either too large or too small./);
    });
});
