import { useState, useCallback } from 'react';

import { httpClient } from 'httpClient';

export const useCreateMovie = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const createMovie = useCallback(async ({ movie }) => {
    try {
      setIsLoading(true);

      await httpClient({
        method: 'POST',
        url: `http://localhost:8000/api/movies`,
        data: movie,
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { error, isLoading, createMovie };
};
