import React, {useState} from 'react';
import './App.css'

function AlterarCorFundo(){
  const [cor, setCor] = useState('white');

  const mudarCor = (novaCor) => {
    setCor(novaCor);
    document.body.style.backgroundColor = novaCor;
  };

  return (
    <div>
      <h2>Alterar cor de fundo</h2>
      <button onClick={() => mudarCor('lightblue')}>Azul</button>
      <button onClick={() => mudarCor('lightgreen')}>Verde</button>
      <button onClick={() => mudarCor('lightcoral')}>Coral</button>
      <button onClick={() => mudarCor('white')}>Branco</button>
    </div>
  );
}

export default AlterarCorFundo;