import React from 'react';
import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import CreatePokemon from './pages/CreatePokemon';
import ViewPokemons from './pages/ViewPokemons';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Redirect from="/" exact to="/create" />
          <Route exact path="/create" component={CreatePokemon} />
          <Route exact path="/view" component={ViewPokemons} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
