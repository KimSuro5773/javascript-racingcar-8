import parseCarName from '../src/function/parseCarName.js';

describe('parseCarName 함수 테스트', () => {
  test('쉼표로 구분된 문자열을 배열로 변환', () => {
    const input = 'pobi,woni,jun';

    const result = parseCarName(input);

    expect(result).toEqual(['pobi', 'woni', 'jun']);
  });

  test('이름 앞뒤 공백 제거', () => {
    const input = ' pobi , woni,  jun';

    const result = parseCarName(input);

    expect(result).toEqual(['pobi', 'woni', 'jun']);
  });

  test('빈 값을 필터링', () => {
    const input = 'pobi,,woni, ,jun';

    const result = parseCarName(input);

    expect(result).toEqual(['pobi', 'woni', 'jun']);
  });

  test('연속된 쉼표를 처리', () => {
    const input = 'pobi,,,woni,,jun';

    const result = parseCarName(input);

    expect(result).toEqual(['pobi', 'woni', 'jun']);
  });

  test('앞뒤 쉼표를 처리', () => {
    const input = ',,pobi,woni,jun,,';

    const result = parseCarName(input);

    expect(result).toEqual(['pobi', 'woni', 'jun']);
  });

  test('공백만 있는 입력은 빈 배열을 반환', () => {
    const input = '  ,  , ';

    const result = parseCarName(input);

    expect(result).toEqual([]);
  });

  test('빈 문자열은 빈 배열로 반환', () => {
    const input = '';

    const result = parseCarName(input);

    expect(result).toEqual([]);
  });
});
