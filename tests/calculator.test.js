const { default: expect } = require('expect');

const calculator = require('../calculator');

test('adds 1 + 2', () => {
    expect(calculator.sum(1,2)).toBe(3);
});

test('substracts a - b', () => {
    expect(calculator.substract(5,2)).toBe(3);
});

test('multiplies a * b', () => {
    expect(calculator.multiply(5,5)).toBe(25);
});

test('divides a / b', () => {
    expect(calculator.divide(100,4)).toBe(25);
});

test('Raises to power a ^ b', () => {
    expect(calculator.power2(5,5)).toBe(3125);
})

