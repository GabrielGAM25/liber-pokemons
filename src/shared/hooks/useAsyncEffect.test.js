import { waitFor } from '@testing-library/react';
import { renderHook, cleanup } from '@testing-library/react-hooks';

import useAsyncEffect from './useAsyncEffect';

describe('useAsyncEffect(fn, setState, dependencies = [])', () => {
  beforeEach(jest.useFakeTimers);
  afterEach(jest.useRealTimers);

  it('calls setState if the Promise is fullfilled while mounted', async () => {
    const mockFn = jest.fn(() => new Promise((resolve) => setTimeout(() => resolve('foo'), 100)));
    const mockSetState = jest.fn();

    renderHook(() => useAsyncEffect(mockFn, mockSetState));
    jest.advanceTimersByTime(200);

    await waitFor(() => {
      expect(mockSetState).toBeCalledWith('foo');
    });
  });

  it("doesn't call setState if the Promise is fullfilled after unmount", async () => {
    const mockFn = jest.fn(() => new Promise((resolve) => setTimeout(() => resolve('foo'), 100)));
    const mockSetState = jest.fn();

    renderHook(() => useAsyncEffect(mockFn, mockSetState));
    cleanup();
    jest.advanceTimersByTime(200);

    await waitFor(() => {
      expect(mockSetState).not.toBeCalled();
    });
  });
});
