import { useState, useCallback } from 'react';

const useToggle = (initialValue: boolean): [boolean, () => void] => {
  const [value, setValue] = useState(initialValue);
  const toggler = useCallback(() => setValue(!value), [value]);
  return [value, toggler];
};

export default useToggle;
