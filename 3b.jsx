function ListaComidas() {
  const comidas = ["Strogonoff", "Bife com batatas", "Pizza", "Salada"];

  return (
    <div>
      <h2>Minhas comidas favoritas</h2>
      <ol>
        {comidas.map((comida, index) => (
          <li key={index}>{comida}</li>
        ))}
      </ol>
    </div>
  );
}

export default ListaComidas;