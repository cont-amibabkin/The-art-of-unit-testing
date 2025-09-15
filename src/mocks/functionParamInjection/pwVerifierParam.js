export const verifyPassword = (input, rules, logger) => {
  const failed = rules
    .map((rule) => rule(input))
    .filter((result) => result === false);

  if (failed.length === 0) {
    logger.info("PASSED");
    return true;
  }

  logger.info("FAIL");

  return false;
};

// injection via parameter
