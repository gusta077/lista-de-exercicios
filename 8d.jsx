import { useState } from 'react';

import './App.css';



function PlacarJogos() {

  const [nomeTime, setNomeTime] = useState('');

  const [pontuacao, setPontuacao] = useState('');

 

  const [times, setTimes] = useState([]);

  const [idEmEdicao, setIdEmEdicao] = useState(null);

  const [pontuacaoEditada, setPontuacaoEditada] = useState('');



  const adicionarTime = (event) => {

    event.preventDefault();

    if (nomeTime.trim() && pontuacao.trim()) {

      const novoTime = {

        id: Date.now(),

        nome: nomeTime.trim(),

        pontos: parseInt(pontuacao, 10),

      };



      const listaAtualizada = [...times, novoTime];

      listaAtualizada.sort((a, b) => b.pontos - a.pontos);

      setTimes(listaAtualizada);



      setNomeTime('');

      setPontuacao('');

    }

  };

  const handleEditar = (time) => {

    setIdEmEdicao(time.id);

    setPontuacaoEditada(time.pontos);

  };



  const handleSalvar = (idDoTime) => {

    const listaAtualizada = times.map((time) => {

      if (time.id === idDoTime) {

        return { ...time, pontos: parseInt(pontuacaoEditada, 10) || 0 };

      }

      return time;

    });

    listaAtualizada.sort((a, b) => b.pontos - a.pontos);

    setTimes(listaAtualizada);

    setIdEmEdicao(null);

  };

  const handleCancelar = () => {

    setIdEmEdicao(null);

  };



  return (

    <div>

      <h2>Placar de Jogos</h2>

      <form onSubmit={adicionarTime}>

        <input

          type="text"

          value={nomeTime}

          onChange={(e) => setNomeTime(e.target.value)}

          placeholder="Nome do Time"

        />

        <input

          type="number"

          value={pontuacao}

          onChange={(e) => setPontuacao(e.target.value)}

          placeholder="Pontuação"

        />

        <button type="submit">Adicionar Time</button>

      </form>



      <ol>

        {times.map((time) => (

          <li key={time.id}>

            {time.nome} - {' '}

           

            {idEmEdicao === time.id ? (

              <>

                <input

                  type="number"

                  value={pontuacaoEditada}

                  onChange={(e) => setPontuacaoEditada(e.target.value)}

                  autoFocus

                />

                <button onClick={() => handleSalvar(time.id)}>Salvar</button>

                <button onClick={handleCancelar}>Cancelar</button>

              </>

            ) : (

              <>

                <strong>{time.pontos} pontos</strong>

                <button onClick={() => handleEditar(time)}>Editar</button>

              </>

            )}

          </li>

        ))}

      </ol>

    </div>

  );

}



export default PlacarJogos;