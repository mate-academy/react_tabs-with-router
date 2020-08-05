import React, { FC } from 'react';
import './App.css';
import {
  HashRouter,
  Route,
  NavLink,
} from 'react-router-dom';
import { Home } from './components/Home';
import { Tabs } from './components/Tabs';
import { Tab } from './interfaces/TabInterface';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: FC = () => (
  <div className="App">
    <HashRouter>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="selected">Home</NavLink>
          </li>
          <li>
            <NavLink to="/tabs" activeClassName="selected">Tabs</NavLink>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Home} />
      <Route path="/tabs/:id?" render={({ match }) => <Tabs tabs={tabs} tabId={match.params.id} />} />
    </HashRouter>
  </div>
);

export default App;
