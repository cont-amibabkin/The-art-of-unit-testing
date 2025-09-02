export const SUNDAY = 0;
const SATURDAY = 6;

export const makeVerifier = (rules, getDayFn) => {
  return function (input) {
    const dayOfWeek = getDayFn();
    const isIncludes = [SATURDAY, SUNDAY].includes(dayOfWeek);

    if (isIncludes) {
      throw new Error("It's the weekend!");
    }

    const errors = [];

    rules.forEach((rule) => {
      const result = rule(input);

      if (!result.passed) {
        errors.push(`error ${result.reason}`);
      }
    });

    return errors;
  };
};
