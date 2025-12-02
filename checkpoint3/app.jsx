import { useState, useRef, createContext, useContext, useEffect } from 'react';
import './App.css';
const MusicContext = createContext();

const MusicProvider = ({ children }) => {
  const [songs] = useState([
    { 
      id: 1, 
      title: "Águas de Março", 
      artist: "Elis Regina & Tom Jobim", 
      cover: "https://placehold.co/300/e85d04/ffffff?text=Elis+%26+Tom", 
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", 
      duration: "3:32" 
    },
    { 
      id: 2, 
      title: "O Mundo é um Moinho", 
      artist: "Cartola", 
      cover: "https://placehold.co/300/2a9d8f/ffffff?text=Cartola", 
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3", 
      duration: "3:54" 
    },
    { 
      id: 3, 
      title: "Construção", 
      artist: "Chico Buarque", 
      cover: "https://placehold.co/300/264653/ffffff?text=Construcao", 
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", 
      duration: "6:24" 
    },
    { 
      id: 4, 
      title: "Garota de Ipanema", 
      artist: "Tom Jobim", 
      cover: "https://placehold.co/300/e9c46a/000000?text=Tom+Jobim", 
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", 
      duration: "2:45" 
    },
    { 
      id: 5, 
      title: "Mas Que Nada", 
      artist: "Jorge Ben Jor", 
      cover: "https://placehold.co/300/f4a261/000000?text=Jorge+Ben", 
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3", 
      duration: "3:02" 
    }
  ]);

  const [playlists, setPlaylists] = useState(["Bossa Nova Essentials", "MPB Clássica", "Samba Raiz"]);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  
  const audioRef = useRef(null);

  const playTrack = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const toggleFavorite = (id) => {
    setFavorites(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]);
  };

  const addPlaylist = () => {
    const name = prompt("Nome da nova playlist:");
    if (name) setPlaylists([...playlists, name]);
  };

  return (
    <MusicContext.Provider value={{ 
      songs, playlists, currentSong, isPlaying, favorites, searchTerm, 
      playTrack, togglePlay, toggleFavorite, setSearchTerm, addPlaylist, audioRef 
    }}>
      {children}
    </MusicContext.Provider>
  );
};
const Sidebar = () => {
  const { playlists, addPlaylist } = useContext(MusicContext);
  return (
    <div className="sidebar">
      {}
      <div className="logo">🟢 Spotify</div>
      <nav>
        <p>🏠 Início</p>
        <p>🔍 Buscar</p>
        <p>📚 Biblioteca</p>
      </nav>
      <div className="playlists-area">
        <div className="playlist-header">
          <span>PLAYLISTS</span>
          <button onClick={addPlaylist}>+</button>
        </div>
        <ul>
          {playlists.map((pl, index) => <li key={index}>{pl}</li>)}
        </ul>
      </div>
    </div>
  );
};

const MainContent = () => {
  const { songs, searchTerm, setSearchTerm, playTrack, toggleFavorite, favorites } = useContext(MusicContext);
  
  const filteredSongs = songs.filter(song => 
    song.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    song.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="main-content">
      <header>
        <input 
          type="text" 
          placeholder="O que você quer ouvir?" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="avatar">👤</div>
      </header>

      <div className="song-list">
        <h2>{searchTerm ? "Resultados da busca" : "Clássicos da MPB"}</h2>
        <div className="grid">
          {filteredSongs.map(song => (
            <div key={song.id} className="card" onClick={() => playTrack(song)}>
              <img src={song.cover} alt={song.title} className="card-img" />
              <h3>{song.title}</h3>
              <p>{song.artist}</p>
              <button 
                className={`fav-btn ${favorites.includes(song.id) ? 'active' : ''}`}
                onClick={(e) => { e.stopPropagation(); toggleFavorite(song.id); }}
              >
                {favorites.includes(song.id) ? '❤️' : '🤍'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Player = () => {
  const { currentSong, isPlaying, togglePlay, audioRef } = useContext(MusicContext);

  useEffect(() => {
    if (currentSong && isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
          playPromise.catch(e => console.log("Erro ao reproduzir:", e));
      }
    }
  }, [currentSong, isPlaying]);

  if (!currentSong) return <div className="player-bar empty">Selecione uma música no Spotify</div>;

  return (
    <div className="player-bar">
      <audio ref={audioRef} src={currentSong.src} onEnded={() => togglePlay()} />
      
      <div className="track-info">
        <img src={currentSong.cover} alt="Capa" className="player-cover" />
        <div>
          <h4>{currentSong.title}</h4>
          <small>{currentSong.artist}</small>
        </div>
      </div>

      <div className="controls">
        <button onClick={togglePlay} className="play-btn">
          {isPlaying ? "⏸️" : "▶️"}
        </button>
        <input type="range" className="progress" />
      </div>

      <div className="volume">🔊</div>
    </div>
  );
};

function App() {
  return (
    <MusicProvider>
      <div className="app-container">
        <Sidebar />
        <MainContent />
        <Player />
      </div>
    </MusicProvider>
  );
}

export default App;