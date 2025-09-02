import { PasswordVerifier, SUNDAY } from "../../src/withProvider/pwVerifier"

function FakeTimeProvider(fakeDay) {
  this.getDay = function() {
    return fakeDay
  }
}

describe("passwordVerifier with timeProvider", () => {
  test("class constructor: on weekends, throws exceptions", () => {
    const verifier = new PasswordVerifier([], new FakeTimeProvider(SUNDAY))

    expect(() => verifier.verify()).toThrow("It's the weekend!")
  })
})