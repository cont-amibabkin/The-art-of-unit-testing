import { RealTimeProvider } from "./RealTimeProvider";

export const SUNDAY = 0;
export const SATURDAY = 6;
export const MONDAY = 1;

export class PasswordVerifier {
  constructor(rules, timeProvider) {
    this.rules = rules;
    this.timeProvider = timeProvider;
  }

  verify(input) {
    if ([SATURDAY, SUNDAY].includes(this.timeProvider.getDay())) {
      throw new Error("It's the weekend!");
    }

    const errors = [];

    this.rules.forEach((rule) => {
      const result = rule(input);

      if (!result.passed) {
        errors.push(`error ${result.reason}`);
      }
    });

    return this.rules;
  }
}

export const passwordVerifierFactory = (rules) => {
  return new PasswordVerifier(new RealTimeProvider())
}
