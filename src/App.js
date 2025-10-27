import { readAttemptCount, readCarNames } from './function/inputView.js';
import { printRaceStatus, printResultHeader, printWinners } from './function/outputView.js';
import { validateAttemptCount, validateCarNames } from './function/validator.js';
import parseCarName from './function/parseCarName.js';
import RacingGame from './models/RacingGame.js';

class App {
  async run() {
    const carNames = await this.#getValidCarNames();
    const attemptCount = await this.#getValidAttemptCount();

    const game = this.#createGame(carNames);

    this.#playRounds(game, attemptCount);

    this.#displayWinners(game);
  }

  async #getValidCarNames() {
    const carNameInput = await readCarNames();
    const carNames = parseCarName(carNameInput);
    validateCarNames(carNames);
    return carNames;
  }

  async #getValidAttemptCount() {
    const attemptCountInput = await readAttemptCount();
    validateAttemptCount(attemptCountInput);
    return Number(attemptCountInput);
  }

  #createGame(carNames) {
    return new RacingGame(carNames);
  }

  #playRounds(game, attemptCount) {
    printResultHeader();

    for (let i = 0; i < attemptCount; i += 1) {
      game.playRound();
      printRaceStatus(game.getCars());
    }
  }

  #displayWinners(game) {
    const winners = game.getWinners();
    printWinners(winners);
  }
}

export default App;
