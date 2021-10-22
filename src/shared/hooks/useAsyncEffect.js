import { useEffect } from 'react';

export default function useAsyncEffect(fn, setState, dependencies = []) {
  let isMounted;

  const mountComponent = () => { isMounted = true; };
  useEffect(mountComponent, []);

  const unmountComponent = () => { isMounted = false; };
  useEffect(() => unmountComponent, []);

  const performAsyncFn = () => {
    fn().then((newState) => isMounted && setState(newState));
  };
  useEffect(performAsyncFn, dependencies);
}
