import React, {useState} from 'react';
import './App.css';

function CalculadoraArea() {
  const [comprimento, setComprimento] = useState('');
  const [largura, setLargura] = useState('');

  const compNum = parseFloat(comprimento) || 0;
  const largNum = parseFloat(largura) || 0;
  
  const area = compNum * largNum;

  return (
    <div>
      <h2>Calculadora de Área (Retângulo)</h2>
      <input
        type="number"
        value={comprimento}
        onChange={(e) => setComprimento(e.target.value)}
        placeholder="Comprimento"
      />
      <input
        type="number"
        value={largura}
        onChange={(e) => setLargura(e.target.value)}
        placeholder="Largura"
      />
      <h3>A área é: {area}</h3>
    </div>
  );
}

export default CalculadoraArea;