import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

import MainComponent from './components/main/MainComponent';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={MainComponent}></Route>
    </Switch>
  );
}

export default App;
