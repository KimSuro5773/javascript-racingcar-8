import { MissionUtils } from '@woowacourse/mission-utils';
import Car from '../src/models/Car.js';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange,
  );
};

describe('Car 클래스 테스트', () => {
  let car;

  beforeEach(() => {
    car = new Car('pobi');
  });

  it('getName()을 호출하면 자동차 이름을 반환한다.', () => {
    expect(car.getName()).toBe('pobi');
  });

  it('getPosition()을 호출하면 현재 위치를 반환한다.', () => {
    expect(car.getPosition()).toBe(0);
  });

  it('무작위 값이 4 이상일 경우 move() 호출 시 위치가 1 증가한다.', () => {
    mockRandoms([4]);

    car.tryMove();

    expect(car.getPosition()).toBe(1);
  });

  it('무작위 값이 4 미만일 경우 move() 호출 시 위치가 증가하지 않는다.', () => {
    mockRandoms([3]);

    car.tryMove();

    expect(car.getPosition()).toBe(0);
  });

  it('무작위 값에 따라 move()를 여러 번 호출하면 조건을 만족할 때만 위치가 증가한다.', () => {
    mockRandoms([4, 3, 5]); // 이동, 정지, 이동

    car.tryMove();
    car.tryMove();
    car.tryMove();

    expect(car.getPosition()).toBe(2);
  });
});
