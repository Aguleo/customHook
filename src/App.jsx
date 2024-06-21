import { useState } from 'react';
import './useFilterName'

const App = () => {
  const [names] = useState(['Alice', 'Bob', 'Charlie', 'David']);
  const specificName = 'Bob';
  const filteredName = (names, specificName);

  return (
    <div>
      <h1>Filtered Name</h1>
      {filteredName ? (
        <p>The name `{filteredName}` was found in the array.</p>
      ) : (
        <p>The name `{specificName}` was not found in the array.</p>
      )}
    </div>
  );
};

export default App;


