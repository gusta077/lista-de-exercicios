import { useState } from 'react';
import './App.css'


function Avatar(){
  const [avatar, setAvatar] = useState({
    cabelo: '',
    olhos: '',
    acessorios: []
  });
 
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;


    if (type === 'checkbox') {
      setAvatar(prevState => {
        const novosAcessorios = checked
          ? [...prevState.acessorios, value]
          : prevState.acessorios.filter(item => item !== value);
        return { ...prevState, acessorios: novosAcessorios };
      });
    } else {
      setAvatar(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };


  return (
    <div>
      <h2>Criador de Avatar</h2>
      <form>
        <div>
          <label>Cor do Cabelo: </label>
          <select name="cabelo" value={avatar.cabelo} onChange={handleChange}>
            <option value="">Selecione uma cor</option>
            <option value="Loiro">Loiro</option>
            <option value="Castanho">Castanho</option>
            <option value="Preto">Preto</option>
            <option value="Ruivo">Ruivo</option>
            <option value="Colorido">Colorido</option>
          </select>
        </div>


        <div>
          <label>Cor dos Olhos: </label>
          <label>
            <input type="radio" name="olhos" value="Azuis" checked={avatar.olhos === 'Azuis'} onChange={handleChange} /> Azuis
          </label>
          <label>
            <input type="radio" name="olhos" value="Verdes" checked={avatar.olhos === 'Verdes'} onChange={handleChange} /> Verdes
          </label>
          <label>
            <input type="radio" name="olhos" value="Castanhos" checked={avatar.olhos === 'Castanhos'} onChange={handleChange} /> Castanhos
          </label>
        </div>


        <div>
          <label>Acessórios: </label>
          <label>
            <input type="checkbox" name="acessorios" value="Óculos" checked={avatar.acessorios.includes('Óculos')} onChange={handleChange} /> Óculos
          </label>
          <label>
            <input type="checkbox" name="acessorios" value="Chapéu" checked={avatar.acessorios.includes('Chapéu')} onChange={handleChange} /> Chapéu
          </label>
          <label>
            <input type="checkbox" name="acessorios" value="Brinco" checked={avatar.acessorios.includes('Brinco')} onChange={handleChange} /> Brinco
          </label>
        </div>
      </form>


      <div>
        <h3>Avatar Montado:</h3>
        <p>
          <strong>Cabelo:</strong> {avatar.cabelo || 'Não definido'} |
          <strong> Olhos:</strong> {avatar.olhos || 'Não definido'} |
          <strong> Acessórios:</strong> {avatar.acessorios.length > 0 ? avatar.acessorios.join(', ') : 'Nenhum'}
        </p>
      </div>
    </div>
  );
}
export default Avatar;