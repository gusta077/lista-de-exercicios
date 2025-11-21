import { useState } from 'react';
import './App.css'


function FormularioTempoReal(){
  const [dados, setDados] = useState({
    cidade: '',
    estado: '',
    cep: ''
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
        <label> Cidade: </label>
        <input type="text" name ="cidade" value={dados.cidade} onChange = {handleChange}/>
      </div>
      <div>
        <label> Estado: </label>
        <input type="text" name ="estado" value={dados.estado} onChange = {handleChange}/>
      </div>
      <div>
        <label> CEP: </label>
        <input type="number" name='cep' value={dados.cep} onChange = {handleChange}/>
      </div>
    </form>


    <div>
      <h3>Dados preenchidos:</h3>
      <h4>Seu cidade é: {dados.cidade}</h4>
      <h4>Seu estado é: {dados.estado}</h4>
      <h4>Sua cep é: {dados.cep}</h4>
    </div>
  </div>
)
}
export default FormularioTempoReal;