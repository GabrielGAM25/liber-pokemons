import { useState } from 'react';

const useLoading = (initialValue = true) => {
  const [isLoading, setIsLoading] = useState(initialValue);

  const startLoading = () => setIsLoading(true);
  const stopLoading = () => setIsLoading(false);

  return { isLoading, startLoading, stopLoading };
};

export default useLoading;
