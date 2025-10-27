import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange,
  );
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('자동차 경주 통합 테스트', () => {
  describe('정상 동작 테스트', () => {
    it('기본 기능 테스트', async () => {
      // given
      const MOVING_FORWARD = 4;
      const STOP = 3;
      const inputs = ['pobi,woni', '1'];
      const logs = ['pobi : -', 'woni : ', '최종 우승자 : pobi'];
      const logSpy = getLogSpy();

      mockQuestions(inputs);
      mockRandoms([MOVING_FORWARD, STOP]);

      // when
      const app = new App();
      await app.run();

      // then
      logs.forEach((log) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
      });
    });

    it('공동 우승자가 있으면 모두 출력한다.', async () => {
      // given
      const MOVING_FORWARD = 4;
      const inputs = ['pobi,woni', '2'];
      const logSpy = getLogSpy();

      mockQuestions(inputs);
      mockRandoms([MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD]);

      // when
      const app = new App();
      await app.run();

      // then
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('pobi : --'));
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('woni : --'));
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('최종 우승자 : pobi, woni'));
    });

    it('자동차가 1대일 때 정상 동작한다.', async () => {
      // given
      const MOVING_FORWARD = 4;
      const inputs = ['pobi', '1'];
      const logSpy = getLogSpy();

      mockQuestions(inputs);
      mockRandoms([MOVING_FORWARD]);

      // when
      const app = new App();
      await app.run();

      // then
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('pobi : -'));
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('최종 우승자 : pobi'));
    });

    it('모든 자동차가 이동하지 않아도 우승자를 출력한다.', async () => {
      // given
      const STOP = 3;
      const inputs = ['pobi,woni', '2'];
      const logSpy = getLogSpy();

      mockQuestions(inputs);
      mockRandoms([STOP, STOP, STOP, STOP]);

      // when
      const app = new App();
      await app.run();

      // then
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('pobi : '));
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('woni : '));
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('최종 우승자 : pobi, woni'));
    });
  });

  describe('예외 테스트', () => {
    it('자동차 이름이 5자를 초과하면 예외가 발생한다.', async () => {
      // given
      const inputs = ['pobi,kimsuro'];
      mockQuestions(inputs);

      // when
      const app = new App();

      // then
      await expect(app.run()).rejects.toThrow('[ERROR]');
    });

    it('자동차 이름이 빈 문자열이면 예외가 발생한다.', async () => {
      // given
      const inputs = [''];
      mockQuestions(inputs);

      // when
      const app = new App();

      // then
      await expect(app.run()).rejects.toThrow('[ERROR]');
    });

    it('자동차 이름에 중복이 있으면 예외가 발생한다.', async () => {
      // given
      const inputs = ['pobi,pobi'];
      mockQuestions(inputs);

      // when
      const app = new App();

      // then
      await expect(app.run()).rejects.toThrow('[ERROR]');
    });

    it('시도 횟수가 숫자가 아니면 예외가 발생한다.', async () => {
      // given
      const inputs = ['pobi,woni', 'abc'];
      mockQuestions(inputs);

      // when
      const app = new App();

      // then
      await expect(app.run()).rejects.toThrow('[ERROR]');
    });

    it('시도 횟수가 0이면 예외가 발생한다.', async () => {
      // given
      const inputs = ['pobi,woni', '0'];
      mockQuestions(inputs);

      // when
      const app = new App();

      // then
      await expect(app.run()).rejects.toThrow('[ERROR]');
    });
  });
});
