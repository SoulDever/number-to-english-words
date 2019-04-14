'use strict';

var index = typeof require !== 'undefined' ? require('../../app/core') : window.numberToEnglishWords;

describe('index', function () {
    it('should expose a toEnglishWords method', function () {
        expect(index.toEnglishWords).toEqual(jasmine.any(Function));
    });
});
