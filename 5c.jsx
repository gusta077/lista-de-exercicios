import React, { useState } from "react";

const TermometroDigital = () => {
  const [temperatura, setTemperatura] = useState(20);

  const determinarCor = () => {
    if (temperatura < 20) {
      return "blue";
    } else if (temperatura > 20) {
      return "red";
    } else {
      return "black";
    }
  };

  const aquecer = () => {
    setTemperatura(temperatura + 2);
  };

  const esfriar = () => {
    setTemperatura(temperatura - 2);
  };

  const corDoDisplay = determinarCor();

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        maxWidth: "300px",
        margin: "0 auto",
      }}
    >
      <h3>Termômetro Digital</h3>

      <div
        style={{
          fontSize: "3em",
          margin: "15px 0",
          padding: "10px",
          border: "2px solid #333",
          borderRadius: "4px",
          fontWeight: "bold",
          color: corDoDisplay,
        }}
      >
        {temperatura}°C
      </div>

      <button
        onClick={aquecer}
        style={{
          padding: "10px 15px",
          fontSize: "1.1em",
          margin: "5px",
          cursor: "pointer",
          backgroundColor: "red",
          color: "white",
          border: "none",
        }}
      >
        Aquecer (+2°C)
      </button>

      <button
        onClick={esfriar}
        style={{
          padding: "10px 15px",
          fontSize: "1.1em",
          margin: "5px",
          cursor: "pointer",
          backgroundColor: "blue",
          color: "white",
          border: "none",
        }}
      >
        Esfriar (-2°C)
      </button>
    </div>
  );
};

export default TermometroDigital;