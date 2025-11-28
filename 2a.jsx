import { useState } from 'react';
import './App.css'


function Saudacao({nome}) {
  return <h1> Olá, {nome}!</h1>;
}
export default function MyApp(){
  return (<Saudacao nome = "gustavo"/>)
}
