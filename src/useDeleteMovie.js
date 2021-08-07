import { useState, useCallback } from "react";

export const useDeleteMovie = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteMovie = useCallback(async ({ movieId }) => {
    try {
      setIsLoading(true);

      await fetch(`http://localhost:8000/api/movies/${movieId}`, {
        method: "DELETE",
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { error, isLoading, deleteMovie };
};
