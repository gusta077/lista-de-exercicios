import { useState } from 'react';
import './App.css'


function DataHoraAtual() {
  const agora = new Date();
  const diasSemana = [
    "domingo",
    "segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
    "sábado",
  ];

const meses = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];


  const diaSemana = diasSemana[agora.getDay()];
  const dia = agora.getDay();
  const mes = meses[agora.getMonth()];
  const ano = agora.getFullYear();
  return (
    <h1>
      {" "}
      Hoje é {diaSemana}, {dia} de {mes} de {ano}
    </h1>
  );
}


export default DataHoraAtual;