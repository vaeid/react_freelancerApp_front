import { useEffect, useState } from 'react';

import { getFromLocalStorage, saveToLocalStorage } from '../utils/localStorageUtils';
export default function useLocalStorageState(key, initialState) {
  const [value, setValue] = useState(getFromLocalStorage(key, initialState));
  useEffect(() => {
    saveToLocalStorage(key, value);

    return () => {};
  }, [key, value]);
  return [value, setValue];
}
