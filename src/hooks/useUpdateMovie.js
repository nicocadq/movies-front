import { useState, useCallback } from 'react';

import { httpClient } from 'httpClient';

export const useUpdateMovie = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateMovie = useCallback(async ({ movieId, movie }) => {
    try {
      setIsLoading(true);

      await httpClient({
        method: 'PATCH',
        url: `http://localhost:8000/api/movies/${movieId}`,
        data: movie,
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { error, isLoading, updateMovie };
};
