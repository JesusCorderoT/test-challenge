// 1. Write a function that takes in a number and returns one of the following:
//         - If the number is divisible by 3, return 'Fizz'.
//         - If the number is divisible by 5, return 'Buzz'.
//         - If the number is divisible by 3 and 5, return 'FizzBuzz'
//         - Else, return the number passed as an argument



function fizzbuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
      return 'FizzBuzz';
    } else if (num % 3 === 0) {
      return 'Fizz';
    } else if (num % 5 === 0) {
      return 'Buzz';
    } else {
      return num;
    }
  }

  module.exports = fizzbuzz;


  // console.log(fizzbuzz(3));
  // console.log(fizzbuzz(10));
  // console.log(fizzbuzz(15));