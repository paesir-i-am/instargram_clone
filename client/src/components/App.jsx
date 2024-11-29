import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '@styles/core.css';
import Login from './Login/login';
import Join from './Join/join';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/join" exact component={Join} />
      </Switch>
    </Router>
  );
}

export default App;
