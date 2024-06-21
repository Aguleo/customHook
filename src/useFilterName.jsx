import { useState, useEffect } from 'react';

const useFilterName = (namesArray, specificName) => {
  const [filteredName, setFilteredName] = useState(null);

  useEffect(() => {
    const name = namesArray.find(name => name === specificName);
    setFilteredName(name || null);
  }, [namesArray, specificName]);

  return filteredName;
};

export default useFilterName;
