import React from "react";
import * as C from "./styles";
import {useHistory} from 'react-router-dom'




const Home: React.FC = () => {
  const history = useHistory()

  function Tarefa() {
    history.push(`/tarefas`);
  }
  return (
    <C.Container>
      <C.Card></C.Card>
      <br/>
      <C.Botao>
        <button onClick={Tarefa}> Criar Lista de Tarefas </button>
      </C.Botao>
    </C.Container>
  );
};

export default Home;
