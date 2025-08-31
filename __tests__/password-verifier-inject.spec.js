import { verifyPasswordInject } from "../src/pwVerifierInject";

const SUNDAY = 0;
const SATURDAY = 6;
const MONDAY = 1;

test("verifyPasswordInject, on weekends, throws exceptions", () => {
  expect(() => {
    verifyPasswordInject("anything", [], SUNDAY).toThrow("It\'s the weekend!")
  })
})