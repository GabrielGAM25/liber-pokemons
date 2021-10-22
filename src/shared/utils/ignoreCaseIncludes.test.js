import ignoreCaseIncludes from './ignoreCaseIncludes';

describe('ignoreCaseIncludes(str1, str2)', () => {
  it('returns true when str1 includes str2 ignoring case', () => {
    const str1 = 'First';
    const str2 = 'fir';

    expect(ignoreCaseIncludes(str1, str2)).toBeTruthy();
  });

  it("returns false when str1 doesn't include str2", () => {
    const str1 = 'First';
    const str2 = 'sec';

    expect(ignoreCaseIncludes(str1, str2)).toBeFalsy();
  });
});
