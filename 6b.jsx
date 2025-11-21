import React, { useState } from 'react';
import './App.css';

function MostrarEsconder() {
  const [mostrar, setMostrar] = useState(true);

  return(
    <div>
      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? 'Ocultar Foto' : 'Exibir Foto'}
      </button>
      {mostrar && <img src="src/assets/download.png" alt="Hamburgueria"/>}
    </div>
  );
}

export default MostrarEsconder;