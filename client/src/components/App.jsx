import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '@styles/core.css';
import Welcome from './Welcome/Welcome';
import Login from './Login/login';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
