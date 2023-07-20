const Calculator = require('./calculator');

describe('calculator', () => {
  let calculator;

  beforeEach(()=>{
    calculator = new Calculator();
  })

  describe('add()', () => {
    test('Addition of two numbers', () => {
      const result = calculator.add(2,2)
      expect(result).toBe(4);
    })

    test('Addition of negative numbers', () => {
      const result = calculator.add(-2,-2)
      expect(result).toBe(-4);
    })

    test('Addition of a number with zero', () => {
      const result = calculator.add(0, 3)
      expect(result).toBe(3)
    })
  })

  describe('subtract()', () => {
    test('Subtraction of two numbers', () => {
      const result = calculator.subtract(3,2)
      expect(result).toBe(1);
    })

    test('Subtraction of negative numbers', () => {
      const result = calculator.subtract(-5,-2)
      expect(result).toBe(-3);
    })

    test('Subtraction of a number with zero', () => {
      const result = calculator.subtract(0, 3)
      expect(result).toBe(-3)
    })
  })

  describe('division()', () => {
    test('Division of two numbers', () => {
      const result = calculator.division(4,2)
      expect(result).toBe(2);
    })

    test('Division of negative numbers', () => {
      const result = calculator.division(-6,-2)
      expect(result).toBe(3);
    })

    test('Division of a number with zero', () => {
      expect(() => calculator.division(3, 0).toThrow('You cannot divide using zero'))
    })
  })

  describe('multiply()', () => {
    test('Multiplication of two numbers', () => {
      const result = calculator.multiply(3,2)
      expect(result).toBe(6);
    })

    test('Multiplication of negative numbers', () => {
      const result = calculator.multiply(-5,-2)
      expect(result).toBe(10);
    })

    test('Multiplication of a number with zero', () => {
      const result = calculator.multiply(0, 3)
      expect(result).toBe(0)
    })
  })
})