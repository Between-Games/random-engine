// ╔══════╗ ╔═══════╗╔═══════╗   ╔═══════╗╔═══════╗╔═══════╗╔═══════╗   ╔═══════╗╔═══════╗
// ║ ╔══╗ ║ ╚══╗ ╔══╝╚══╗ ╔══╝   ╚══╗ ╔══╝║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝   ╚═══╗ ╔═╝║ ╔═════╝
// ║ ╚══╝ ╚╗   ║ ║      ║ ║         ║ ║   ║ ╚═════╗║ ╚═════╗   ║ ║          ║ ║  ║ ╚═════╗
// ║ ╔═══╗ ║   ║ ║      ║ ║         ║ ║   ║ ╔═════╝╚═════╗ ║   ║ ║          ║ ║  ╚═════╗ ║
// ║ ╚═══╝ ║╔══╝ ╚══╗   ║ ║   ╔═╗   ║ ║   ║ ╚═════╗╔═════╝ ║   ║ ║   ╔═╗╔═══╝ ║  ╔═════╝ ║
// ╚═══════╝╚═══════╝   ╚═╝   ╚═╝   ╚═╝   ╚═══════╝╚═══════╝   ╚═╝   ╚═╝╚═════╝  ╚═══════╝

'use strict';   // Extend JavaScript strict mode to the entire script

// ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
// ╚══╗ ╔══╝║ ╔╗ ╔╗ ║║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═══╗ ║╚══╗ ╔══╝
//    ║ ║   ║ ║║ ║║ ║║ ╚═══╝ ║║ ║   ║ ║║ ╚═══╝ ║   ║ ║
//    ║ ║   ║ ║║ ║║ ║║ ╔═════╝║ ║   ║ ║║ ╔═╗ ╔═╝   ║ ║
// ╔══╝ ╚══╗║ ║║ ║║ ║║ ║      ║ ╚═══╝ ║║ ║ ║ ╚═╗   ║ ║
// ╚═══════╝╚═╝╚═╝╚═╝╚═╝      ╚═══════╝╚═╝ ╚═══╝   ╚═╝

import UtilityEngine from '@sarc-test/utility-engine';

import RandomEngine from '../dist/index.js';

import chai from 'chai';

const expect = chai.expect;

// ╔═══════╗╔═══════╗╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗
// ╚╗ ╔══╗ ║║ ╔═════╝║ ╔═════╝║ ║      ║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═════╝
//  ║ ║  ║ ║║ ╚═════╗║ ║      ║ ║      ║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═════╗
//  ║ ║  ║ ║║ ╔═════╝║ ║      ║ ║      ║ ╔═══╗ ║║ ╔═╗ ╔═╝║ ╔═════╝
// ╔╝ ╚══╝ ║║ ╚═════╗║ ╚═════╗║ ╚═════╗║ ║   ║ ║║ ║ ║ ╚═╗║ ╚═════╗
// ╚═══════╝╚═══════╝╚═══════╝╚═══════╝╚═╝   ╚═╝╚═╝ ╚═══╝╚═══════╝

const randomBits = [];

while(randomBits.length < 100000) randomBits.push(RandomEngine.getRandomBit());

// ╔══════╗ ╔═══════╗╔═══════╗
// ║ ╔══╗ ║ ╚══╗ ╔══╝╚══╗ ╔══╝
// ║ ╚══╝ ╚╗   ║ ║      ║ ║
// ║ ╔═══╗ ║   ║ ║      ║ ║
// ║ ╚═══╝ ║╔══╝ ╚══╗   ║ ║
// ╚═══════╝╚═══════╝   ╚═╝

describe('Bit', function() {
    // ╔═══════╗╔═══════╗╔═══════╗         ╔═══════╗╔═══════╗╔════╗╔═╗╔═══════╗╔═══════╗╔═══════╗         ╔══════╗ ╔═══════╗╔═══════╗
    // ║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝         ║ ╔═══╗ ║║ ╔═══╗ ║║ ╔╗ ║║ ║╚╗ ╔══╗ ║║ ╔═══╗ ║║ ╔╗ ╔╗ ║         ║ ╔══╗ ║ ╚══╗ ╔══╝╚══╗ ╔══╝
    // ║ ║ ╔═══╗║ ╚═════╗   ║ ║   ╔═══════╗║ ╚═══╝ ║║ ╚═══╝ ║║ ║║ ║║ ║ ║ ║  ║ ║║ ║   ║ ║║ ║║ ║║ ║╔═══════╗║ ╚══╝ ╚╗   ║ ║      ║ ║
    // ║ ║ ╚═╗ ║║ ╔═════╝   ║ ║   ╚═══════╝║ ╔═╗ ╔═╝║ ╔═══╗ ║║ ║║ ║║ ║ ║ ║  ║ ║║ ║   ║ ║║ ║║ ║║ ║╚═══════╝║ ╔═══╗ ║   ║ ║      ║ ║
    // ║ ╚═══╝ ║║ ╚═════╗   ║ ║            ║ ║ ║ ╚═╗║ ║   ║ ║║ ║║ ╚╝ ║╔╝ ╚══╝ ║║ ╚═══╝ ║║ ║║ ║║ ║         ║ ╚═══╝ ║╔══╝ ╚══╗   ║ ║
    // ╚═══════╝╚═══════╝   ╚═╝            ╚═╝ ╚═══╝╚═╝   ╚═╝╚═╝╚════╝╚═══════╝╚═══════╝╚═╝╚═╝╚═╝         ╚═══════╝╚═══════╝   ╚═╝

    describe('#getRandomBit()', function () {
        it('Should return a random bit', () => {
            expect(RandomEngine.getRandomBit()).to.satisfy((bit) => {
                return UtilityEngine.isBit(bit);
            });
        });

        it('Should contain at least 1 zero bit', () => {
            expect(randomBits).to.include(0);
        });

        it('Should contain at least 1 one bit', () => {
            expect(randomBits).to.include(1);
        });

        it('Should only contain random bits', () => {
            expect(randomBits).to.satisfy((randomBits) => {
                return randomBits.every((randomBit) => {
                    return UtilityEngine.isBit(randomBit);
                });
            });
        });
    });
});