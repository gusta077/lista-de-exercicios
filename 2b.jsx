import { useState } from 'react';
import './App.css'


function BoasVindas({usuario}) {
  return <h1> Bem vindo, {usuario}!</h1>;
}
export default function MyApp(){
  return (<BoasVindas usuario = "Gustavo"/>)
}
