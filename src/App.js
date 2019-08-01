import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import TabsPage from './components/TabsPage';
import './App.css';

const App = () => (
  <>
    <nav>
      <ul className="main-nav">
        <li>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/tabs">
            Tabs
          </NavLink>
        </li>
      </ul>
    </nav>

    <Switch>
      <Route
        path="/"
        exact
        render={() => (<h1>Home</h1>)}
      />

      <Route
        path="/tabs/:isTab?"
        component={TabsPage}
      />
    </Switch>
  </>
);

export default App;
