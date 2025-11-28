import {useState} from 'react'
import './App.css'

function AdicionarTarefas(){
  const [tarefa, setTarefa] = useState('');
  const [lista, setLista] = useState([]);

  const addTarefa = () => {
    if (tarefa.trim()) {
      setLista([...lista, tarefa]);
      setTarefa('');
    }
  };

  return (
    <div>
      <input type="text" value={tarefa} onChange = {(e) => setTarefa(e.target.value)} placeholder = "Digite um item"/>
      <button onClick = {addTarefa}>Nova Tarefa</button>
      <ul>
        {lista.map((tarefalista, index) => (
          <li key = {index}>{tarefalista}</li>
        ))}
      </ul>
    </div>
  )
}

export default AdicionarTarefas;