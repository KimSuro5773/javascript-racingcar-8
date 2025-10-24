import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from '../constants/messages.js';

class InputView {
  static async readCarNames() {
    return Console.readLineAsync(INPUT_MESSAGES.CAR_NAME);
  }

  static async readAttemptCount() {
    return Console.readLineAsync(INPUT_MESSAGES.ATTEMPT_COUNT);
  }
}

export default InputView;
