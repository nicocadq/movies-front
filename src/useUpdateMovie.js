import { useState, useCallback } from "react";

export const useUpdateMovie = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateMovie = useCallback(async ({ movieId, movie }) => {
    try {
      setIsLoading(true);

      await fetch(`http://localhost:8000/api/movies/${movieId}`, {
        method: "PATCH",
        body: JSON.stringify(movie),
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { error, isLoading, updateMovie };
};
