import { PasswordVerifier } from "../src/pwVerifierClass";

const makeVerifier = () => new PasswordVerifier();
const passingRule = (input) => ({ passed: true, reason: "" });

const makeVerifierWithPassingRule = () => {
  const verifier = makeVerifier();
  verifier.addRule(passingRule);
  return verifier;
};

const makeVerifierWithFailedRule = (reason) => {
  const verifier = makeVerifier();
  const fakeRule = (input) => ({ passed: false, reason: reason });
  verifier.addRule(fakeRule);
  return verifier;
};

describe("PasswordVerifier", () => {
  describe("with a failing rule", () => {
    test("has an error message based on the rule.reason", () => {
      const verifier = makeVerifierWithFailedRule("fake reason");
      const errors = verifier.verify("any input");

      expect(errors[0]).toContain("fake reason");
    });

    test("has exactly one error", () => {
      const verifier = makeVerifierWithFailedRule("fake reason");
      const errors = verifier.verify("any input");

      expect(errors.length).toBe(1);
    });
  });

  describe("with a passing rule", () => {
    test("has zero errors", () => {
      const verifier = makeVerifierWithPassingRule();
      const errors = verifier.verify("any input");

      expect(errors.length).toBe(0);
    });
  });

  describe("with a failing and passing rule", () => {
    test("has one error", () => {
      const verifier = makeVerifierWithFailedRule("fake reason");
      verifier.addRule(passingRule);
      const errors = verifier.verify("any input");

      expect(errors.length).toBe(1);
    });

    test("error text belongs to failed rule", () => {
      const verifier = makeVerifierWithFailedRule("fake reason");
      verifier.addRule(passingRule);
      const errors = verifier.verify("any input");

      expect(errors[0]).toContain("fake reason");
    });
  });

  test("verify, with no rules, throws exception", () => {
    const verifier = makeVerifier();

    expect(() => verifier.verify("any input")).toThrow(
      /no rules configured/
    );
  });
});

// Using factory methods to avoid code duplication, encapsulating the state of each test. Checking for expected errors
