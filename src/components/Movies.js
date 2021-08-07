import { Link, useHistory } from 'react-router-dom';

import { useMovies } from 'hooks/useMovies';
import { Loading } from './Loading';

const Movies = () => {
  const history = useHistory();
  const { error, isLoading, movies } = useMovies();

  const handleMovieClick = (id) => () => history.push(`/${id}`);

  if (isLoading) return <Loading />;

  if (error) return <p>{error.message}</p>;

  return (
    <div className="bg-gray-100 min-h-screen py-16 px-8 flex flex-col">
      <Link
        to="/create-movie"
        className="p-6 bg-blue-600 text-white shadow-md rounded-lg"
      >
        Create a movie
      </Link>
      <h1 className="m-2.5 text-xl font-bold">Movies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 xl-grid-cols-4 gap-y-10 gap-x-6 ">
        {movies.map(({ name, id, image }) => (
          <div
            key={id}
            onClick={handleMovieClick(id)}
            className="container mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300 cursor-pointer"
          >
            <img src={image} alt="" className="rounded-t-lg w-full" />
            <div className="p-6">
              <h1 className="hover:text-indigo-600 transition duration-200 text-gray-900 ">
                {name}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
