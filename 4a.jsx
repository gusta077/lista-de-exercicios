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
    </div>
  );
}

function App() {
  return (
    <div>
      <CartaoPessoa nome={"Gustavo"} idade={17} profissao="Militar" />
    </div>
  );
}

export default App;
