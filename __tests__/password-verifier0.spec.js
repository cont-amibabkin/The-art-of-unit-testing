import { verifyPassword } from "../src/pwVerifier";

describe("verifyPassword", () => {
  test("given a failing rule, returns error", () => {
    const fakeRule = (input) => ({ passed: false, reason: "fake reason" });

    const errors = verifyPassword("any value", [fakeRule]);

    expect(errors[0]).toContain("fake reason");
  });
});
