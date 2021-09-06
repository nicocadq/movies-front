import { useEffect, useState } from 'react';

import { httpClient } from 'httpClient';

export const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);

        const { data } = await httpClient({
          method: 'GET',
          url: 'http://localhost:8000/api/movies',
        });

        setMovies(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return { error, isLoading, movies, setMovies };
};
