const login = (email, password) => {
  return email === "admin@gmail.com" && password === "123456";
};

describe("login feature", () => {
  test("login success", () => {
    expect(login("admin@gmail.com", "123456")).toBe(true);
  });
});
