import React from 'react';
import './App.css';
import {
  HashRouter,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';

import TabsPage from './TabsPage';

const App = () => (
  <HashRouter>
    <nav>
      <ul>
        <li><NavLink to="/" exact>Home</NavLink></li>
        <li><NavLink to="/tabs">Tabs</NavLink></li>
      </ul>
    </nav>

    <Switch>
      <Route path="/" exact component={() => <h1>Home page</h1>} />
      <Route path="/tabs" component={TabsPage} />
    </Switch>
  </HashRouter>
);

export default App;
