export const INPUT_MESSAGES = Object.freeze({
  CAR_NAME: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  ATTEMPT_COUNT: '시도할 횟수는 몇 회인가요?\n',
});

export const OUTPUT_MESSAGES = Object.freeze({
  RESULT: '실행 결과',
  WINNER: '최종 우승자',
});

export const ERROR_MESSAGES = Object.freeze({
  CAR_NAME: Object.freeze({
    EMPTY: '[ERROR] 경주할 자동차 이름을 입력해주세요.',
    LENGTH_INVALID: '[ERROR] 자동차의 이름은 1자 이상 5자 이하로 입력 해야 합니다.',
  }),

  ATTEMPT_COUNT: Object.freeze({
    INVALID_TYPE: '[ERROR] 시도 횟수는 숫자 형식이어야 합니다.',
    NOT_INTEGER: '[ERROR] 시도 횟수는 양의 정수만 입력 가능합니다.',
    OUT_OF_RANGE: `[ERROR] 시도 횟수는 1부터 ${Number.MAX_SAFE_INTEGER} 까지의 수를 입력해야 합니다.`,
  }),
});
