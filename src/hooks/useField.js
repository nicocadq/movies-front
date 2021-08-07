import { useState } from 'react';

export const useField = (inputProps) => {
  const [value, setValue] = useState('');

  const onChange = ({ target }) => setValue(target.value);

  return { ...inputProps, value, onChange };
};
