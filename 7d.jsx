import React, {useState} from 'react';
import './App.css';

function InputTempoReal(){
  const [texto, setTexto] = useState('');
  const textom = texto.length;

  return (
    <div>
      <input
        type="text" maxLength={50}
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder='Digite algo...'/>
      <h2> Você digitou: {texto} Total de caracteres:{textom}/50</h2>
    </div>
  );
}

export default InputTempoReal;