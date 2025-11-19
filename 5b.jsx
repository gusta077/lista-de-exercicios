import React, { useState } from "react";

const Contador = () => {
  const [valor, setValor] = useState(10);

  const aumentar = () => {
    setValor(valor + 5);
  };

  const diminuir = () => {
    setValor(valor - 5);
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
        diminuir (-5)
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
        aumentar (+5)
      </button>
    </div>
  );
};

export default Contador;
