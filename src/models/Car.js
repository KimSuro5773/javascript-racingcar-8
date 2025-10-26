import { Random } from '@woowacourse/mission-utils';

class Car {
  static #RANDOM_MIN = 0;
  static #RANDOM_MAX = 9;
  static #MIN_RANDOM_TO_MOVE = 4;

  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  tryMove() {
    if (this.#canMove()) {
      this.#position += 1;
    }
  }

  getName() {
    return this.#name;
  }

  getPosition() {
    return this.#position;
  }

  #canMove() {
    const randomNumber = Random.pickNumberInRange(Car.#RANDOM_MIN, Car.#RANDOM_MAX);
    return randomNumber >= Car.#MIN_RANDOM_TO_MOVE;
  }
}

export default Car;
