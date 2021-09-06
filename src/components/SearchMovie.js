import { useField } from 'hooks/useField';

const SearchMovie = ({ onSearch }) => {
  const searchField = useField({
    type: 'text',
    name: 'search',
    placeholder: 'Search by movie ID',
  });

  const handleOnChange = (event) => {
    searchField.onChange(event);

    onSearch(Number(searchField.value));
  };

  return (
    <div className="bg-white flex rounded-lg shadow-xl my-4 ">
      <input
        {...searchField}
        className="form-input rounded-lg w-full py-4 px-6 focus:outline-none"
        onChange={handleOnChange}
      />
    </div>
  );
};

export { SearchMovie };
