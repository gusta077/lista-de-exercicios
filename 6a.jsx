import React, { useState } from 'react';
import './App.css';

function MostrarEsconder() {
  const [mostrar, setMostrar] = useState(true);
  return (
    <div>
      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? 'esconder' : 'mostrar'}
      </button>
      {mostrar && 'oi'}
    </div>
  )
}

export default MostrarEsconder;