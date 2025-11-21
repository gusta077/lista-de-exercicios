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