import React, { useState, useEffect, ChangeEvent } from "react";
import * as C from "./styles";
import { Button, Form } from "react-bootstrap";
import api from "../../../services/api";
import { useHistory, useParams } from "react-router-dom";
import { AxiosResponse } from "axios";

interface ITasks {
  title: string;
  description: string;
}

const TasksForm: React.FC = () => {
  const history = useHistory();
 //@ts-ignore
  const { id } = useParams()
  const [model, setModel] = useState<ITasks>({
      title: '',
      description: ''
  })

  useEffect(()=>{
    if (id != undefined ){
      findTask(id)
    }
  }, [id])

  function updatedModel (e: ChangeEvent<HTMLInputElement>){
      setModel({
          ...model,
          [e.target.name]: e.target.value
      })
  }

  function Voltar() {
    history.goBack();
  }

  async function onSubmit (e: ChangeEvent<HTMLFormElement>) {
      e.preventDefault()
      if (id != undefined ){

        const response = await api.put(`/tasks/${id}`, model)
      } else {

        const response = await api.post('/tasks', model)
      }
     Voltar()
  }
  async function findTask(id: string) {
      const response = await api.get(`tasks/${id}`)
      setModel({
         //@ts-ignore
        title: response.data.title,
         //@ts-ignore
        description: response.data.description
      })
  }
  

  return (
    <C.Container>
      <div className="container">
        <br />
        <C.Header>
          <h3>Nova Tarefa</h3>
          <Button variant="dark" onClick={Voltar}>
            Voltar
          </Button>
        </C.Header>
        <br />
        <Form onSubmit={onSubmit}>
          <Form.Group>
            <Form.Label>Titulo</Form.Label>
            <Form.Control 
            type="text"
            name="title"
            value={model.title}
            onChange={(e: ChangeEvent<HTMLInputElement>)=> updatedModel(e)}/>
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label >Descrição</Form.Label>
            <Form.Control
             as="textarea"
             rows={3}
             name="description"
             value={model.description}
             onChange={(e: ChangeEvent<HTMLInputElement>)=> updatedModel(e)} />
          </Form.Group>
          <br />
          <Button variant="dark" type="submit">
            Salvar
          </Button>
        </Form>
      </div>
    </C.Container>
  );
};

export default TasksForm;
