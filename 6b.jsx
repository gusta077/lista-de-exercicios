import React, { useState } from 'react';
import './App.css';

function MostrarEsconder() {
  const [mostrar, setMostrar] = useState(true);
<<<<<<< HEAD
  return (
    <div>
      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? 'esconder' : 'mostrar'}
      </button>
      {mostrar && <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhU... (etc)" />}
    </div>
  )
=======

  return(
    <div>
      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? 'Ocultar Foto' : 'Exibir Foto'}
      </button>
      {mostrar && <img src="src/assets/download.png" alt="Hamburgueria"/>}
    </div>
  );
>>>>>>> 8afef12dea4e102a44035f993bd89961f2c1e508
}

export default MostrarEsconder;