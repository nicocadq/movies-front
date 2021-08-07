import { useEffect, useState } from "react";

export const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);

        const response = await fetch("http://localhost:8000/api/movies");

        const responseData = await response.json();

        setMovies(responseData?.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return { error, isLoading, movies };
};
