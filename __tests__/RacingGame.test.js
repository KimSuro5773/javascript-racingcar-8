import { MissionUtils } from '@woowacourse/mission-utils';
import RacingGame from '../src/models/RacingGame.js';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange,
  );
};

describe('RacingGame 클래스 테스트', () => {
  describe('playRound 메서드 테스트', () => {
    it('무작위 값이 4 이상일 경우 자동차가 전진한다.', () => {
      mockRandoms([4, 5, 6]);
      const game = new RacingGame(['pobi', 'woni', 'jun']);

      game.playRound();
      const cars = game.getCars();

      expect(cars[0].getPosition()).toBe(1);
      expect(cars[1].getPosition()).toBe(1);
      expect(cars[2].getPosition()).toBe(1);
    });

    it('무작위 값이 4 미만일 경우 자동차가 전진하지 않는다.', () => {
      mockRandoms([0, 1, 3]);
      const game = new RacingGame(['pobi', 'woni', 'jun']);

      game.playRound();
      const cars = game.getCars();

      expect(cars[0].getPosition()).toBe(0);
      expect(cars[1].getPosition()).toBe(0);
      expect(cars[2].getPosition()).toBe(0);
    });

    it('무작위 값이 섞여있을 경우 4 이상인 자동차만 전진한다.', () => {
      mockRandoms([1, 2, 4]);
      const game = new RacingGame(['pobi', 'woni', 'jun']);

      game.playRound();
      const cars = game.getCars();

      expect(cars[0].getPosition()).toBe(0);
      expect(cars[1].getPosition()).toBe(0);
      expect(cars[2].getPosition()).toBe(1);
    });
  });

  describe('getCars 메서드 테스트', () => {
    it('생성된 모든 자동차를 반환한다', () => {
      const carNames = ['pobi', 'woni', 'jun'];
      const game = new RacingGame(carNames);
      const cars = game.getCars();

      expect(cars).toHaveLength(3);
      expect(cars[0].getName()).toBe('pobi');
      expect(cars[1].getName()).toBe('woni');
      expect(cars[2].getName()).toBe('jun');
    });
  });

  describe('getWinners 메서드 테스트', () => {
    it('단독 우승자를 반환한다.', () => {
      mockRandoms([5, 3, 2]);
      const game = new RacingGame(['pobi', 'woni', 'jun']);

      game.playRound();
      const winners = game.getWinners();

      expect(winners).toEqual(['pobi']);
    });

    it('공동 우승자가 있으면 우승자를 모두 반환한다.', () => {
      mockRandoms([5, 6, 2]);
      const game = new RacingGame(['pobi', 'woni', 'jun']);

      game.playRound();
      const winners = game.getWinners();

      expect(winners).toEqual(['pobi', 'woni']);
    });
  });
});
