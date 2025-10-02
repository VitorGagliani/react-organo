
import './App.css';
import { Banner } from './componentes/Banner';
import { Form } from './componentes/Form';
import { useState } from 'react';
import { Time } from './componentes/Time';

function App() {

  const [colaboradores, setColaboradores] = useState('')
  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div>
      <Banner />
      <Form aoColaboradorCadastrado={ colaborador => setColaboradores([...colaboradores, colaborador])} />
      <Time nome="Programação" />
      <Time nome="Front-End" />
      <Time nome="Data Science" />
      <Time nome="Devops" />
      <Time nome="UX e Design" />
      <Time nome="Mobile" />
      <Time nome="Inovação e Gestão" />
    </div>
     );
}

export default App;
