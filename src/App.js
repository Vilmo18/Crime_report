import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import { Login } from './pages/login';
import { Register } from './pages/register';
import { Report } from './pages/report';

export { Register } from './pages/register';
export { Login } from './pages/login';
export { Report } from './pages/report';

const App = () => (
  <div className="App">
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/report" component={Report} />
        </Switch>
      </div>
    </Router>
  </div>
);

export default App;
