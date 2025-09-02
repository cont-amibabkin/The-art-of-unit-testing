import { verifyPasswordInject, inject } from "../src/pwVerifierInject";

const SUNDAY = 0;
const SATURDAY = 6;

const injectDate = (newDay) => {
  const reset = inject({
    moment: function () {
      return {
        day: () => newDay,
      };
    },
  });

  return reset;
};

test("verifyPasswordInject, on weekends, throws exceptions", () => {
  const reset = injectDate(SATURDAY);

  expect(() => {
    verifyPasswordInject("anything", [], SUNDAY).toThrow("It's the weekend!");
  });

  reset();
});
