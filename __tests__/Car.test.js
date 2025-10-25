import Car from '../src/models/Car.js';

describe('Car 클래스 테스트', () => {
  let car;

  beforeEach(() => {
    car = new Car('pobi');
  });

  it('getName()을 호출하면 자동차 이름을 반환한다.', () => {
    expect(car.getName()).toBe('pobi');
  });

  it('getPosition()을 호출하면 현재 위치를 반환한다.', () => {
    const position = car.getPosition();

    expect(position).toBe(0);
  });

  it('move() 호출 시 위치가 1 증가한다.', () => {
    car.move();

    expect(car.getPosition()).toBe(1);
  });

  it('move()를 여러 번 호출하면 위치가 누적된다.', () => {
    car.move();
    car.move();
    car.move();

    expect(car.getPosition()).toBe(3);
  });
});
