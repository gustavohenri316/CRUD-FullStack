import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Tasks from './pages/Tasks'
import TasksForm from './pages/Tasks/Form'
import Visualizar from './pages/Tasks/Visualizar'

const Routes: React.FC = () => {
  return (
      <Switch>
          <Route path="/" exact component={Tasks} />
          <Route path="/tarefas_cadastro" exact component={TasksForm} />
          <Route path="/tarefas_cadastro/:id" exact component={TasksForm} />
          <Route path="/tarefas/:id" exact component={Visualizar} />
      </Switch>
  )
}

export default Routes;