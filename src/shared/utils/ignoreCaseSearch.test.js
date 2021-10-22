import ignoreCaseSearch from './ignoreCaseSearch';

describe('ignoreCaseSearch(str1, str2)', () => {
  it('returns the index of str2 within str1 ignoring case', () => {
    const str1 = 'first';
    const str2 = 'St';

    expect(ignoreCaseSearch(str1, str2)).toEqual(3);
  });

  it("returns -1 when str1 doesn't include str2", () => {
    const str1 = 'First';
    const str2 = 'sec';

    expect(ignoreCaseSearch(str1, str2)).toEqual(-1);
  });
});
