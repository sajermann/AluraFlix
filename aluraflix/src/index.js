import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Pagina404 = () => (<div>Página 404</div>)

ReactDOM.render(
<BrowserRouter>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/cadastrar/video" exact component={CadastroVideo} />
    <Route path="/cadastrar/categoria" exact component={CadastroCategoria} />
    <Route component={Pagina404} />
  </Switch>
</BrowserRouter>,
  document.getElementById('root')
);
