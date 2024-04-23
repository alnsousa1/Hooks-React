//para utilizar o state, antes de tudo é necessário importá-lo do react
import { useState } from 'react';

const App = () => {
  //declarando um STATE e iniciando ele como zero
  const [count, setCount] = useState(0);

  //função que adiciona +1 no state
  //o "prevState" pega o estado padrão do estado, no caso, o valor ZERO e está adicionando +1
  const incrementCount = () => {
    setCount((prevState) => prevState + 1);
  };

  return(
    <div>
      <h1>{count}</h1>
      <button onClick={incrementCount}>Adicionar</button>
    </div>
  )
}


export default App;
