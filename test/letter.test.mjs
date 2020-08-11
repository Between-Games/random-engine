// ╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗   ╔═══════╗╔═══════╗╔═══════╗╔═══════╗   ╔═══════╗╔═══════╗╔═══════╗
// ║ ║      ║ ╔═════╝╚══╗ ╔══╝╚══╗ ╔══╝║ ╔═════╝║ ╔═══╗ ║   ╚══╗ ╔══╝║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝   ║ ╔╗ ╔╗ ║╚═══╗ ╔═╝║ ╔═════╝
// ║ ║      ║ ╚═════╗   ║ ║      ║ ║   ║ ╚═════╗║ ╚═══╝ ║      ║ ║   ║ ╚═════╗║ ╚═════╗   ║ ║      ║ ║║ ║║ ║    ║ ║  ║ ╚═════╗
// ║ ║      ║ ╔═════╝   ║ ║      ║ ║   ║ ╔═════╝║ ╔═╗ ╔═╝      ║ ║   ║ ╔═════╝╚═════╗ ║   ║ ║      ║ ║║ ║║ ║    ║ ║  ╚═════╗ ║
// ║ ╚═════╗║ ╚═════╗   ║ ║      ║ ║   ║ ╚═════╗║ ║ ║ ╚═╗╔═╗   ║ ║   ║ ╚═════╗╔═════╝ ║   ║ ║   ╔═╗║ ║║ ║║ ║╔═══╝ ║  ╔═════╝ ║
// ╚═══════╝╚═══════╝   ╚═╝      ╚═╝   ╚═══════╝╚═╝ ╚═══╝╚═╝   ╚═╝   ╚═══════╝╚═══════╝   ╚═╝   ╚═╝╚═╝╚═╝╚═╝╚═════╝  ╚═══════╝

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

// ╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
// ║ ║      ║ ╔═════╝╚══╗ ╔══╝╚══╗ ╔══╝║ ╔═════╝║ ╔═══╗ ║
// ║ ║      ║ ╚═════╗   ║ ║      ║ ║   ║ ╚═════╗║ ╚═══╝ ║
// ║ ║      ║ ╔═════╝   ║ ║      ║ ║   ║ ╔═════╝║ ╔═╗ ╔═╝
// ║ ╚═════╗║ ╚═════╗   ║ ║      ║ ║   ║ ╚═════╗║ ║ ║ ╚═╗
// ╚═══════╝╚═══════╝   ╚═╝      ╚═╝   ╚═══════╝╚═╝ ╚═══╝

describe('Letter', function() {
// ╔═══════╗╔═══════╗╔═══════╗         ╔═══════╗╔═══════╗╔════╗╔═╗╔═══════╗╔═══════╗╔═══════╗         ╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
// ║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝         ║ ╔═══╗ ║║ ╔═══╗ ║║ ╔╗ ║║ ║╚╗ ╔══╗ ║║ ╔═══╗ ║║ ╔╗ ╔╗ ║         ║ ║      ║ ╔═════╝╚══╗ ╔══╝╚══╗ ╔══╝║ ╔═════╝║ ╔═══╗ ║
// ║ ║ ╔═══╗║ ╚═════╗   ║ ║   ╔═══════╗║ ╚═══╝ ║║ ╚═══╝ ║║ ║║ ║║ ║ ║ ║  ║ ║║ ║   ║ ║║ ║║ ║║ ║╔═══════╗║ ║      ║ ╚═════╗   ║ ║      ║ ║   ║ ╚═════╗║ ╚═══╝ ║
// ║ ║ ╚═╗ ║║ ╔═════╝   ║ ║   ╚═══════╝║ ╔═╗ ╔═╝║ ╔═══╗ ║║ ║║ ║║ ║ ║ ║  ║ ║║ ║   ║ ║║ ║║ ║║ ║╚═══════╝║ ║      ║ ╔═════╝   ║ ║      ║ ║   ║ ╔═════╝║ ╔═╗ ╔═╝
// ║ ╚═══╝ ║║ ╚═════╗   ║ ║            ║ ║ ║ ╚═╗║ ║   ║ ║║ ║║ ╚╝ ║╔╝ ╚══╝ ║║ ╚═══╝ ║║ ║║ ║║ ║         ║ ╚═════╗║ ╚═════╗   ║ ║      ║ ║   ║ ╚═════╗║ ║ ║ ╚═╗
// ╚═══════╝╚═══════╝   ╚═╝            ╚═╝ ╚═══╝╚═╝   ╚═╝╚═╝╚════╝╚═══════╝╚═══════╝╚═╝╚═╝╚═╝         ╚═══════╝╚═══════╝   ╚═╝      ╚═╝   ╚═══════╝╚═╝ ╚═══╝

    describe('#getRandomLetter(letterCount)', function () {
        describe('#getRandomLetter()', function () {
            it('Should return 1 letter character', () => {
                expect(RandomEngine.getRandomLetter()).to.satisfy((value) => {
                    return UtilityEngine.hasLetterCount(value, 1, 1);
                });
            });
        });

        describe('#getRandomLetter(0)', function () {
            it('Should return 0 letter character', () => {
                expect(RandomEngine.getRandomLetter(0)).to.satisfy((value) => {
                    return UtilityEngine.hasLetterCount(value, 0, 0);
                });
            });
        });

        describe('#getRandomLetter(1)', function () {
            it('Should return 1 letter character', () => {
                expect(RandomEngine.getRandomLetter(1)).to.satisfy((value) => {
                    return UtilityEngine.hasLetterCount(value, 1, 1);
                });
            });
        });

        describe('#getRandomLetter(99)', function () {
            it('Should return 99 letter character', () => {
                expect(RandomEngine.getRandomLetter(99)).to.satisfy((value) => {
                    return UtilityEngine.hasLetterCount(value, 99, 99);
                });
            });
        });

        describe('#getRandomLetter(Math.MAX_SAFE_INTEGER)', function () {
            it('Should return one letter character', () => {
                expect(RandomEngine.getRandomLetter(Math.MAX_SAFE_INTEGER)).to.satisfy((value) => {
                    return UtilityEngine.hasLetterCount(value, Math.MAX_SAFE_INTEGER, Math.MAX_SAFE_INTEGER);
                });
            });
        });

        describe('#getRandomLetter(LETTERCOUNT)', function () {
            it('Should return zero letter when letter count parameter is 0', () => {
                expect(RandomEngine.getRandomLetter(0)).to.satisfy((value) => {
                    return UtilityEngine.hasLetterCount(value, 0, 0);
                });
            });

            it('Should return one letter when letter count parameter is 1', () => {
                expect(RandomEngine.getRandomLetter(1)).to.satisfy((value) => {
                    return UtilityEngine.hasLetterCount(value, 1, 1);
                });
            });

            it('Should return one letter when letter count parameter is empty', () => {
                expect(RandomEngine.getRandomLetter()).to.satisfy((value) => {
                    return UtilityEngine.hasLetterCount(value, 1, 1);
                });
            });

            it('Should return one letter when letter count parameter is undefined', () => {
                expect(RandomEngine.getRandomLetter()).to.satisfy((value) => {
                    return UtilityEngine.hasLetterCount(value, 1, 1);
                });
            });



            it('Should throw range error when letter count is smaller than 0', () => {
                expect(() => RandomEngine.getRandomLetter(-1)).to.throw(TypeError);
            });

            it('Should throw range error when letter count is decimal number', () => {
                expect(() => RandomEngine.getRandomLetter(1.1)).to.throw(TypeError);
            });

            it('Should throw range error when letter count is bigger than Math.MAX_SAFE_INTEGER', () => {
                expect(() => RandomEngine.getRandomLetter(Math.MAX_SAFE_INTEGER + 1)).to.throw(TypeError);
            });


            it('Should throw type error when letter count parameter is null', () => {
                expect(() => RandomEngine.getRandomLetter(null)).to.throw(TypeError);
            });

            it('Should throw type error when letter count parameter is a function', () => {
                expect(() => RandomEngine.getRandomLetter(function() {})).to.throw(TypeError);
            });

            it('Should throw type error when letter count parameter is true boolean', () => {
                expect(() => RandomEngine.getRandomLetter(true)).to.throw(TypeError);
            });

            it('Should throw type error when letter count parameter is false boolean', () => {
                expect(() => RandomEngine.getRandomLetter(false)).to.throw(TypeError);
            });

            it('Should throw type error when letter count parameter is a wrapped primitive number', () => {
                expect(() => RandomEngine.getRandomLetter(new Number('1'))).to.throw(TypeError);
            });

            it('Should throw type error when letter count parameter is a string', () => {
                expect(() => RandomEngine.getRandomLetter('string')).to.throw(TypeError);
            });

            it('Should throw type error when letter count parameter is a primitive string', () => {
                expect(() => RandomEngine.getRandomLetter(String('string'))).to.throw(TypeError);
            });

            it('Should throw type error when letter count parameter is a wrapped primitive string', () => {
                expect(() => RandomEngine.getRandomLetter(new String('string'))).to.throw(TypeError);
            });

            it('Should throw type error when letter count parameter is an array', () => {
                expect(() => RandomEngine.getRandomLetter([])).to.throw(TypeError);
            });

            it('Should throw type error when letter count parameter is a map', () => {
                expect(() => RandomEngine.getRandomLetter(new Map())).to.throw(TypeError);
            });

            it('Should throw type error when letter count is a date', () => {
                expect(() => RandomEngine.getRandomLetter(new Date())).to.throw(TypeError);
            });

            it('Should throw type error when letter count is a class declaration', () => {
                expect(() => RandomEngine.getRandomLetter(class Class {})).to.throw(TypeError);
            });

            it('Should throw type error when letter count is a class instance', () => {
                expect(() => RandomEngine.getRandomLetter(new (class Class {}))).to.throw(TypeError);
            });

            it('Should throw type error when letter count is a class instance', () => {
                expect(() => RandomEngine.getRandomLetter(new (class Class {})())).to.throw(TypeError);
            });
        });
    });
});