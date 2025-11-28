import { useState } from 'react';
import './App.css';


function MedidorFelicidade() {
  const expressoes = ["😐", "🙂", "😊", "😁", "🤩"];
  const [nivel, setNivel] = useState(0);
  const sorrir = () => {
    if (nivel < expressoes.length - 1) {
      setNivel(nivel + 1);
    }
  };


  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Medidor de Felicidade</h2>
      <div style={{ fontSize: "6em", margin: "20px" }}>
        {expressoes[nivel]}
      </div>
      <p>Nível de felicidade: {nivel}</p>
      <button
        onClick={sorrir}
        style={{
          backgroundColor: "#ffeb3b",
          color: "#333",
          border: "none",
          padding: "12px 28px",
          borderRadius: "50px",
          fontSize: "1.1em",
          cursor: nivel < expressoes.length - 1 ? "pointer" : "not-allowed"
        }}
        disabled={nivel >= expressoes.length - 1}
      >
        Sorrir {nivel < expressoes.length - 1 ? "😊" : ""}
      </button>
    </div>
  );
}


export default MedidorFelicidade;