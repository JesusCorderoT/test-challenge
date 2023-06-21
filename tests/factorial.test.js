const factorial = require('../factorial');

test('Factorial de: 5', () => {
  expect(factorial(5)).toBe(120);
});

test('Factorial de: 0', () => {
  expect(factorial(0)).toBe(1);
});
