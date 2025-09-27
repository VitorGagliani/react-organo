import { TextArea } from "../TextArea"; 


export const ListaSuspensa = (props) => {
  return (
    <div className="text-area">
      <label htmlFor="team">{props.label}</label>
        <select>
          {props.itens.map(item => { 
            return <option key={item}>{item}</option>
          })}
        </select>
    </div>
  );
};
