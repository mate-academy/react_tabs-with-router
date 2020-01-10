import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import TabsPage from './components/TabsPage';

const App = () => (
  <div className="App" align="center">
    <NavLink to="/">Home page</NavLink>
    <NavLink to="/Tabs">Tabs</NavLink>
    <Switch>
      <Route path="/" exact render={() => <HomePage />} />
      <Route path="/Tabs" render={() => <TabsPage />} />
    </Switch>
  </div>
);

export default App;
