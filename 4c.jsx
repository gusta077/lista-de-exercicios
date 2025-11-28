<<<<<<< HEAD
import './App.css'
import React from 'react';

function Previsaotempo({ temperatura, clima, cidade, umidade }) {
  const getIcone = (clima) => {
    const climas = {
      'ensolarado': '☀️',
      'nublado': '⛅',
      'chuvoso': '🌧️',
      'tempestuoso': '🌩️',
      'nevando': '❄️',
    };
    return climas[clima.toLowerCase()] || '☀️';
  };

  const getCorTemperatura = (temp) => {
    if (temp < 15) return '#4190e2';
    if (temp < 25) return '#f5a623';
    return '#d0021b';
  };

=======
function PrevisaoTempo({temperatura, clima, cidade, umidade}){
  const getIcone = (clima) => {
    const climas = {
      'ensolarado': '☀️',
      'nublado': '🌥️',
      'chuvoso': '🌧️',
      'tempestuoso': '⛈️',
      'nevando': '❄️',
    };
    return climas[clima.toLowerCase()] || '🌥️'; 
  };

  const getCorTemperatura = (temp) => {
    if (temp < 15) return '#4a90e2';
    if (temp < 25) return '#f5a623';
    return '#d0021b';
  };
   
>>>>>>> 8afef12dea4e102a44035f993bd89961f2c1e508
  return (
    <div style={{
      border: '2px solid #ddd',
      borderRadius: '15px',
      padding: '25px',
      textAlign: 'center',
<<<<<<< HEAD
      background: 'linear-gradient(135deg, #74b9ff, #0984e3)',
=======
      background: 'linear-gradient(135deg, #74b9ff, #0984e3',
>>>>>>> 8afef12dea4e102a44035f993bd89961f2c1e508
      color: 'white',
      maxWidth: '200px',
      minWidth: '200px',
    }}>
<<<<<<< HEAD
      <h2 style={{ margin: '0 0 15px 0' }}>{cidade}</h2>
      <div style={{ fontSize: '60px', margin: '10px 0' }}>
=======
      <h2 style={{ margin: '0 0 15px 0'}}>{cidade}</h2>
      <div style={{fontSize: '60px', margin: '10px 0'}}>
>>>>>>> 8afef12dea4e102a44035f993bd89961f2c1e508
        {getIcone(clima)}
      </div>
      <div style={{
        fontSize: '48px',
        fontWeight: 'bold',
        color: getCorTemperatura(temperatura),
<<<<<<< HEAD
        textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
      }}>
        {temperatura}°C
      </div>
      <p style={{ fontSize: '18px', margin: '10px 0' }}>{clima}</p>
      <p style={{ fontSize: '14px', opacity: 0.9 }}>Umidade: {umidade}%</p>
    </div>
  );
}

function App() {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    marginTop: '50px',
    flexWrap: 'wrap',
    width: '100%',
  };

  return (
    <div style={containerStyle}>
      <Previsaotempo temperatura={31} clima="ensolarado" cidade="Rio de Janeiro" umidade={65} />
      <Previsaotempo temperatura={20} clima="nublado" cidade="Manaus" umidade={65} />
      <Previsaotempo temperatura={0} clima="nevando" cidade="Madureira" umidade={100} />
    </div>
  );
}

export default App;
=======
        textShadow: '2px 2px 4px rgba(0,0,0,0.3'
      }}>
        {temperatura}°C
        </div>
        <p style={{ fontSize: '18px', margin: '10px 0'}}>{clima}</p>
        <p style={{ fontSize: '14px', opacity: 0.9}}>Umidade: {umidade}%</p>
          </div>
  );
}

function App(){
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    
  }
}
>>>>>>> 8afef12dea4e102a44035f993bd89961f2c1e508
