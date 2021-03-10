import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';

import 'bulma';
import './App.scss';

import { Navigation } from './components/Navigation';
import { TabsPage } from './components/TabsPage';
import { Home } from "./components/Home";

const App = () => (
  <div className="App">
    <Navigation />
    <Switch>
      <Route path="/tabs" component={TabsPage}/>
      <Route path="/" exact>
        <Home/>
      </Route>
      <Redirect to="/"/>
    </Switch>
  </div>
);

export default App;
