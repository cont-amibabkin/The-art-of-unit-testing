import { oneUpperCaseRule } from "../../src/stubs/pwRule";

describe("one uppercase rule", () => {
  test("given no uppercase, it fails", () => {
    const result = oneUpperCaseRule("abc");

    expect(result.passed).toEqual(false);
  });

  test.each(["Abc", "aBc"])("given one uppercase, it passes", (input) => {
    const result = oneUpperCaseRule(input);

    expect(result.passed).toEqual(true);
  });
});

// Parameterized test
