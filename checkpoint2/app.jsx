import React, { useState } from "react";
import "./styles.css";

function BarraVida() {
  const [hp, setHp] = useState(100);

  let corBarra;
  if (hp > 70) corBarra = "green";
  else if (hp > 30) corBarra = "yellow";
  else corBarra = "red";

  return (
    <div>
      <h3>Barra de Vida</h3>
      <div
        style={{
          width: "300px",
          height: "30px",
          background: corBarra,
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "5px",
          fontWeight: "bold",
          transition: "background 0.4s",
        }}
      >
        {hp} HP
      </div>
      {hp < 30 && (
        <div style={{ color: "red", fontWeight: "bold" }}>Vida Crítica!</div>
      )}
      <button onClick={() => setHp((h) => Math.min(100, h + 10))}>
        Curar (+10)
      </button>
      <button onClick={() => setHp((h) => Math.max(0, h - 15))}>
        Dano (-15)
      </button>
    </div>
  );
}

function XPLevel() {
  const [xp, setXp] = useState(0);
  const level = Math.floor(xp / 300) + 1;
  const progress = ((xp % 300) / 300) * 100;

  return (
    <div>
      <h3>Experiência e Nível</h3>
      <div>Nível Atual: {level}</div>
      <div
        style={{
          width: "300px",
          background: "#eee",
          borderRadius: "5px",
          marginBottom: "5px",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            background: "blue",
            color: "#fff",
            height: "20px",
            borderRadius: "5px",
            textAlign: "center",
          }}
        >
          {xp % 300} / 300 XP
        </div>
      </div>
      <button onClick={() => setXp((x) => x + 100)}>
        Completar Missão (+100 XP)
      </button>
      <button onClick={() => setXp((x) => x + 50)}>
        Derrotar Inimigo (+50 XP)
      </button>
    </div>
  );
}

function Inventario() {
  const [aberto, setAberto] = useState(false);
  const itens = ["Espada", "Poção", "Mapa"];

  return (
    <div>
      <h3>Inventário</h3>
      <button onClick={() => setAberto((a) => !a)}>
        {aberto ? "Fechar Inventário" : "Abrir Inventário"}
      </button>
      <span style={{ marginLeft: 6 }}>👜</span>
      {aberto && (
        <ul>
          {itens.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Diario() {
  const [input, setInput] = useState("");
  const [missoes, setMissoes] = useState([]);
  const [completas, setCompletas] = useState(0);

  function addMissao() {
    if (input) {
      setMissoes([
        ...missoes,
        { nome: input, categoria: "Principal", ativa: true },
      ]);
      setInput("");
    }
  }
  function concluir(ind) {
    setMissoes((ms) =>
      ms.map((m, i) => (i === ind ? { ...m, ativa: false } : m))
    );
    setCompletas((c) => c + 1);
  }

  return (
    <div>
      <h3>Diário de Missões</h3>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Nova missão"
      />
      <button onClick={addMissao}>Adicionar</button>
      <div>Missões completas: {completas}</div>
      <ul>
        {missoes
          .filter((m) => m.ativa)
          .map((m, i) => (
            <li key={i}>
              {m.nome} ({m.categoria}){" "}
              <button onClick={() => concluir(i)}>Concluir</button>
            </li>
          ))}
      </ul>
    </div>
  );
}

function Encantamento() {
  const [palavra, setPalavra] = useState("");

  const transformar = (texto) => {
    return texto
      .split(" ")
      .map((pal) => pal.split("").reverse().join(""))
      .join("ga");
  };

  return (
    <div>
      <h3>Gerador de Encantamentos</h3>
      <input
        value={palavra}
        onChange={(e) => setPalavra(e.target.value)}
        placeholder="Palavra mágica"
      />
      <div>Encantamento: {palavra && transformar(palavra)}</div>
    </div>
  );
}

function Ranking() {
  const [companheiros, setCompanheiros] = useState([
    { nome: "Lina", nivel: 5, classe: "Mago" },
    { nome: "Drako", nivel: 3, classe: "Guerreiro" },
  ]);

  function mudarNivel(i, delta) {
    setCompanheiros((cs) =>
      cs.map((c, idx) =>
        idx === i ? { ...c, nivel: Math.max(1, c.nivel + delta) } : c
      )
    );
  }

  let ordenados = [...companheiros].sort((a, b) => b.nivel - a.nivel);

  return (
    <div>
      <h3>Ranking dos Heróis</h3>
      <ul>
        {ordenados.map((c, i) => (
          <li key={c.nome}>
            {c.nome} ({c.classe}) - Nível: {c.nivel}
            <button onClick={() => mudarNivel(i, 1)}>+</button>
            <button onClick={() => mudarNivel(i, -1)}>-</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Atributos() {
  const [pontos, setPontos] = useState(10);
  const [atributos, setAtributos] = useState({
    Força: 0,
    Resistência: 0,
    Inteligência: 0,
    Sorte: 0,
  });

  function alterar(atr, delta) {
    if (delta > 0 && pontos > 0) {
      setAtributos((a) => ({ ...a, [atr]: a[atr] + 1 }));
      setPontos((p) => p - 1);
    } else if (delta < 0 && atributos[atr] > 0) {
      setAtributos((a) => ({ ...a, [atr]: a[atr] - 1 }));
      setPontos((p) => p + 1);
    }
  }

  return (
    <div>
      <h3>Atributos ({pontos} pts)</h3>
      {Object.keys(atributos).map((atr) => (
        <div key={atr}>
          {atr}: {atributos[atr]}
          <button onClick={() => alterar(atr, 1)} disabled={pontos <= 0}>
            +
          </button>
          <button
            onClick={() => alterar(atr, -1)}
            disabled={atributos[atr] <= 0}
          >
            -
          </button>
        </div>
      ))}
    </div>
  );
}

function PainelPersonagem() {
  const [nome, setNome] = useState("Aventureiro");
  const [raca, setRaca] = useState("Humano");
  const [classe, setClasse] = useState("Guerreiro");
  const [mostrarStatus, setMostrar] = useState(false);
  const statusAtivos = ["Envenenado", "Regeneração"];

  return (
    <div>
      <input
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Nome do personagem"
      />
      <h2>{nome.toUpperCase()}</h2>
      <select value={raca} onChange={(e) => setRaca(e.target.value)}>
        <option>Humano</option>
        <option>Elfo</option>
        <option>Orc</option>
      </select>
      <select value={classe} onChange={(e) => setClasse(e.target.value)}>
        <option>Guerreiro</option>
        <option>Mago</option>
        <option>Arqueiro</option>
      </select>
      <button onClick={() => setMostrar((m) => !m)}>
        {mostrarStatus ? "Ocultar Status" : "Mostrar Status"}
      </button>
      {mostrarStatus && (
        <ul>
          {statusAtivos.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Economia() {
  const [ouro, setOuro] = useState(50);
  const [showLoja, setShowLoja] = useState(false);
  const itensLoja = [{ nome: "Poção", preco: 15 }];

  function comprar(preco) {
    if (ouro >= preco) setOuro((o) => o - preco);
  }

  return (
    <div>
      <h3>Ouro: {ouro}</h3>
      <button onClick={() => setOuro((o) => o + 25)}>Ganhar ouro (+25)</button>
      <button onClick={() => setShowLoja((s) => !s)}>
        {showLoja ? "Fechar Loja" : "Abrir Loja"}
      </button>
      {showLoja && (
        <ul>
          {itensLoja.map((item) => (
            <li key={item.nome}>
              {item.nome} - {item.preco} ouro
              <button onClick={() => comprar(item.preco)}>Comprar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>RPG Gustavo Batista</h1>
      <PainelPersonagem />
      <BarraVida />
      <XPLevel />
      <Atributos />
      <Inventario />
      <Economia />
      <Ranking />
      <Diario />
      <Encantamento />
    </div>
  );
}

export default App;
