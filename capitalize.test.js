const { capitalize } = require('./capitalize');

describe('capitalize()', () => {
  it('capitalizes the first letter of the string', () => {
    const input = 'newton';
    const output = "Newton";
    const result = capitalize(input);

    expect(result).toBe(output);
  });
})