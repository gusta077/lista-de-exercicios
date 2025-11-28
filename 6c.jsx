import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function AbrirFechar() {
  const [abrir, setAbrir] = useState(true);
  return(
    <div>
      <div className="cofre">
        <p>Cofre Digital</p>
      </div>
      <p>🔒</p>

      <button onClick={() => setAbrir(!abrir)}>
        {abrir ? 'fechar 🔒' : 'abrir 🔓'}
      </button>

      {abrir && <ol className="lista">
        <li>computador,</li>
        <li>celular,</li>
        <li>baixar,</li>
        <li>chocolates,</li>
        <li>album da copa 2026</li>
      </ol>}
    </div>
  )
}

export default AbrirFechar;