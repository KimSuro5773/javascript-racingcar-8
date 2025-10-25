import { readAttemptCount, readCarNames } from './function/inputView.js';
import { printRaceStatus, printResultHeader, printWinners } from './function/outputView.js';
import { validateAttemptCount, validateCarNames } from './function/validator.js';
import parseCarName from './function/parseCarName.js';
import RacingGame from './models/RacingGame.js';

class App {
  async run() {
    const carNameInput = await readCarNames();
    const carNameArray = parseCarName(carNameInput);
    validateCarNames(carNameArray);

    const attemptInput = await readAttemptCount();
    validateAttemptCount(attemptInput);
    const attemptCount = Number(attemptInput);

    const game = new RacingGame(carNameArray);

    printResultHeader();

    for (let i = 0; i < attemptCount; i += 1) {
      game.playRound();
      printRaceStatus(game.getCars());
    }

    const winners = game.getWinners();
    printWinners(winners);
  }
}

export default App;
