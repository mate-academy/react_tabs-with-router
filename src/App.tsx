import React from 'react';
import {
  HashRouter,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import { Tabs } from './components/Tabs';
import './App.css';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => (
  <div className="App">
    <HashRouter>
      <ul className="pages-list">
        <li>
          <NavLink
            to="/"
            className="page"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tabs/"
            className="page"
            activeClassName="selected"
          >
            Tabs
          </NavLink>
        </li>
      </ul>

      <Switch>
        <Route
          path="/tabs/:id?"
          render={({ match }) => <Tabs tabs={tabs} id={match.params.id} />}
        />
        <Route path="/" exact>
          <h1>Home</h1>
        </Route>
      </Switch>
    </HashRouter>
  </div>
);

export default App;
