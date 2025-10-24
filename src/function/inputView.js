import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from '../constants/messages.js';

export async function readCarNames() {
  return Console.readLineAsync(INPUT_MESSAGES.CAR_NAME);
}

export async function readAttemptCount() {
  return Console.readLineAsync(INPUT_MESSAGES.ATTEMPT_COUNT);
}
