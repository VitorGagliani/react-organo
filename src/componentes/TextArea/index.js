import { useState } from 'react';
import './style.css';
export const TextArea = (props) => {

  const [valor, setValor] = useState('')

    const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value)
  }

    return (
        <div className="text-area">
          <label htmlFor="name">{props.label}</label>

          <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder} />
        </div>
    );
}