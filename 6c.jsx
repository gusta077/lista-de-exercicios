<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function AbrirFechar() {
  const [abrir, setAbrir] = useState(true);
  return(
    <div>
      <div className="cofre">
        <p>Cofre Digital</p>
      </div>
      <p>🔒</p>

      <button onClick={() => setAbrir(!abrir)}>
        {abrir ? 'fechar 🔒' : 'abrir 🔓'}
      </button>

      {abrir && <ol className="lista">
        <li>computador,</li>
        <li>celular,</li>
        <li>baixar,</li>
        <li>chocolates,</li>
        <li>album da copa 2026</li>
      </ol>}
    </div>
  )
}

export default AbrirFechar;
=======
import { useState } from 'react';
import './App.css';

function Lista_Itens() {
  const itens = ["Diamante", "Ouro", "Ferro", "Esmeralda"];
  return(
    <div>
      <ul>
        {itens.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function Cofre_Digital() {
  const [abrir, setAbrir] = useState(true);
  return(
    <div>
      <button onClick={() => setAbrir(!abrir)}>
        {abrir ? 'Fechar Cofre 🔒' : 'Abrir Cofre 🔓'}
      </button>
      {abrir && <Lista_Itens />}
    </div>
  );
}

export default Cofre_Digital;
>>>>>>> 8afef12dea4e102a44035f993bd89961f2c1e508
