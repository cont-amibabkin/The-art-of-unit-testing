const originalDependencies = {
  moment: () => import("moment")
};

let dependencies = {...originalDependencies};

export const inject = (fakes) => {
  Object.assign(dependencies, fakes);
  
  return function reset() {
    dependencies = {...originalDependencies}
  }
}

const SUNDAY = 0;
const SATURDAY = 6;

export const verifyPasswordInject = (input, rules) => {
  const dayOfWeek = dependencies.moment().day();
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

// modular dependency injection method