const add = (a, b) => a + b;

describe("add function", () => {
  test(`adds ${1} + ${2}`, () => {
    expect(add(1, 2)).toBe(3);
  });

  test(`adds ${3} + ${4}`, () => {
    expect(add(3, 4)).toBe(7);
  });
});
