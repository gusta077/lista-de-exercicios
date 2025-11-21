import React, { useState } from 'react';

function AlterarTamanhoFonte() {
  const [tamanho, setTamanho] = useState('24px');
  const [nomeTamanho, setNomeTamanho] = useState('Médio');

  const alterarTamanho = (novoTamanho, nome) => {
    setTamanho(novoTamanho);
    setNomeTamanho(nome);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center', border: '1px solid #ddd', borderRadius: '8px', maxWidth: '400px', margin: '20px auto' }}>
      <h3>9b) Alteração de Tamanho de Fonte</h3>
      
      <p style={{ marginTop: '15px', marginBottom: '30px' }}>
        Tamanho Atual: <strong>{nomeTamanho}</strong>
      </p>

      <p 
        style={{ 
          fontSize: tamanho, 
          transition: 'font-size 0.3s ease-in-out',
          minHeight: '80px',
          border: '1px dashed #aaa',
          padding: '10px'
        }}
      >
        Este é o texto de exemplo cuja fonte será alterada pelos botões abaixo.
      </p>

      <div style={{ marginTop: '20px' }}>
        <button 
          onClick={() => alterarTamanho('16px', 'Pequeno')} 
          style={{ margin: '5px', padding: '8px 15px', fontSize: '0.9em', cursor: 'pointer', backgroundColor: '#e0e0e0', border: 'none', borderRadius: '4px' }}
        >
          Pequeno
        </button>
        <button 
          onClick={() => alterarTamanho('24px', 'Médio')} 
          style={{ margin: '5px', padding: '8px 15px', fontSize: '0.9em', cursor: 'pointer', backgroundColor: '#e0e0e0', border: 'none', borderRadius: '4px' }}
        >
          Médio
        </button>
        <button 
          onClick={() => alterarTamanho('32px', 'Grande')} 
          style={{ margin: '5px', padding: '8px 15px', fontSize: '0.9em', cursor: 'pointer', backgroundColor: '#e0e0e0', border: 'none', borderRadius: '4px' }}
        >
          Grande
        </button>
      </div>
    </div>
  );
}

export default AlterarTamanhoFonte;