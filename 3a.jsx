import './App.css'


function ListaHobbies() {
  const hobbies = ["Leitura", "Natação", "Programação", "Culinária"];


  return (
    <div>
      <h2>Meus Hobbies Favoritos</h2>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}


export default ListaHobbies;
