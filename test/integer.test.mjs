// ╔═══════╗╔════╗╔═╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗   ╔═══════╗╔═══════╗╔═══════╗╔═══════╗   ╔═══════╗╔═══════╗╔═══════╗
// ╚══╗ ╔══╝║ ╔╗ ║║ ║╚══╗ ╔══╝║ ╔═════╝║ ╔═════╝║ ╔═════╝║ ╔═══╗ ║   ╚══╗ ╔══╝║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝   ║ ╔╗ ╔╗ ║╚═══╗ ╔═╝║ ╔═════╝
//    ║ ║   ║ ║║ ║║ ║   ║ ║   ║ ╚═════╗║ ║ ╔═══╗║ ╚═════╗║ ╚═══╝ ║      ║ ║   ║ ╚═════╗║ ╚═════╗   ║ ║      ║ ║║ ║║ ║    ║ ║  ║ ╚═════╗
//    ║ ║   ║ ║║ ║║ ║   ║ ║   ║ ╔═════╝║ ║ ╚═╗ ║║ ╔═════╝║ ╔═╗ ╔═╝      ║ ║   ║ ╔═════╝╚═════╗ ║   ║ ║      ║ ║║ ║║ ║    ║ ║  ╚═════╗ ║
// ╔══╝ ╚══╗║ ║║ ╚╝ ║   ║ ║   ║ ╚═════╗║ ╚═══╝ ║║ ╚═════╗║ ║ ║ ╚═╗╔═╗   ║ ║   ║ ╚═════╗╔═════╝ ║   ║ ║   ╔═╗║ ║║ ║║ ║╔═══╝ ║  ╔═════╝ ║
// ╚═══════╝╚═╝╚════╝   ╚═╝   ╚═══════╝╚═══════╝╚═══════╝╚═╝ ╚═══╝╚═╝   ╚═╝   ╚═══════╝╚═══════╝   ╚═╝   ╚═╝╚═╝╚═╝╚═╝╚═════╝  ╚═══════╝

'use strict';   // Extend JavaScript strict mode to the entire script

// ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
// ╚══╗ ╔══╝║ ╔╗ ╔╗ ║║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═══╗ ║╚══╗ ╔══╝
//    ║ ║   ║ ║║ ║║ ║║ ╚═══╝ ║║ ║   ║ ║║ ╚═══╝ ║   ║ ║
//    ║ ║   ║ ║║ ║║ ║║ ╔═════╝║ ║   ║ ║║ ╔═╗ ╔═╝   ║ ║
// ╔══╝ ╚══╗║ ║║ ║║ ║║ ║      ║ ╚═══╝ ║║ ║ ║ ╚═╗   ║ ║
// ╚═══════╝╚═╝╚═╝╚═╝╚═╝      ╚═══════╝╚═╝ ╚═══╝   ╚═╝

import RandomEngine from '../dist/index.js';

import UtilityEngine from "@sarc-test/utility-engine";

import chai from 'chai';

const expect = chai.expect;

// ╔═══════╗╔═══════╗╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗
// ╚╗ ╔══╗ ║║ ╔═════╝║ ╔═════╝║ ║      ║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═════╝
//  ║ ║  ║ ║║ ╚═════╗║ ║      ║ ║      ║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═════╗
//  ║ ║  ║ ║║ ╔═════╝║ ║      ║ ║      ║ ╔═══╗ ║║ ╔═╗ ╔═╝║ ╔═════╝
// ╔╝ ╚══╝ ║║ ╚═════╗║ ╚═════╗║ ╚═════╗║ ║   ║ ║║ ║ ║ ╚═╗║ ╚═════╗
// ╚═══════╝╚═══════╝╚═══════╝╚═══════╝╚═╝   ╚═╝╚═╝ ╚═══╝╚═══════╝

const minimumSafeInteger = Number.MIN_SAFE_INTEGER;
const maximumSafeInteger = Number.MAX_SAFE_INTEGER;

const randomIntegers0to1 = [];
const randomIntegers1to1 = [];
const randomIntegers0to10 = [];

const randomIntegersMinus1to1 = [];
const randomIntegersMinus10to10 = [];

const randomMinimumSafeIntegers = [];
const randomMaximumSafeIntegers = [];

while(randomIntegers0to1.length < 100000) {
    randomIntegers0to1.push(RandomEngine.getRandomInteger(0, 1));
    randomIntegers1to1.push(RandomEngine.getRandomInteger(1, 1));
    randomIntegers0to10.push(RandomEngine.getRandomInteger(0, 10));

    randomIntegersMinus1to1.push(RandomEngine.getRandomInteger(-1, 1));
    randomIntegersMinus10to10.push(RandomEngine.getRandomInteger(-10, 10));

    randomMinimumSafeIntegers.push(RandomEngine.getRandomInteger(minimumSafeInteger, minimumSafeInteger + 1));
    randomMaximumSafeIntegers.push(RandomEngine.getRandomInteger(maximumSafeInteger - 1, maximumSafeInteger));
}

// ╔═══════╗╔════╗╔═╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
// ╚══╗ ╔══╝║ ╔╗ ║║ ║╚══╗ ╔══╝║ ╔═════╝║ ╔═════╝║ ╔═════╝║ ╔═══╗ ║
//    ║ ║   ║ ║║ ║║ ║   ║ ║   ║ ╚═════╗║ ║ ╔═══╗║ ╚═════╗║ ╚═══╝ ║
//    ║ ║   ║ ║║ ║║ ║   ║ ║   ║ ╔═════╝║ ║ ╚═╗ ║║ ╔═════╝║ ╔═╗ ╔═╝
// ╔══╝ ╚══╗║ ║║ ╚╝ ║   ║ ║   ║ ╚═════╗║ ╚═══╝ ║║ ╚═════╗║ ║ ║ ╚═╗
// ╚═══════╝╚═╝╚════╝   ╚═╝   ╚═══════╝╚═══════╝╚═══════╝╚═╝ ╚═══╝

describe('Integer', function() {
// ╔═══════╗╔═══════╗╔═══════╗         ╔═══════╗╔═══════╗╔════╗╔═╗╔═══════╗╔═══════╗╔═══════╗         ╔═══════╗╔════╗╔═╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
// ║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝         ║ ╔═══╗ ║║ ╔═══╗ ║║ ╔╗ ║║ ║╚╗ ╔══╗ ║║ ╔═══╗ ║║ ╔╗ ╔╗ ║         ╚══╗ ╔══╝║ ╔╗ ║║ ║╚══╗ ╔══╝║ ╔═════╝║ ╔═════╝║ ╔═════╝║ ╔═══╗ ║
// ║ ║ ╔═══╗║ ╚═════╗   ║ ║   ╔═══════╗║ ╚═══╝ ║║ ╚═══╝ ║║ ║║ ║║ ║ ║ ║  ║ ║║ ║   ║ ║║ ║║ ║║ ║╔═══════╗   ║ ║   ║ ║║ ║║ ║   ║ ║   ║ ╚═════╗║ ║ ╔═══╗║ ╚═════╗║ ╚═══╝ ║
// ║ ║ ╚═╗ ║║ ╔═════╝   ║ ║   ╚═══════╝║ ╔═╗ ╔═╝║ ╔═══╗ ║║ ║║ ║║ ║ ║ ║  ║ ║║ ║   ║ ║║ ║║ ║║ ║╚═══════╝   ║ ║   ║ ║║ ║║ ║   ║ ║   ║ ╔═════╝║ ║ ╚═╗ ║║ ╔═════╝║ ╔═╗ ╔═╝
// ║ ╚═══╝ ║║ ╚═════╗   ║ ║            ║ ║ ║ ╚═╗║ ║   ║ ║║ ║║ ╚╝ ║╔╝ ╚══╝ ║║ ╚═══╝ ║║ ║║ ║║ ║         ╔══╝ ╚══╗║ ║║ ╚╝ ║   ║ ║   ║ ╚═════╗║ ╚═══╝ ║║ ╚═════╗║ ║ ║ ╚═╗
// ╚═══════╝╚═══════╝   ╚═╝            ╚═╝ ╚═══╝╚═╝   ╚═╝╚═╝╚════╝╚═══════╝╚═══════╝╚═╝╚═╝╚═╝         ╚═══════╝╚═╝╚════╝   ╚═╝   ╚═══════╝╚═══════╝╚═══════╝╚═╝ ╚═══╝

    describe('#getRandomInteger(minimum, maximum)', function() {
        describe('#getRandomInteger(0, 1)', function() {
            it('Should return a random integer between 0 and 1 inclusively', () => {
                expect(RandomEngine.getRandomInteger(0, 1)).to.satisfy((integer) => {
                    return UtilityEngine.isInteger(integer, 0, 1);
                });
            });

            it('Should contain at least one 0 integer', () => {
                expect(randomIntegers0to1).to.include(0);
            });

            it('Should contain at least one 1 integer', () => {
                expect(randomIntegers0to1).to.include(1);
            });

            it('Should only contain random integers', () => {
                expect(randomIntegers0to1).to.satisfy((randomInteger) => {
                    return randomInteger.every((randomInteger) => {
                        return UtilityEngine.isInteger(randomInteger);
                    });
                });
            });
        });

        describe('#getRandomInteger(1, 1)', function() {
            it('Should return a random integer between 1 and 1 inclusively', () => {
                expect(RandomEngine.getRandomInteger(1, 1)).to.satisfy((integer) => {
                    return UtilityEngine.isInteger(integer, 1, 1);
                });
            });

            it('Should only contain 1 integers', () => {
                expect(randomIntegers1to1).to.satisfy((randomInteger) => {
                    return randomInteger.every((randomInteger) => {
                        return UtilityEngine.isInteger(randomInteger, 1, 1);
                    });
                });
            });
        });

        describe('#getRandomInteger(0, 10)', function() {
            it('Should return a random integer between 0 and 10 inclusively', () => {
                expect(RandomEngine.getRandomInteger(0, 10)).to.satisfy((integer) => {
                    return UtilityEngine.isInteger(integer, 0, 10);
                });
            });

            it('Should contain at least one 0 integer', () => {
                expect(randomIntegers0to10).to.include(0);
            });

            it('Should contain at least one -10 integer', () => {
                expect(randomIntegers0to10).to.include(10);
            });


            it('Should only contain random integers', () => {
                expect(randomIntegers0to10).to.satisfy((randomInteger) => {
                    return randomInteger.every((randomInteger) => {
                        return UtilityEngine.isInteger(randomInteger, 0, 10);
                    });
                });
            });
        });

        describe('#getRandomInteger(-1, 1)', function() {
            it('Should return a random integer between 0 and 10 inclusively', () => {
                expect(RandomEngine.getRandomInteger(-1, 1)).to.satisfy((integer) => {
                    return UtilityEngine.isInteger(integer, -1, 1);
                });
            });

            it('Should contain at least one 1 integer', () => {
                expect(randomIntegersMinus1to1).to.include(1);
            });

            it('Should contain at least one -1 integer', () => {
                expect(randomIntegersMinus1to1).to.include(-1);
            });


            it('Should only contain random integers', () => {
                expect(randomIntegersMinus1to1).to.satisfy((randomInteger) => {
                    return randomInteger.every((randomInteger) => {
                        return UtilityEngine.isInteger(randomInteger, -1, 1);
                    });
                });
            });
        });

        describe('#getRandomInteger(-10, 10)', function() {
            it('Should return a random integer between -10 and 10 inclusively', () => {
                expect(RandomEngine.getRandomInteger(-10, 10)).to.satisfy((integer) => {
                    return UtilityEngine.isInteger(integer, -10, 10);
                });
            });

            it('Should contain at least one 10 integer', () => {
                expect(randomIntegersMinus10to10).to.include(10);
            });

            it('Should contain at least one -10 integer', () => {
                expect(randomIntegersMinus10to10).to.include(-10);
            });


            it('Should only contain random integers', () => {
                expect(randomIntegersMinus10to10).to.satisfy((randomInteger) => {
                    return randomInteger.every((randomInteger) => {
                        return UtilityEngine.isInteger(randomInteger, -10, 10);
                    });
                });
            });
        });

        describe('#getRandomInteger(Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER + 1)', function() {
            it('Should return a random integer between MIN_SAFE_INTEGER and MIN_SAFE_INTEGER + 1 inclusively', () => {
                expect(RandomEngine.getRandomInteger(minimumSafeInteger, minimumSafeInteger + 1)).to.satisfy((integer) => {
                    return UtilityEngine.isInteger(integer, minimumSafeInteger, minimumSafeInteger + 1);
                });
            });

            it('Should contain at least one Number.MIN_SAFE_INTEGER', () => {
                expect(randomMinimumSafeIntegers).to.include(minimumSafeInteger);
            });

            it('Should contain at least one Number.MIN_SAFE_INTEGER + 1', () => {
                expect(randomMinimumSafeIntegers).to.include(minimumSafeInteger + 1);
            });


            it('Should only contain random integers', () => {
                expect(randomMinimumSafeIntegers).to.satisfy((randomInteger) => {
                    return randomInteger.every((randomInteger) => {
                        return UtilityEngine.isInteger(randomInteger, minimumSafeInteger, minimumSafeInteger + 1);
                    });
                });
            });
        });

        describe('#getRandomInteger(Number.MAX_SAFE_INTEGER - 1, Number.MAX_SAFE_INTEGER)', function() {
            it('Should return a random integer between MAX_SAFE_INTEGER - 1 and MAX_SAFE_INTEGER inclusively', () => {
                expect(RandomEngine.getRandomInteger(maximumSafeInteger - 1, maximumSafeInteger)).to.satisfy((integer) => {
                    return UtilityEngine.isInteger(integer, maximumSafeInteger - 1, maximumSafeInteger);
                });
            });

            it('Should contain at least one Number.MAX_SAFE_INTEGER', () => {
                expect(randomMaximumSafeIntegers).to.include(maximumSafeInteger);
            });

            it('Should contain at least one Number.MAX_SAFE_INTEGER - 1', () => {
                expect(randomMaximumSafeIntegers).to.include(maximumSafeInteger - 1);
            });


            it('Should only contain random integers', () => {
                expect(randomMaximumSafeIntegers).to.satisfy((randomInteger) => {
                    return randomInteger.every((randomInteger) => {
                        return UtilityEngine.isInteger(randomInteger, maximumSafeInteger - 1, maximumSafeInteger);
                    });
                });
            });
        });

        describe('#getRandomInteger(MINIMUM, maximum)', function() {
            it('Should return number between 0 and 1 inclusively when minimum parameter is 0', () => {
                expect(RandomEngine.getRandomInteger(0, 1)).to.be.within(0, 1);
            });


            it('Should throw range error when minimum parameter is bigger than maximum', () => {
                expect(() => RandomEngine.getRandomInteger(1, 0)).to.throw(RangeError);
            });

            it('Should throw range error when minimum parameter parameter is smaller than minimum safe integer', () => {
                expect(() => RandomEngine.getRandomInteger(Number.MIN_SAFE_INTEGER - 1, 1)).to.throw(TypeError);
            });

            it('Should throw range error when minimum parameter parameter is smaller than minimum safe integer', () => {
                expect(() => RandomEngine.getRandomInteger(Number.MAX_SAFE_INTEGER + 1, 1)).to.throw(TypeError);
            });

            it('Should throw type error when minimum parameter is empty', () => {
                expect(() => RandomEngine.getRandomInteger()).to.throw(TypeError);
            });

            it('Should throw type error when minimum parameter is null', () => {
                expect(() => RandomEngine.getRandomInteger(null, 1)).to.throw(TypeError);
            });

            it('Should throw type error when minimum parameter is undefined', () => {
                expect(() => RandomEngine.getRandomInteger(undefined, 1)).to.throw(TypeError);
            });

            it('Should throw type error when minimum parameter is a function', () => {
                expect(() => RandomEngine.getRandomInteger(function() {}, 1)).to.throw(TypeError);
            });

            it('Should throw type error when minimum parameter is true boolean', () => {
                expect(() => RandomEngine.getRandomInteger(true, 1)).to.throw(TypeError);
            });

            it('Should throw type error when minimum parameter is false boolean', () => {
                expect(() => RandomEngine.getRandomInteger(false, 1)).to.throw(TypeError);
            });

            it('Should throw type error when minimum parameter is a wrapped primitive number', () => {
                expect(() => RandomEngine.getRandomInteger(new Number('1'), 1)).to.throw(TypeError);
            });

            it('Should throw type error when minimum parameter is a string', () => {
                expect(() => RandomEngine.getRandomInteger('string', 1)).to.throw(TypeError);
            });

            it('Should throw type error when minimum parameter is a primitive string', () => {
                expect(() => RandomEngine.getRandomInteger(String('string'), 1)).to.throw(TypeError);
            });

            it('Should throw type error when minimum parameter is a wrapped primitive string', () => {
                expect(() => RandomEngine.getRandomInteger(new String('string'), 1)).to.throw(TypeError);
            });

            it('Should throw type error when minimum parameter is an array', () => {
                expect(() => RandomEngine.getRandomInteger([], 1)).to.throw(TypeError);
            });

            it('Should throw type error when minimum parameter is a map', () => {
                expect(() => RandomEngine.getRandomInteger(new Map(), 1)).to.throw(TypeError);
            });

            it('Should throw type error when value is a date', () => {
                expect(() => RandomEngine.getRandomInteger(new Date(), 1)).to.throw(TypeError);
            });

            it('Should throw type error when value is a class declaration', () => {
                expect(() => RandomEngine.getRandomInteger(class Class {}, 1)).to.throw(TypeError);
            });

            it('Should throw type error when value is a class instance', () => {
                expect(() => RandomEngine.getRandomInteger(new (class Class {}), 1)).to.throw(TypeError);
            });

            it('Should throw type error when value is a class instance', () => {
                expect(() => RandomEngine.getRandomInteger(new (class Class {})(), 1)).to.throw(TypeError);
            });
        });

        describe('#getRandomInteger(minimum, MAXIMUM)', function() {
            it('Should return number between 0 and 1 inclusively when minimum parameter is 0', () => {
                expect(RandomEngine.getRandomInteger(0, 1)).to.be.within(0, 1);
            });


            it('Should throw range error when maximum parameter is smaller than minimum', () => {
                expect(() => RandomEngine.getRandomInteger(1, 0)).to.throw(RangeError);
            });

            it('Should throw range error when maximum parameter parameter is smaller than minimum safe integer', () => {
                expect(() => RandomEngine.getRandomInteger(0, Number.MIN_SAFE_INTEGER - 1)).to.throw(TypeError);
            });

            it('Should throw range error when maximum parameter parameter is smaller than minimum safe integer', () => {
                expect(() => RandomEngine.getRandomInteger(0, Number.MAX_SAFE_INTEGER + 1)).to.throw(TypeError);
            });

            it('Should throw type error when maximum parameter is empty', () => {
                expect(() => RandomEngine.getRandomInteger(0)).to.throw(TypeError);
            });

            it('Should throw type error when maximum parameter is null', () => {
                expect(() => RandomEngine.getRandomInteger(0, null)).to.throw(TypeError);
            });

            it('Should throw type error when maximum parameter is undefined', () => {
                expect(() => RandomEngine.getRandomInteger(0, undefined)).to.throw(TypeError);
            });

            it('Should throw type error when maximum parameter is a function', () => {
                expect(() => RandomEngine.getRandomInteger(0, function() {})).to.throw(TypeError);
            });

            it('Should throw type error when maximum parameter is true boolean', () => {
                expect(() => RandomEngine.getRandomInteger(0, true)).to.throw(TypeError);
            });

            it('Should throw type error when maximum parameter is false boolean', () => {
                expect(() => RandomEngine.getRandomInteger(0, false)).to.throw(TypeError);
            });

            it('Should throw type error when maximum parameter is a wrapped primitive number', () => {
                expect(() => RandomEngine.getRandomInteger(0, new Number('1'))).to.throw(TypeError);
            });

            it('Should throw type error when maximum parameter is a string', () => {
                expect(() => RandomEngine.getRandomInteger(0, 'string')).to.throw(TypeError);
            });

            it('Should throw type error when maximum parameter is a primitive string', () => {
                expect(() => RandomEngine.getRandomInteger(0, String('string'))).to.throw(TypeError);
            });

            it('Should throw type error when maximum parameter is a wrapped primitive string', () => {
                expect(() => RandomEngine.getRandomInteger(0, new String('string'))).to.throw(TypeError);
            });

            it('Should throw type error when maximum parameter is an array', () => {
                expect(() => RandomEngine.getRandomInteger(0, [])).to.throw(TypeError);
            });

            it('Should throw type error when maximum parameter is a map', () => {
                expect(() => RandomEngine.getRandomInteger(0, new Map())).to.throw(TypeError);
            });

            it('Should throw type error when maximum parameter is a date', () => {
                expect(() => RandomEngine.getRandomInteger(0, new Date())).to.throw(TypeError);
            });

            it('Should throw type error when maximum parameter is a class declaration', () => {
                expect(() => RandomEngine.getRandomInteger(0, class Class {})).to.throw(TypeError);
            });

            it('Should throw type error when maximum parameter is a class instance', () => {
                expect(() => RandomEngine.getRandomInteger(0, new (class Class {}))).to.throw(TypeError);
            });

            it('Should throw type error when maximum parameter is a class instance', () => {
                expect(() => RandomEngine.getRandomInteger(0, new (class Class {})())).to.throw(TypeError);
            });
        });
    });

});