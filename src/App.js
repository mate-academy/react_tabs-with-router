import React from 'react';
import {
  BrowserRouter,
  Route,
  NavLink,
  Switch,
} from 'react-router-dom';

import './App.css';
import TabsPage from './components/TabsPage';
import Home from './components/Home';

const App = () => (
  <BrowserRouter>
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
  </BrowserRouter>
);

export default App;
