import { useState, useRef, createContext, useContext, useEffect } from 'react';
import './App.css';

/* --- 1. DADOS E CONTEXTO (Estado Global) --- */
const MusicContext = createContext();

const MusicProvider = ({ children }) => {
  // Dados iniciais
  const [songs] = useState([
    { id: 1, title: "Bohemian Rhapsody", artist: "Queen", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", duration: "5:55" },
    { id: 2, title: "Billie Jean", artist: "Michael Jackson", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", duration: "4:54" },
    { id: 3, title: "Hotel California", artist: "Eagles", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", duration: "6:30" }
  ]);

  const [playlists, setPlaylists] = useState(["Rock Clássico", "Top Brasil", "Relax"]);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  
  const audioRef = useRef(null);

  // Lógica do Player
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

/* --- 2. COMPONENTES VISUAIS --- */

// Barra Lateral
const Sidebar = () => {
  const { playlists, addPlaylist } = useContext(MusicContext);
  return (
    <div className="sidebar">
      <div className="logo">🟢 Spotify Clone</div>
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

// Área Principal (Header + Lista)
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
        <h2>{searchTerm ? "Resultados da busca" : "Músicas Populares"}</h2>
        <div className="grid">
          {filteredSongs.map(song => (
            <div key={song.id} className="card" onClick={() => playTrack(song)}>
              <div className="card-img">🎵</div>
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

// Player (Barra Inferior)
const Player = () => {
  const { currentSong, isPlaying, togglePlay, audioRef } = useContext(MusicContext);

  useEffect(() => {
    if (currentSong && isPlaying) {
      audioRef.current.play().catch(e => console.log("Erro de play:", e));
    }
  }, [currentSong, isPlaying]);

  if (!currentSong) return <div className="player-bar empty">Selecione uma música</div>;

  return (
    <div className="player-bar">
      <audio ref={audioRef} src={currentSong.src} onEnded={() => togglePlay()} />
      
      <div className="track-info">
        <h4>{currentSong.title}</h4>
        <small>{currentSong.artist}</small>
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

/* --- 3. COMPONENTE APP (Montagem Final) --- */
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