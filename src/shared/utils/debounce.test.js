import debounce from './debounce';

describe('debounce(fn, timeout = 500)', () => {
  const mockFunction = jest.fn();
  const timeout = 100;

  const debouncedFunction = debounce(mockFunction, timeout);

  beforeEach(jest.useFakeTimers);
  afterEach(jest.useRealTimers);

  it('ignore previous function call if called again within timeout', () => {
    debouncedFunction('foo');
    debouncedFunction('bar');
    jest.advanceTimersByTime(timeout + 1);

    expect(mockFunction).toBeCalledTimes(1);
    expect(mockFunction).toBeCalledWith('bar');
  });

  it('calls the function if not called again within timeout', () => {
    debouncedFunction('foo');
    jest.advanceTimersByTime(timeout + 1);

    expect(mockFunction).toBeCalledTimes(1);
    expect(mockFunction).toBeCalledWith('foo');
  });

  it("doesn't call the function within timeout", () => {
    debouncedFunction('foo');
    jest.advanceTimersByTime(timeout - 1);

    expect(mockFunction).not.toBeCalled();
  });
});
