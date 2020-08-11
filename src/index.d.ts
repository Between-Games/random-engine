export function getRandomBit(): number;

export function getRandomDigit(): number;

export function getRandomElement(value: Array<any>): any;

export function getRandomLetter(letterCount: number): string;

export function getRandomInteger(minimum: number, maximum: number): number;

declare module 'RandomEngine' {
    export function getRandomBit(): number;

    export function getRandomDigit(): number;

    export function getRandomElement(value: Array<any>): any;

    export function getRandomLetter(letterCount: number): string;

    export function getRandomInteger(minimum: number, maximum: number): number;
}