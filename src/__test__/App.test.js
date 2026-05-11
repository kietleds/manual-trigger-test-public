const array = [
  [1, 2, 3],
  [3, 4, 8],
];

const add = (a, b) => a + b;

describe("add function", () => {
  array.forEach(([a, b, expected]) => {
    test(`adds ${a} + ${b}`, () => {
      expect(add(a, b)).toBe(expected);
    });
  });
});
