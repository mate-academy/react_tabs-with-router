import React from 'react';
import { Route, NavLink, Switch} from "react-router-dom";
import { Home } from './components/Home'
import { Tabs } from './components/Tabs'
import './App.css';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <div className="app">
    <h1>Tabs with router</h1>
    <ul className="nav">
      <li><NavLink to="/" className="navlink">Home</NavLink></li>
      <li><NavLink to="/tabs" className="navlink">Tabs</NavLink></li>
    </ul>

    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/tabs/:id?"
        render={({ match }) => (
          <Tabs tabs={tabs}  activeTabId={match.params.id} />
        )}
      />
    </Switch>
  </div>
);

export default App;
