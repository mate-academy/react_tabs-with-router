import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';

import TabsPage from './TabsPage';

const App = () => (
  <BrowserRouter>
    <nav>
      <ul>
        <li><NavLink to="/" exact>Home</NavLink></li>
        <li><NavLink to="react_tabs-with-router/tabs">Tabs</NavLink></li>
      </ul>
    </nav>

    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/tabs" component={TabsPage} />
    </Switch>
  </BrowserRouter>
);

const HomePage = () => <h1>Home page</h1>;

export default App;
