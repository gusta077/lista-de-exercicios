import React, { useState } from 'react';

const humores = {
  feliz: {
    cor: '#e6ffe6',
    emoji: '😀',
    fala: 'Hahaha!',
    nome: 'Feliz'
  },
  triste: {
    cor: '#e6f0ff',
    emoji: '😢',
    fala: 'Sniff...',
    nome: 'Triste'
  },
  raivoso: {
    cor: '#ffe6e6',
    emoji: '😡',
    fala: 'Grrrr!',
    nome: 'Raivoso'
  },
  calmo: {
    cor: '#ffffe6',
    emoji: '😌',
    fala: 'Ahhhh...',
    nome: 'Calmo'
  }
};

function SimuladorHumor() {
  const [humorAtual, setHumorAtual] = useState(humores.feliz);
  
  document.body.style.backgroundColor = humorAtual.cor;

  const alterarHumor = (novoHumor) => {
    setHumorAtual(humores[novoHumor]);
  };

  return (
    <div 
      style={{ 
        padding: '30px', 
        textAlign: 'center', 
        border: '2px solid #333', 
        borderRadius: '12px', 
        maxWidth: '450px', 
        margin: '50px auto',
        backgroundColor: 'white',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
      }}
    >
      <h3>9c) Simulador de Humor</h3>
      
      <div style={{ marginTop: '30px', marginBottom: '30px', minHeight: '120px' }}>
        <div style={{ fontSize: '6em', transition: 'transform 0.5s ease' }}>
          {humorAtual.emoji}
        </div>
        <p style={{ fontSize: '1.5em', fontWeight: 'bold', color: '#333' }}>
          {humorAtual.fala}
        </p>
        <p style={{ fontSize: '0.9em', color: '#666' }}>
          Humor Atual: {humorAtual.nome}
        </p>
      </div>

      <div style={{ marginTop: '20px' }}>
        <button 
          onClick={() => alterarHumor('feliz')} 
          style={{ margin: '5px', padding: '10px 15px', fontSize: '1em', cursor: 'pointer', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px' }}
        >
          Feliz
        </button>
        <button 
          onClick={() => alterarHumor('triste')} 
          style={{ margin: '5px', padding: '10px 15px', fontSize: '1em', cursor: 'pointer', backgroundColor: '#2196F3', color: 'white', border: 'none', borderRadius: '4px' }}
        >
          Triste
        </button>
        <button 
          onClick={() => alterarHumor('raivoso')} 
          style={{ margin: '5px', padding: '10px 15px', fontSize: '1em', cursor: 'pointer', backgroundColor: '#F44336', color: 'white', border: 'none', borderRadius: '4px' }}
        >
          Raivoso
        </button>
        <button 
          onClick={() => alterarHumor('calmo')} 
          style={{ margin: '5px', padding: '10px 15px', fontSize: '1em', cursor: 'pointer', backgroundColor: '#FFC107', color: '#333', border: 'none', borderRadius: '4px' }}
        >
          Calmo
        </button>
      </div>
    </div>
  );
}

export default SimuladorHumor;