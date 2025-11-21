import { useState } from 'react';
import './App.css';
function BotaoFavorito({ usarLua = false }) {
  const [favoritos, setFavoritos] = useState(0);
  const [favoritado, setFavoritado] = useState(false);


  const toggleFavorito = () => {
    if (favoritado) {
      setFavoritos(favoritos - 1);
      setFavoritado(false);
    } else {
      setFavoritos(favoritos + 1);
      setFavoritado(true);
    }
  };


  const iconeVazio = usarLua ? "🌙" : "☆";
  const iconeCheio = usarLua ? "🌚" : "★";


  return (
    <div>
      <button
        onClick={toggleFavorito}
        style={{
          backgroundColor: favoritado ? '#ffecb3' : '#e0e0e0',
          color: favoritado ? '#d19000' : '#333',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '1.2em',
        }}
      >
        {favoritado ? iconeCheio : iconeVazio}
        {" "}
        Favorito ({favoritos})
      </button>
    </div>
  );
}


export default BotaoFavorito;