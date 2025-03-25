import React, { useState } from 'react';

function App() {
  // Estado para almacenar el valor del input
  const [inputValue, setInputValue] = useState('');

  // Manejar el cambio en el input
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h1>Generar Input con React</h1>
      <input 
        type="text" 
        placeholder="Escribe algo aquí..."
        value={inputValue} 
        onChange={handleInputChange} 
      />
      <p>Valor del input: {inputValue}</p>
    </div>
  );
}

export default App;