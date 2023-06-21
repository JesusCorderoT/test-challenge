const fizzbuzz = require('../fizzBuzz');

test('Devuelve Fizz cuando el numero es divisible de 3', () => {
  expect(fizzbuzz(3)).toBe('Fizz');
  expect(fizzbuzz(9)).toBe('Fizz');
});

test('Devuelve Buzz cuando el numero es divisible de 5', () => {
  expect(fizzbuzz(5)).toBe('Buzz');
  expect(fizzbuzz(10)).toBe('Buzz');
});

test('Devuelve FizzBuzzcuando el numero es divisible de 3 y 5', () => {
  expect(fizzbuzz(15)).toBe('FizzBuzz');
  expect(fizzbuzz(30)).toBe('FizzBuzz');
});

test('Devuelve el numero cuando no es divisible de 3 o 5', () => {
  expect(fizzbuzz(2)).toBe(2);
  expect(fizzbuzz(7)).toBe(7);
});