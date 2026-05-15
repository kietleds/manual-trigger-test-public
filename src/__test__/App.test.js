const login = (email, password) => {
  return email === "admin@gmail.com" && password === "123456";
};

describe("login feature", () => {
  test("login success", () => {
    expect(login("admin@gmail.com", "123456")).toBe(true);
  });

  test("wrong email", () => {
    expect(login("wrong@gmail.com", "123456")).toBe(false);
  });

  test("wrong password", () => {
    expect(login("admin@gmail.com", "wrong")).toBe(false);
  });
});
