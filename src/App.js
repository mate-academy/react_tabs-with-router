import React from 'react';
import './App.css';
import {
  HashRouter, NavLink, Route, Switch,
} from 'react-router-dom';
import Tabs from './components/Tabs/Tabs';
import Home from './components/Home/Home';

const App = () => (
  <div className="app">
    <div>
      <HashRouter>
        <ul className="nav-bar">
          <li className="nav-bar--item">
            <NavLink className="nav-bar--item_link" to="/" exact>Home</NavLink>
          </li>
          <li className="nav-bar--item">
            <NavLink className="nav-bar--item_link" to="/tabs">Tabs</NavLink>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/tabs" render={({ match }) => (
            <Tabs match={match} tabs={tabs} />
          )}
          />
        </Switch>
      </HashRouter>
    </div>
  </div>
);

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export default App;
