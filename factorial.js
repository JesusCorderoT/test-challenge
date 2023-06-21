function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }

  module.exports = factorial;

  
  // console.log(factorial(5));