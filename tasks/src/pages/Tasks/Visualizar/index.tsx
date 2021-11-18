import React, { useState, useEffect } from "react";
import { Badge, Button, Card } from "react-bootstrap";
import * as C from "./styles";
import { useHistory, useParams } from "react-router-dom";
import api from "../../../services/api";
import moment from "moment";

interface ITasks {
  id: number;
  title: string;
  description: string;
  finished: boolean;
  created_at: Date;
  updated_at: Date;
}

const Visualizar: React.FC = () => {
  const history = useHistory();
  //@ts-ignore
  const { id } = useParams();
  const [task, setTasks] = useState<ITasks>();

  useEffect(() => {
    findTask();
  }, [id]);

  function Voltar() {
    history.goBack();
  }

  async function findTask() {
    const response = await api.get<ITasks>(`/tasks/${id}`);
    setTasks(response.data);
  }

  function formateDate(date: Date | undefined) {
    return moment(date).format("DD/MM/YYYY");
  }

  return (
    <C.Container>
      <div className="container">
        <br />
        <C.Header>
          <h3>Detalhes da Anotação</h3>
          <Button variant="dark" onClick={Voltar}>
            Voltar
          </Button>
        </C.Header>
        <br />
        <Card key={task?.id}>
          <Card.Body>
            <Card.Title><h1>{task?.title}</h1></Card.Title>
            <br />
            <Card.Text>
              <div className="container">
                <p> {" "} <strong> </strong></p>  <h4>{task?.description}</h4>
                
                <p> <strong>SITUAÇÃO: </strong> </p> <Badge pill bg={task?.finished ? "success" : "warning"}>{task?.finished ? "FINALIZADO" : "PENDENTE"} </Badge>{" "}
                <p>{" "}<strong>DATA DE CADASTRO: </strong></p>
                <Badge pill bg="info "> {" "}{formateDate(task?.created_at)}{" "}
                </Badge>{" "}
                <p><strong>DATA DE ATUALIZAÇÃO: </strong></p>
                <Badge pill bg="info "> {" "} {formateDate(task?.updated_at)}{" "}
                </Badge>{" "}
                </div>
            </Card.Text>
          </Card.Body>
        </Card>

        <br />
      </div>
    </C.Container>
  );
};

export default Visualizar;
