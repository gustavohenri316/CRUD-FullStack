import React, { useState, useEffect } from "react";
import * as C from './styles'
import { Badge, Button, Table } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import moment from "moment";

interface ITasks {
  id: number;
  title: string;
  description: string;
  finished: boolean;
  created_at: Date;
  updated_at: Date;
}

const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState<ITasks[]>([]);
  const history = useHistory()

  useEffect(() => {
    loadTasks();
  }, []);

  async function loadTasks() {
    const { data } = await api.get<ITasks[]>("/tasks");
    console.log(data);
    setTasks(data);
  }
  async function fineshedTask(id: number){
    await api.patch(`/tasks/${id}`)
    loadTasks()
  }
  async function deleteTask(id: number){
    await api.delete(`/tasks/${id}`)
    loadTasks()
  }

  function formateDate(date: Date) {
    return moment(date).format("DD/MM/YYYY");
  }

  function newTask () {
    history.push('/tarefas_cadastro')
  }

  function editTask(id: number) {
    history.push(`/tarefas_cadastro/${id}`)
  }
  function Tarefa(id: number) {
    history.push(`/tarefas/${id}`)
  }
  return (
    <C.Container>
    <div className="container">
      <br />
      <C.Header>
        <h1>Paginas de Tarefas</h1>
        <Button variant="dark" onClick={newTask}>Nova Tarefa</Button>
      </C.Header>
      <br />
      <Table striped bordered hover variant="dark" className="text-center"
       style={{color: "#fff", backgroundColor: "#FFF"}}>
        <thead>
          <tr>
            <th></th>
            <th>ID</th>
            <th>Titulo</th>
            <th>Data de Atualização</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>
              <input type = "checkbox" id = "subscribeNews" name = "subscribe" value = "newsletter"/>
              </td>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td>{formateDate(task.updated_at)}</td>
              <td>
                <Badge pill bg={task.finished ? "success" : "warning"}>
                  {" "}
                  {task.finished ? "FINALIZADO" : "PENDENTE"}{" "}
                </Badge>{" "}
              </td>
              <td>
                <Button size="sm" disabled={task.finished} onClick={() => editTask(task.id)}>Editar</Button> {"  "}
                <Button size="sm" disabled={task.finished} variant="success" onClick={()=> fineshedTask(task.id)}> Finalizar </Button>{"  "}
                <Button  size="sm"  variant="info"  onClick={() => Tarefa(task.id)}>Visualizar </Button>{"  "}
                <Button size="sm" onClick={() => deleteTask(task.id)}variant="danger">Remover</Button> {"  "}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    </C.Container>
  );
};

export default Tasks;
