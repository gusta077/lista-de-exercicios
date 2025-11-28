import {useState} from 'react'
import './App.css'

function PlacarJogo() {
  const [time, setTime] = useState('')
  const [pontos, setPontos] = useState('')
  const [lista, setLista] = useState([])

  const addTime = () => {
    const nome = time.trim()
    const valor = parseInt(pontos, 10)

    if(!nome) return
    if(Number.isNaN(valor)) return

    const novo = { nome_time: nome, pontos: valor}

    const novaLista = [...lista, novo].sort((a, b) => b.pontos - a.pontos)

    setLista(novaLista)
    setTime('')
    setPontos('')
  }


  return (
    <div> 
    
      <div>
        <h2>Placar de Jogos</h2>
        <input type="text" value={time} onChange={(e) => setTime(e.target.value)} placeholder="Digite um time"
        />
        <input type="number" value={pontos} onChange={(e) => setPontos(e.target.value)} placeholder="Pontos"
        />
        <button onClick={addTime}>Novo Time</button>
      </div>
      <ul>
        {lista.map((t, index) => (
          <li key = {`${t.nome_time}-${index}`}>{t.nome_time} - {t.pontos} pontos</li>
        ))}
      </ul>
      
    </div>
  )
}

export default PlacarJogo;