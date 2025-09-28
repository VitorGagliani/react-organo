import { TextArea } from "../TextArea"; 


export const ListaSuspensa = (props) => {
  return (
    <div className="text-area">
      <label htmlFor="team">{props.label}</label>
        <select value={props.valor} onChange={evento => props.aoAlterado(evento.target.value)}>
          {props.itens.map(item => { 
            return <option key={item}>{item}</option>
          })}
        </select>
    </div>
  );
};
