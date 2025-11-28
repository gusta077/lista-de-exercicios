import React, {useState} from 'react';
import './App.css';

function InputTempoReal(){
  const [texto, setTexto] = useState('');
  const textom = texto.length;
  const texto_anag = texto.split('').reverse().join('')

  return (
    <div>
      <h1>Gerador de senha criptografada</h1>
      <input
        type="text" maxLength={50}
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder='Digite algo...'/>
      <h2> Você digitou: {texto}</h2>
      {textom > 0 &&(
        <h2>Senha Criptografada: {texto_anag}{textom}%&</h2>
      )}
    </div>
  );
}

export default InputTempoReal;