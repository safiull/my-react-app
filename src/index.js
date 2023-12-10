import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function Home() {
  const [tbodyCount, setTbodyCount] = useState(1);

  const handleAddRow = () => {
    setTbodyCount(prevCount => prevCount + 1);
  };

  const handleRemoveRow = () => {
    if (tbodyCount > 1) {
      setTbodyCount(prevCount => prevCount - 1);
    }
  };

  return (
    <div>
      <button onClick={handleAddRow}>+</button>
      <table>
        {[...Array(tbodyCount)].map((_, index) => (
          <tbody key={index}>
            <tr>
              <td><input type='text' /></td>
              <td><input type='text' /></td>
              <td><input type='text' /></td>
              <td><input type='text' /></td>
              <td><button onClick={handleRemoveRow}>-</button></td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<Home />);
