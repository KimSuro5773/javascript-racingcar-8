import { ERROR_MESSAGES } from '../src/constants/messages.js';
import { validateAttemptCount, validateCarNames } from '../src/function/validator.js';

describe('validateCarNames 함수 테스트', () => {
  it('정상적인 자동차 이름은 통과한다.', () => {
    const carNames = ['pobi', 'woni', 'jun'];

    expect(() => validateCarNames(carNames)).not.toThrow();
  });

  it('빈 배열은 에러를 발생시킨다.', () => {
    const carNames = [];

    expect(() => validateCarNames(carNames)).toThrow(ERROR_MESSAGES.CAR_NAME.EMPTY);
  });

  it('중복된 이름은 에러를 발생 시킨다.', () => {
    const carNames = ['pobi', 'pobi', 'jun'];

    expect(() => validateCarNames(carNames)).toThrow(ERROR_MESSAGES.CAR_NAME.DUPLICATE);
  });

  it('5글자를 초과하는 이름은 에러를 발생시킨다.', () => {
    const carNames = ['pobi', 'kimsuro'];

    expect(() => validateCarNames(carNames)).toThrow(ERROR_MESSAGES.CAR_NAME.LENGTH_INVALID);
  });

  it('5글자 이름은 통과한다.', () => {
    const carNames = ['pobi1'];

    expect(() => validateCarNames(carNames)).not.toThrow();
  });
});

describe('validateAttemptCount 함수 테스트', () => {
  it('정상적인 숫자는 통과한다.', () => {
    const attemptCount = '5';

    expect(() => validateAttemptCount(attemptCount)).not.toThrow();
  });

  it('숫자 형식이 아니면 에러를 발생시킨다.', () => {
    const attemptCount = 'abc';

    expect(() => validateAttemptCount(attemptCount)).toThrow(
      ERROR_MESSAGES.ATTEMPT_COUNT.INVALID_TYPE,
    );
  });

  it('소수를 입력시 에러를 발생시킨다.', () => {
    const attemptCount = '1.5';

    expect(() => validateAttemptCount(attemptCount)).toThrow(
      ERROR_MESSAGES.ATTEMPT_COUNT.NOT_INTEGER,
    );
  });

  it('0을 입력시 에러를 발생시킨다.', () => {
    const attemptCount = '0';

    expect(() => validateAttemptCount(attemptCount)).toThrow(
      ERROR_MESSAGES.ATTEMPT_COUNT.OUT_OF_RANGE,
    );
  });

  it('음수를 입력시 에러를 발생시킨다.', () => {
    const attemptCount = '-1';

    expect(() => validateAttemptCount(attemptCount)).toThrow(
      ERROR_MESSAGES.ATTEMPT_COUNT.OUT_OF_RANGE,
    );
  });

  it('안전 정수 값을 초과할시 에러를 발생시킨다.', () => {
    const attemptCount = `${Number.MAX_SAFE_INTEGER + 1}`;

    expect(() => validateAttemptCount(attemptCount)).toThrow(
      ERROR_MESSAGES.ATTEMPT_COUNT.OUT_OF_RANGE,
    );
  });
});
