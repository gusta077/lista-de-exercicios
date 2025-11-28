<<<<<<< HEAD
import './App.css'

function Cartaopessoa({nome, idade, profissao}) {
  return (
    <div className='cartao-pessoa'>
      <h2>{nome}</h2>
      <p><strong>Idade:</strong> {idade} anos</p>
      <p><strong>Profissao</strong> {profissao}</p>
=======
function CartaoPessoa({ nome, idade, profissao }) {
  return (
    <div className="cartao-pessoa">
      <h2>{nome}</h2>
      <p>
        <strong>Idade:</strong> {idade} anos
      </p>
      <p>
        <strong>Profissão:</strong> {profissao}
      </p>
>>>>>>> 8afef12dea4e102a44035f993bd89961f2c1e508
    </div>
  );
}

function App() {
<<<<<<< HEAD
  return(
    <div>
      <Cartaopessoa nome="gustavo batista" idade={17} profissao="programador" />
=======
  return (
    <div>
      <CartaoPessoa nome={"Gustavo"} idade={17} profissao="Militar" />
>>>>>>> 8afef12dea4e102a44035f993bd89961f2c1e508
    </div>
  );
}

<<<<<<< HEAD
export default App
=======
export default App;
>>>>>>> 8afef12dea4e102a44035f993bd89961f2c1e508
