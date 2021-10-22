import upperFirst from './upperFirst';

describe('upperFirst(str)', () => {
  it('returns the string with only first letter capitalized', () => {
    const str = 'fOo';

    expect(upperFirst(str)).toEqual('Foo');
  });
});
