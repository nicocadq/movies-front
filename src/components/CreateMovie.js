import { useHistory } from 'react-router-dom';

import { useField } from 'hooks/useField';
import { useCreateMovie } from 'hooks/useCreateMovie';

const CreateMovie = () => {
  const history = useHistory();

  const nameField = useField({
    type: 'text',
    name: 'name',
    placeholder: 'Name',
  });

  const imageField = useField({
    type: 'text',
    name: 'image',
    placeholder: 'Image URL',
  });

  const { isLoading, error, createMovie } = useCreateMovie();

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    await createMovie({
      movie: { name: nameField.value, image: imageField.value },
    });

    history.push('/');
  };

  return (
    <div className="bg-gray-100 min-h-screen py-16 px-8">
      <h1 className="text-lg font-bold">Create Movie</h1>
      <form
        className="w-full lg:w-6/12 flex flex-col gap-2"
        onSubmit={handleOnSubmit}
      >
        <input
          {...nameField}
          className="form-input px-4 py-3 rounded-md border-blue-500 w-full "
        />
        <input
          {...imageField}
          className="form-input px-4 py-3 rounded-md border-blue-500 w-full"
        />
        <button
          type="submit"
          className="px-4 py-3 bg-blue-600 text-white shadow-md rounded-lg disabled:opacity-50"
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Submit'}
        </button>
      </form>
      <p>{error?.message}</p>
    </div>
  );
};

export default CreateMovie;
