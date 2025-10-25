import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGES } from '../constants/messages.js';

export function printResultHeader() {
  Console.print(`\n${OUTPUT_MESSAGES.RESULT}`);
}

export function printRaceStatus(cars) {
  cars.forEach((car) => {
    const position = '-'.repeat(car.getPosition());
    Console.print(`${car.getName()} : ${position}`);
  });

  Console.print('');
}

export function printWinners(winners) {
  Console.print(`${OUTPUT_MESSAGES.WINNER} : ${winners.join(', ')}`);
}
