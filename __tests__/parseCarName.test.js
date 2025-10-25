import parseCarName from '../src/function/parseCarName.js';

describe('parseCarName 함수 테스트', () => {
  it('쉼표로 구분된 문자열을 배열로 변환한다', () => {
    const input = 'pobi,woni,jun';

    const result = parseCarName(input);

    expect(result).toEqual(['pobi', 'woni', 'jun']);
  });

  it('이름 앞뒤 공백을 제거한다', () => {
    const input = ' pobi , woni,  jun';

    const result = parseCarName(input);

    expect(result).toEqual(['pobi', 'woni', 'jun']);
  });

  it('빈 값을 필터링한다', () => {
    const input = 'pobi,,woni, ,jun';

    const result = parseCarName(input);

    expect(result).toEqual(['pobi', 'woni', 'jun']);
  });

  it('연속된 쉼표를 처리한다', () => {
    const input = 'pobi,,,woni,,jun';

    const result = parseCarName(input);

    expect(result).toEqual(['pobi', 'woni', 'jun']);
  });

  it('앞뒤 쉼표를 처리한다', () => {
    const input = ',,pobi,woni,jun,,';

    const result = parseCarName(input);

    expect(result).toEqual(['pobi', 'woni', 'jun']);
  });

  it('공백만 있는 입력은 빈 배열을 반환한다', () => {
    const input = '  ,  , ';

    const result = parseCarName(input);

    expect(result).toEqual([]);
  });

  it('빈 문자열은 빈 배열로 반환한다', () => {
    const input = '';

    const result = parseCarName(input);

    expect(result).toEqual([]);
  });
});
