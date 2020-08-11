// ╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔════╗╔═╗╔═══════╗   ╔═══════╗╔═══════╗╔═══════╗╔═══════╗   ╔═══════╗╔═══════╗╔═══════╗
// ║ ╔═════╝║ ║      ║ ╔═════╝║ ╔╗ ╔╗ ║║ ╔═════╝║ ╔╗ ║║ ║╚══╗ ╔══╝   ╚══╗ ╔══╝║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝   ║ ╔╗ ╔╗ ║╚═══╗ ╔═╝║ ╔═════╝
// ║ ╚═════╗║ ║      ║ ╚═════╗║ ║║ ║║ ║║ ╚═════╗║ ║║ ║║ ║   ║ ║         ║ ║   ║ ╚═════╗║ ╚═════╗   ║ ║      ║ ║║ ║║ ║    ║ ║  ║ ╚═════╗
// ║ ╔═════╝║ ║      ║ ╔═════╝║ ║║ ║║ ║║ ╔═════╝║ ║║ ║║ ║   ║ ║         ║ ║   ║ ╔═════╝╚═════╗ ║   ║ ║      ║ ║║ ║║ ║    ║ ║  ╚═════╗ ║
// ║ ╚═════╗║ ╚═════╗║ ╚═════╗║ ║║ ║║ ║║ ╚═════╗║ ║║ ╚╝ ║   ║ ║   ╔═╗   ║ ║   ║ ╚═════╗╔═════╝ ║   ║ ║   ╔═╗║ ║║ ║║ ║╔═══╝ ║  ╔═════╝ ║
// ╚═══════╝╚═══════╝╚═══════╝╚═╝╚═╝╚═╝╚═══════╝╚═╝╚════╝   ╚═╝   ╚═╝   ╚═╝   ╚═══════╝╚═══════╝   ╚═╝   ╚═╝╚═╝╚═╝╚═╝╚═════╝  ╚═══════╝

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

const mixedArray = [1, 2, 3, 'a', 'b', 'c'];
const letterArray = 'abcdefghijklmnopqrstuvwxyz'.split('');

const randomMixedElements = [];
const randomLetterElements = [];

while(randomMixedElements.length < 1000) {
    randomMixedElements.push(RandomEngine.getRandomElement(mixedArray));
    randomLetterElements.push(RandomEngine.getRandomElement(letterArray));
}

// ╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔════╗╔═╗╔═══════╗
// ║ ╔═════╝║ ║      ║ ╔═════╝║ ╔╗ ╔╗ ║║ ╔═════╝║ ╔╗ ║║ ║╚══╗ ╔══╝
// ║ ╚═════╗║ ║      ║ ╚═════╗║ ║║ ║║ ║║ ╚═════╗║ ║║ ║║ ║   ║ ║
// ║ ╔═════╝║ ║      ║ ╔═════╝║ ║║ ║║ ║║ ╔═════╝║ ║║ ║║ ║   ║ ║
// ║ ╚═════╗║ ╚═════╗║ ╚═════╗║ ║║ ║║ ║║ ╚═════╗║ ║║ ╚╝ ║   ║ ║
// ╚═══════╝╚═══════╝╚═══════╝╚═╝╚═╝╚═╝╚═══════╝╚═╝╚════╝   ╚═╝

describe('Element', function() {
    // ╔═══════╗╔═══════╗╔═══════╗         ╔═══════╗╔═══════╗╔════╗╔═╗╔═══════╗╔═══════╗╔═══════╗         ╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔════╗╔═╗╔═══════╗
    // ║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝         ║ ╔═══╗ ║║ ╔═══╗ ║║ ╔╗ ║║ ║╚╗ ╔══╗ ║║ ╔═══╗ ║║ ╔╗ ╔╗ ║         ║ ╔═════╝║ ║      ║ ╔═════╝║ ╔╗ ╔╗ ║║ ╔═════╝║ ╔╗ ║║ ║╚══╗ ╔══╝
    // ║ ║ ╔═══╗║ ╚═════╗   ║ ║   ╔═══════╗║ ╚═══╝ ║║ ╚═══╝ ║║ ║║ ║║ ║ ║ ║  ║ ║║ ║   ║ ║║ ║║ ║║ ║╔═══════╗║ ╚═════╗║ ║      ║ ╚═════╗║ ║║ ║║ ║║ ╚═════╗║ ║║ ║║ ║   ║ ║
    // ║ ║ ╚═╗ ║║ ╔═════╝   ║ ║   ╚═══════╝║ ╔═╗ ╔═╝║ ╔═══╗ ║║ ║║ ║║ ║ ║ ║  ║ ║║ ║   ║ ║║ ║║ ║║ ║╚═══════╝║ ╔═════╝║ ║      ║ ╔═════╝║ ║║ ║║ ║║ ╔═════╝║ ║║ ║║ ║   ║ ║
    // ║ ╚═══╝ ║║ ╚═════╗   ║ ║            ║ ║ ║ ╚═╗║ ║   ║ ║║ ║║ ╚╝ ║╔╝ ╚══╝ ║║ ╚═══╝ ║║ ║║ ║║ ║         ║ ╚═════╗║ ╚═════╗║ ╚═════╗║ ║║ ║║ ║║ ╚═════╗║ ║║ ╚╝ ║   ║ ║
    // ╚═══════╝╚═══════╝   ╚═╝            ╚═╝ ╚═══╝╚═╝   ╚═╝╚═╝╚════╝╚═══════╝╚═══════╝╚═╝╚═╝╚═╝         ╚═══════╝╚═══════╝╚═══════╝╚═╝╚═╝╚═╝╚═══════╝╚═╝╚════╝   ╚═╝

    describe('#getRandomElement(array)', function () {
        describe('#getRandomElement([])', function () {
            it('Should return undefined', () => {
                expect(RandomEngine.getRandomElement([])).to.equal(undefined);
            });
        });

        describe('#getRandomElement([1, 2, 3, "a", "b", "c"])', function () {
            it('Should return a random element', () => {
                expect(RandomEngine.getRandomElement(mixedArray)).to.satisfy((element) => {
                    return mixedArray.includes(element);
                });
            });

            it('Should contain at least one 1 number', () => {
                expect(randomMixedElements).to.include(1);
            });

            it('Should contain at least one 1 number', () => {
                expect(randomMixedElements).to.include(2);
            });

            it('Should contain at least one 1 number', () => {
                expect(randomMixedElements).to.include(3);
            });

            it('Should contain at least one "a" letter', () => {
                expect(randomMixedElements).to.include("a");
            });

            it('Should contain at least one "b" letter', () => {
                expect(randomMixedElements).to.include("b");
            });

            it('Should contain at least one "c" letter', () => {
                expect(randomMixedElements).to.include("c");
            });

            it('Should not contain any undefined value', () => {
                expect(randomMixedElements).to.not.include(undefined);
            });

            it('Should only contain random elements', () => {
                expect(randomMixedElements).to.satisfy((randomElements) => {
                    return randomElements.every((randomElement) => {
                        return mixedArray.includes(randomElement);
                    });
                });
            });
        });

        describe('#getRandomElement("abcdefghijklmnopqrstuvwxyz".split(""))', function () {
            it('Should return a random element', () => {
                expect(RandomEngine.getRandomElement(letterArray)).to.satisfy((element) => {
                    return letterArray.includes(element);
                });
            });

            it('Should contain at least one "a" letter', () => {
                expect(randomLetterElements).to.include("a");
            });

            it('Should contain at least one "b" letter', () => {
                expect(randomLetterElements).to.include("b");
            });

            it('Should contain at least one "c" letter', () => {
                expect(randomLetterElements).to.include("c");
            });

            it('Should contain at least one "z" letter', () => {
                expect(randomLetterElements).to.include("z");
            });

            it('Should not contain any undefined value', () => {
                expect(randomLetterElements).to.not.include(undefined);
            });

            it('Should only contain random elements', () => {
                expect(randomLetterElements).to.satisfy((randomElements) => {
                    return randomElements.every((randomElement) => {
                        return letterArray.includes(randomElement);
                    });
                });
            });

            it('Should only contain random letter elements', () => {
                expect(randomLetterElements).to.satisfy((randomElements) => {
                    return randomElements.every((randomElement) => {
                        return UtilityEngine.hasLetterCount(randomElement, 1, 1);
                    });
                });
            });
        });


        describe('#getRandomElement(ARRAY)', function () {
            it('Should return undefined when array parameter is an empty array', () => {
                expect(RandomEngine.getRandomElement([])).to.equal(undefined);
            });

            it('Should return element when array parameter is array with one element', () => {
                expect([1].includes(RandomEngine.getRandomElement([1])));
            });

            it('Should return element when array parameter is array with many elements', () => {
                expect([1, 2, 3].includes(RandomEngine.getRandomElement([1, 2, 3])));
            });



            it('Should throw type error when the array parameter is empty', () => {
                expect(() => RandomEngine.getRandomInteger()).to.throw(TypeError);
            });

            it('Should throw type error when the array parameter is null', () => {
                expect(() => RandomEngine.getRandomInteger(null)).to.throw(TypeError);
            });

            it('Should throw type error when the array parameter is undefined', () => {
                expect(() => RandomEngine.getRandomInteger(undefined)).to.throw(TypeError);
            });

            it('Should throw type error when the array parameter is a function', () => {
                expect(() => RandomEngine.getRandomInteger(function() {})).to.throw(TypeError);
            });

            it('Should throw type error when the array parameter is true boolean', () => {
                expect(() => RandomEngine.getRandomInteger(true)).to.throw(TypeError);
            });

            it('Should throw type error when the array parameter is false boolean', () => {
                expect(() => RandomEngine.getRandomInteger(false)).to.throw(TypeError);
            });

            it('Should throw type error when the array parameter is a wrapped primitive number', () => {
                expect(() => RandomEngine.getRandomInteger(new Number('1'))).to.throw(TypeError);
            });

            it('Should throw type error when the array parameter is a string', () => {
                expect(() => RandomEngine.getRandomInteger('string')).to.throw(TypeError);
            });

            it('Should throw type error when the array parameter is a primitive string', () => {
                expect(() => RandomEngine.getRandomInteger(String('string'))).to.throw(TypeError);
            });

            it('Should throw type error when the array parameter is a wrapped primitive string', () => {
                expect(() => RandomEngine.getRandomInteger(new String('string'))).to.throw(TypeError);
            });

            it('Should throw type error when the array parameter is a map', () => {
                expect(() => RandomEngine.getRandomInteger(new Map())).to.throw(TypeError);
            });

            it('Should throw type error when the array parameter is a date', () => {
                expect(() => RandomEngine.getRandomInteger(new Date())).to.throw(TypeError);
            });

            it('Should throw type error when the array parameter is a class declaration', () => {
                expect(() => RandomEngine.getRandomInteger(class Class {})).to.throw(TypeError);
            });

            it('Should throw type error when the array parameter is a class instance', () => {
                expect(() => RandomEngine.getRandomInteger(new (class Class {}))).to.throw(TypeError);
            });

            it('Should throw type error when the array parameter is a class instance', () => {
                expect(() => RandomEngine.getRandomInteger(new (class Class {})())).to.throw(TypeError);
            });
        });
    });
});