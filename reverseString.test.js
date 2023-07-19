const reverseString = require('./reverseString');

it('Returns the reverse of a string', () => {
  const normalString = 'Newton';
  const reversedString = 'notweN';
  const inputString = reverseString(normalString) 

  expect(inputString).toBe(reversedString);
})