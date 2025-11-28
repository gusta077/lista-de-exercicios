import './App.css'

function Cartaopessoa({nome, idade, profissao}) {
  return (
    <div className='cartao-pessoa'>
      <h2>{nome}</h2>
      <p><strong>Idade:</strong> {idade} anos</p>
      <p><strong>Profissao</strong> {profissao}</p>
    </div>
  );
}

function App() {
  return(
    <div>
      <Cartaopessoa nome="gustavo batista" idade={17} profissao="programador" />
    </div>
  );
}

export default App