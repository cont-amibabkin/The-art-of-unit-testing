import { PasswordVerifier, SUNDAY, MONDAY } from "../src/pwVerifierConstructor";

describe("PasswordVerifier class with implementation via constructor", () => {
  const makeVerifier = (rules, dayFn) => {
    return new PasswordVerifier(rules, dayFn);
  };

  test("on weekends, throws exceptions", () => {
    const alwaysSunday = () => SUNDAY;
    const verifier = makeVerifier([], alwaysSunday);

    expect(() => verifier.verify("anything")).toThrow("It's the weekend!");
  });

  test("on weekdays, with no rules, passes", () => {
    const alwaysMonday = () => MONDAY;
    const verifier = makeVerifier([], alwaysMonday);

    const result = verifier.verify("anything");

    expect(result.length).toBe(0);
  });
});
