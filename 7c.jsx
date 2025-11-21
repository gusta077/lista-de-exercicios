import React, { useState } from 'react';
import './App.css';

function InputTempoReal() {
  const [texto, setTexto] = useState('');
  const textom = texto.length;

  return (
    <div>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Digite algo..."
      />
      <h2>Você digitou: {texto}</h2>
      {textom > 0 && textom < 3 && (
        <p className="vermelho">Mínimo de 3 caracteres</p>
      )}
      {textom >= 3 && (
        <p className="verde">Mais de 3 caracteres</p>
      )}
    </div>
  );
}

export default InputTempoReal;