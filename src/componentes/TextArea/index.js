import './style.css';
export const TextArea = (props) => {
    return (
        <div className="text-area">
          <label htmlFor="name">{props.label}</label>
          <input required={props.obrigatorio} id="name" placeholder={props.placeholder} />
        </div>
    );
}