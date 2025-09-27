import { TextArea } from "../TextArea";
import { ListaSuspensa } from "../ListaSuspernsa";
import { Botao } from "../Botao";
import "./style.css";

export const Form = () => {

  const times = ["Programação", "Front-End", "Data Science", "Devops", "UX e Design", "Mobile", "Inovação e Gestão"]

  const aoSalvar = (evento) => {
    evento.preventDefault()
    console.log("Form foi submetido")
  }

  return (
    <form onSubmit={aoSalvar}>  
    <div className="form">
      <h2>Preencha os dados para criar o card do colaborador.</h2>

      <TextArea obrigatorio={true} label="Nome" placeholder="Digite seu nome aqui" />
      <TextArea obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
      <TextArea  label="Imagem" placeholder="Informe o endereço da imagem" />

      <ListaSuspensa label="Time" itens={times} />
       <botton className="text-area">
        <Botao>Criar Card</Botao>
      </botton>
    </div>
    </form>
  );
};
