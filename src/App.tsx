import React from 'react';
import {
  NavLink,
  Switch,
  Route,
} from 'react-router-dom';

import './App.scss';
import Home from './Home';
import Tabs from './Tabs';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => (
  <div className="App">
    <h1>Tabs with router</h1>
    <nav>
      <ul className="navlist">
        <li className="navlist__item"><NavLink to="/" exact className="navlist__link">HomePage</NavLink></li>
        <li className="navlist__item"><NavLink to="/tabs" className="navlist__link">TabsPage </NavLink></li>
      </ul>
    </nav>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route
        path="/tabs/:id?"
        render={() => (
          <Tabs tabs={tabs} />
        )}
      />
    </Switch>
  </div>
);

export default App;
