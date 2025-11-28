<<<<<<< HEAD
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
=======
import './App.css'
import React, { useState } from 'react';

function MostrarEsconder() {
  const [mostrar, setMostrar] = useState(true);

  return(
    <div>
      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? 'Esconder' : 'Mostrar'}
      </button>
      {mostrar && <p>Este texto pode ser mostrado ou escondido!</p>}
    </div>
  );
>>>>>>> 8afef12dea4e102a44035f993bd89961f2c1e508
}

export default MostrarEsconder;