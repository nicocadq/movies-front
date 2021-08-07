import { useEffect, useState } from 'react';

import { httpClient } from 'httpClient';

export const useMovie = ({ movieId }) => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setIsLoading(true);

        const { data } = await httpClient({
          method: 'GET',
          url: `http://localhost:8000/api/movies/${movieId}`,
        });

        setMovie(data);
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
