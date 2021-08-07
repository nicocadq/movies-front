const CreateMovie = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-16 px-8">
      <h1 className="text-lg font-bold">Create Movie</h1>
      <form
        className="w-full lg:w-6/12 flex flex-col gap-2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="form-input px-4 py-3 rounded-md border-blue-500 w-full "
          type="text"
          placeholder="Name"
        />
        <input
          className="form-input px-4 py-3 rounded-md border-blue-500 w-full"
          type="text"
          placeholder="Image URL"
        />
        <button
          type="submit"
          className="px-4 py-3 bg-blue-600 text-white shadow-md rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateMovie;
