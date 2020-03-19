import React, { FC } from 'react';


import './App.scss';
import {
  Route, Switch, NavLink
} from 'react-router-dom';
import { TabsPage } from './components/TabsPage/TabsPage'
import { HomePage } from './components/HomePage/HomePage'

const App: FC = () => (

  <div className="App">
    <nav>
      <NavLink
        to="/"
        exact
        className="link"
        activeClassName="link--active"
      >
        home
      </NavLink>
      <NavLink
        to="/tabs"
        className="link"
        activeClassName="link--active"
      >
        tabs
      </NavLink>
    </nav>

    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/tabs/:tabId?" component={TabsPage} />
    </Switch>
  </div>
);

export default App;
