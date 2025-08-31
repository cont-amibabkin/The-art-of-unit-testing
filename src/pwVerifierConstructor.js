export const SUNDAY = 0;
export const SATURDAY = 6;
export const MONDAY = 1;

export class PasswordVerifier {
  constructor(rules, dayOfWeek) {
    this.rules = rules;
    this.dayOfWeek = dayOfWeek;
  }

  verify(input) {
    if ([SATURDAY, SUNDAY].includes(this.dayOfWeek())) {
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
