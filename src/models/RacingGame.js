import { Random } from '@woowacourse/mission-utils';
import Car from './Car.js';

class RacingGame {
  static #RANDOM_MIN = 0;
  static #RANDOM_MAX = 9;
  static #MIN_RANDOM_TO_MOVE = 4;

  #cars;

  constructor(carNames) {
    this.#cars = carNames.map((name) => new Car(name));
  }

  playRound() {
    this.#cars.forEach((car) => {
      if (this.#canMove()) {
        car.move();
      }
    });
  }

  getCars() {
    return this.#cars;
  }

  getWinners() {
    const maxPosition = Math.max(...this.#cars.map((car) => car.getPosition()));

    return this.#cars
      .filter((car) => car.getPosition() === maxPosition)
      .map((car) => car.getName());
  }

  #canMove() {
    const randomNumber = Random.pickNumberInRange(RacingGame.#RANDOM_MIN, RacingGame.#RANDOM_MAX);
    return randomNumber >= RacingGame.#MIN_RANDOM_TO_MOVE;
  }
}

export default RacingGame;
