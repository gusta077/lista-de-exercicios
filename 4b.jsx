import './App.css'

<<<<<<< HEAD
function CartaoPessoa({ titulo, autor, ano, genero }) {
=======
function Cartaolivro({ titulo, autor, ano, genero }) {
>>>>>>> 8afef12dea4e102a44035f993bd89961f2c1e508
  return (
    <div className="cartao-livro">
      <h2>{titulo}</h2>
      <p><strong>titulo:</strong> {titulo} escreveu este livro</p>
      <p><strong>Autor:</strong> {autor}</p>
      <p><strong>Ano:</strong> {ano}</p>
      <p><strong>genero:</strong> {genero}</p>
    </div>
  );
}

function App() {
  return (
    <div>
<<<<<<< HEAD
      <CartaoPessoa
=======
      <Cartaolivro
>>>>>>> 8afef12dea4e102a44035f993bd89961f2c1e508
        titulo={"O príncipe"}
        ano={"1513"}
        autor={"Nicolau Maquiavel"}
        genero={"literatura política-filosófica"}
      />
    </div>
  );
}

export default App;