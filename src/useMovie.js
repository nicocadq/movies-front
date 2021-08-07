import { useEffect, useState } from "react";

export const useMovie = ({ movieId }) => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setIsLoading(true);

        const response = await fetch(
          `http://localhost:8000/api/movies/${movieId}`
        );

        const responseData = await response.json();

        setMovie(responseData?.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();
  }, [movieId]);

  return { error, isLoading, movie };
};
