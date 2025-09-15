import { verifyPassword } from "../../../src/mocks/functionParamInjection/pwVerifierParam";

test("verifyPassword with logger, when all rules pass, passed", () => {
  let written = "";
  const mockLog = {
    info: (text) => (written = text),
  };

  verifyPassword("anything", [], mockLog);

  expect(written).toMatch(/PASSED/);
});
