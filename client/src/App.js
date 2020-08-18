import React from 'react';
import './App.css';
import CreatePokemon from './pages/CreatePokemon';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Redirect from="/" exact to="/create" />
          <Route exact path="/create" component={CreatePokemon} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
