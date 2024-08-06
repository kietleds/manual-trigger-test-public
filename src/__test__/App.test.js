const array = Array(5)
  .fill(0)
  .map((_, index) => ({
    a: index,
    b: 1,
    expected: Math.random() < 0.8 ? index + 1 : index,
  }));

const add = (a, b) => a + b;

describe("add function", () => {
  array.forEach(({ a, b, expected }) => {
    test(`adds ${a} + ${b} to equal ${expected}`, () => {
      expect(add(a, b)).toBe(expected);
    });
  });
});
