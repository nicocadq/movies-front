import { useHistory, useParams } from 'react-router-dom';

import { useMovie } from 'hooks/useMovie';
import { useDeleteMovie } from 'hooks/useDeleteMovie';
import { useUpdateMovie } from 'hooks/useUpdateMovie';
import { Loading } from './Loading';

const Movie = () => {
  const history = useHistory();
  const { id } = useParams();

  const { error, isLoading, movie } = useMovie({ movieId: id });
  const { deleteMovie } = useDeleteMovie();
  const { updateMovie } = useUpdateMovie();

  const onDeleteClick = async () => {
    await deleteMovie({ movieId: id });

    history.push('/');
  };

  // FIX: It is not working in the backend side
  // TODO: Add a form to field all the data of a movie (pre-filled)
  const onUpdateClick = async () => {
    await updateMovie({
      movieId: id,
      movie: { ...movie, name: 'Some different name' },
    });

    history.go();
  };

  if (isLoading) return <Loading />;

  if (error) return <p>{error.message}</p>;

  return (
    <div className="bg-gray-100 min-h-screen py-16 px-8">
      <div className="flex flex-col w-6/12">
        <h3 className="text-lg font-bold">{movie.name}</h3>
        <img alt="Movie" src={movie.image} />
        <button
          className="px-4 py-3 my-0.5 bg-red-600 text-white shadow-md rounded-lg"
          onClick={onDeleteClick}
        >
          Delete
        </button>
        <button
          className="px-4 py-3 my-0.5 bg-yellow-600 text-white shadow-md rounded-lg"
          onClick={onUpdateClick}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default Movie;
