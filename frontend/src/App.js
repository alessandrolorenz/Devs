import React, {useState} from 'react';

// Componente: bloco isolado de html/css ou javascript não interfere no resto
// Propriedade:  Informações que o componente PAI passa para o componente FILHO
// Estado: Informações mantidas pelo componente

function App() {
  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter(counter + 1)
  }

  function decrementCounter() {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Contador: {counter}</h1>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>

    </>
  );
}

export default App;
