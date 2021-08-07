import { useState, useCallback } from 'react';

import { httpClient } from 'httpClient';

export const useDeleteMovie = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteMovie = useCallback(async ({ movieId }) => {
    try {
      setIsLoading(true);

      await httpClient({
        method: 'DELETE',
        url: `http://localhost:8000/api/movies/${movieId}`,
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { error, isLoading, deleteMovie };
};
