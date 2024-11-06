const add = require('./index');

test('additionne 2 + 3 pour obtenir 5', () => {
  expect(add(2, 3)).toBe(5);
});