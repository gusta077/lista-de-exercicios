<<<<<<< HEAD
import React, { useState } from 'react';
import './App.css';

function Contador() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  )
}

export default Contador;
=======
import React, { useState } from "react";

const Contador = () => {
  const [valor, setValor] = useState(0);

  const aumentar = () => {
    setValor(valor + 1);
  };

  const diminuir = () => {
    setValor(valor - 1);
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <h3>Contador</h3>

      <p style={{ fontSize: "3em", margin: "10px 0" }}>{valor}</p>

      <button
        onClick={diminuir}
        style={{
          padding: "10px 20px",
          fontSize: "1.2em",
          margin: "5px",
          cursor: "pointer",
        }}
      >
        diminuir (-1)
      </button>

      <button
        onClick={aumentar}
        style={{
          padding: "10px 20px",
          fontSize: "1.2em",
          margin: "5px",
          cursor: "pointer",
        }}
      >
        aumentar (+1)
      </button>
    </div>
  );
};

export default Contador;
>>>>>>> 8afef12dea4e102a44035f993bd89961f2c1e508
