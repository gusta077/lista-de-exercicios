import React from 'react';

function App() {
  // Dados da missão
  const missionData = {
    commanderName: "Gustavo Batista De Oliveira",
    currentDate: "29/09/2025",
    missionProgress: "30.0%",
    planet: {
      name: "Saturno",
      temp: "-138°C",
      gravity: "0,7 g/cm³",
      weather: "Muito frio",
      description: "Saturno é um gigante gasoso conhecido por seus impressionantes anéis compostos de gelo e poeira."
    },
    spaceWeather: {
      climate: "Calmo",
      solarHumidity: "Alta",
      cosmicRadiation: "Media",
      quantumDegree: "100%"
    },
    logs: [
      "[2025-09-01 - 08:30] Procedimento de Entrada no Cinturão de Themis. Escudos defletores frontais ativados em modo de varredura.",
      "[2025-09-15 - 15:00] Rota de colisão iminente com objeto de classe-C. Manobra evasiva automática Vespa executada com sucesso.",
      "[2025-09-28 - 19:45] Análise espectrográfica do asteroide-alvo (ID: TH-224) concluída. Detectada alta concentração de Xylos-7.",
      "[2025-09-30 - 19:00] Perda de sinal com a Sonda-02. Última telemetria indicou uma súbita emissão de energia."
    ]
  };

  return (
    <div style={styles.container}>
      {/* Cabeçalho */}
      <header style={styles.header}>
        <h1 style={styles.title}>Boas vindas, Comandante {missionData.commanderName}!</h1>
        <p style={styles.date}>Data de hoje: {missionData.currentDate}</p>
      </header>

      {/* Status da Missão */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Status da Missão</h2>
        <div style={styles.contentBlock}>
          <p style={styles.text}>Progresso para Saturno</p>
          <p style={styles.text}>{missionData.missionProgress} da jornada completa</p>
        </div>
      </section>

      {/* Info do Planeta */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Info do Planeta: {missionData.planet.name}</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Temperatura: {missionData.planet.temp} ❄️</li>
          <li style={styles.listItem}>Gravidade: {missionData.planet.gravity} ❗</li>
          <li style={styles.listItem}>Clima: {missionData.planet.weather} ✨</li>
        </ul>
        <p style={styles.description}>{missionData.planet.description}</p>
      </section>

      {/* Previsão do Tempo Espacial */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Previsão do Tempo Espacial</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Clima: {missionData.spaceWeather.climate} 🌕</li>
          <li style={styles.listItem}>Umidade Solar: {missionData.spaceWeather.solarHumidity} ☢️</li>
          <li style={styles.listItem}>Radiação Cósmica: {missionData.spaceWeather.cosmicRadiation} ☢️</li>
          <li style={styles.listItem}>Grau Quântico: {missionData.spaceWeather.quantumDegree} ⚛️</li>
        </ul>
      </section>

      {/* Relatório de Bordo */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Relatório de Bordo (Event Log)</h2>
        <ol style={styles.logList}>
          {missionData.logs.map((log, index) => (
            <li key={index} style={styles.logItem}>{log}</li>
          ))}
        </ol>
      </section>
    </div>
  );
}

// Estilos CSS-in-JS
const styles = {
  container: {
    backgroundColor: '#05080f',
    color: '#e0e6ed',
    fontFamily: 'Arial, sans-serif',
    padding: '40px',
    minHeight: '100vh', // Garante tela cheia
    width: '100%',
    boxSizing: 'border-box',
    lineHeight: '1.6',
    position: 'absolute', // Garante que cubra o fundo branco padrão do Vite
    top: 0,
    left: 0
  },
  header: { marginBottom: '30px' },
  title: { fontSize: '2rem', fontWeight: 'bold', marginBottom: '10px', color: '#ffffff' },
  date: { fontSize: '0.9rem', color: '#a0aab5' },
  section: { marginBottom: '30px' },
  sectionTitle: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    marginBottom: '15px',
    color: '#ffffff',
    borderBottom: '1px solid #1f293a',
    paddingBottom: '5px',
    display: 'inline-block'
  },
  contentBlock: { marginBottom: '10px' },
  text: { marginBottom: '5px', fontSize: '1rem' },
  list: { listStyleType: 'none', padding: 0, margin: 0 },
  listItem: { marginBottom: '10px', fontSize: '1rem' },
  description: { marginTop: '15px', fontStyle: 'italic', color: '#cddbf2' },
  logList: { paddingLeft: '20px', color: '#cddbf2' },
  logItem: { marginBottom: '8px', fontSize: '0.95rem' }
};

export default App;
