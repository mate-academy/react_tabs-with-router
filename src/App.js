import React from 'react';
import {
  HashRouter,
  Route,
  NavLink,
  Switch,
} from 'react-router-dom';

import './App.css';
import TabsPage from './components/TabsPage';
import Home from './components/Home';

const App = () => (
  <HashRouter>
    <div className="App">

      <nav>
        <ul className="nav">
          <li><NavLink className="navlink" to="/" exact>Home</NavLink></li>
          <li><NavLink className="navlink" to="/tabs/">Tabs</NavLink></li>
        </ul>
      </nav>

      <Switch>

        <Route
          path="/"
          exact
          component={Home}
        />

        <Route
          path="/tabs/:tabId?"
          component={TabsPage}
        />

      </Switch>

    </div>
  </HashRouter>
);

export default App;
