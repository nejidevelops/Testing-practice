class Calculator {
  add(a, b){
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  division(a, b) {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b;
  }

  multiply (a, b) {
    return a * b;
  }

}

module.exports = Calculator;