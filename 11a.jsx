import { useState } from 'react';
import './App.css'


function FormularioTempoReal(){
  const [dados, setDados] = useState({
    nome: '',
    email: '',
    idade: ''
  });


 
  const handleChange = (e) => {
    const {name, value} = e.target;
    setDados({
      ...dados,
      [name]: value
    });
  };
  return(
  <div>
    <h2>Formulário</h2>
    <form>
      <div>
        <label> Nome: </label>
        <input type="text" name ="nome" value={dados.nome} onChange = {handleChange}/>
      </div>
      <div>
        <label> E-mail: </label>
        <input type="email" name ="email" value={dados.email} onChange = {handleChange}/>
      </div>
      <div>
        <label> Idade: </label>
        <input type="number" name='idade' value={dados.idade} onChange = {handleChange}/>
      </div>
    </form>


    <div>
      <h3>Dados preenchidos:</h3>
      <h4>Seu nome é: {dados.nome}</h4>
      <h4>Seu e-mail é: {dados.email}</h4>
      <h4>Sua idade é: {dados.idade}</h4>
    </div>
  </div>
)
}
export default FormularioTempoReal;