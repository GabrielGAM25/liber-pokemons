import { renderHook, act } from '@testing-library/react-hooks';

import useLoading from './useLoading';

describe('useLoading(initialValue)', () => {
  it('set isLoading to initialValue on initialization', () => {
    const { result: loadingResult } = renderHook(() => useLoading(true));
    const { result: notLoadingResult } = renderHook(() => useLoading(false));

    expect(loadingResult.current.isLoading).toBeTruthy();
    expect(notLoadingResult.current.isLoading).toBeFalsy();
  });

  it('set isLoading to true on call to startLoading', () => {
    const { result } = renderHook(() => useLoading(false));

    act(result.current.startLoading);

    expect(result.current.isLoading).toBeTruthy();
  });

  it('set isLoading to false on call to stopLoading', () => {
    const { result } = renderHook(() => useLoading(true));

    act(result.current.stopLoading);

    expect(result.current.isLoading).toBeFalsy();
  });
});
