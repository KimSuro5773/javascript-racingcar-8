import { ERROR_MESSAGES } from '../constants/messages.js';

export function validateCarNames(carNameArray) {
  if (carNameArray.length === 0) {
    throw new Error(ERROR_MESSAGES.CAR_NAME.EMPTY);
  }

  carNameArray.forEach((carName) => {
    if (carName.length > 5) {
      throw new Error(ERROR_MESSAGES.CAR_NAME.LENGTH_INVALID);
    }
  });
}

export function validateAttemptCount(attemptCount) {
  const count = Number(attemptCount);

  if (Number.isNaN(count)) {
    throw new Error(ERROR_MESSAGES.ATTEMPT_COUNT.INVALID_TYPE);
  }

  if (!Number.isInteger(count)) {
    throw new Error(ERROR_MESSAGES.ATTEMPT_COUNT.NOT_INTEGER);
  }

  if (count < 1 || count > Number.MAX_SAFE_INTEGER) {
    throw new Error(ERROR_MESSAGES.ATTEMPT_COUNT.OUT_OF_RANGE);
  }
}
