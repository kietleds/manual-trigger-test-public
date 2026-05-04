const array = [
  [1, 2, 3],
  [3, 4, 7],
];

const add = (a, b) => a + b;

describe("add function", () => {
  array.forEach(([a, b, expected]) => {
    test(`adds ${a} + ${b} to equal ${expected}`, () => {
      expect(add(a, b)).toBe(expected);
    });
  });
});
