const stringLength = require('./stringLength');

it('Return the length of a string', () => 
  expect(
    stringLength('newton')
  ).toBe(6)
)