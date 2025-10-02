import { useState } from 'react';
import { TextArea } from "../TextArea";
import { ListaSuspensa } from "../ListaSuspernsa";
import { Botao } from "../Botao";
import "./style.css";

export const Form = (props) => {



  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')
  

  const times = ["Programação", "Front-End", "Data Science", "Devops", "UX e Design", "Mobile", "Inovação e Gestão"]

  const aoSalvar = (evento) => {
    evento.preventDefault()
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    })

  }

  return (
    <form onSubmit={aoSalvar}>  
    <div className="form">
      <h2>Preencha os dados para criar o card do colaborador.</h2>

      <TextArea
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome aqui" 
          valor={nome}
          aoAlterado={valor => setNome(valor)}/>
          

      <TextArea
        obrigatorio={true}
        label="Cargo"
        placeholder="Digite seu cargo"
        valor={cargo}
        aoAlterado={valor => setCargo(valor)} />
        

        
      <TextArea
        label="Imagem"
        placeholder="Informe o endereço da imagem" 
        valor={imagem}
        aoAlterado={valor => setImagem(valor)}/>
        

      <ListaSuspensa
        required={true}
        label="Time"
        itens={times}
        valor={time}
        aoAlterado={valor => setTime(valor)}/>
         
      <div className="text-area">
       
        <Botao>Criar Card</Botao>
      
      </div>
    </div>
    </form>
  );
};
