import './App.css'

function CartaoPessoa({ titulo, autor, ano, genero }) {
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
      <CartaoPessoa
        titulo={"O príncipe"}
        ano={"1513"}
        autor={"Nicolau Maquiavel"}
        genero={"literatura política-filosófica"}
      />
    </div>
  );
}

export default App;