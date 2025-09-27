import "./style.css";

export const Botao = (props) => {
  return (
    <button className="btn">
      {props.children}</button>
  );
}