import { makeVerifier, SUNDAY } from "../src/pwVerifierCarrying";

describe("verifyPasswordCarrying", () => {
  test("factory method: on weekends, throws exceptions", () => {
    const alwaysSunday = () => SUNDAY;

    const verifyPassword = makeVerifier([], alwaysSunday);

    expect(() => verifyPassword("anything")).toThrow("It's the weekend!");
  });
});
