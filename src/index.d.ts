export function getRandomBit(): number;
export function getRandomDigit(): number;
export function getRandomInteger(minimum: number, maximum: number): number;

declare module 'RandomEngine' {
    export function getRandomBit(): number;
    export function getRandomDigit(): number;
    export function getRandomInteger(minimum: number, maximum: number): number;
}