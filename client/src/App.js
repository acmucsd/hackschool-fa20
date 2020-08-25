import React from 'react';
import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import CreatePokemon from './pages/CreatePokemon';
import ViewPokemon from './pages/ViewPokemon';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Redirect from="/" exact to="/create" />
          <Route exact path="/create" component={CreatePokemon} />
          <Route exact path="/view" component={ViewPokemon} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
