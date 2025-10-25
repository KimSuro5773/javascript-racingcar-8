import { Random } from '@woowacourse/mission-utils';
import Car from './Car.js';

class RacingGame {
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
    const randomNumber = Random.pickNumberInRange(0, 9);
    return randomNumber >= 4;
  }
}

export default RacingGame;
