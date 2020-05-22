import React from 'react';
import {
  Route, NavLink, Switch,
} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import { Tabs } from './components/Tabs';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];


const App: React.FC = () => {
  return (
    <>
      <nav>
        <ul className="navlist">
          <li className="navlist__item">
            <NavLink to="/" exact className="navlist__link">Home</NavLink>
          </li>
          <li className="navlist__item">
            <NavLink to="/tabs" exact className="navlist__link">Tabs </NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          path="/tabs/:tabId?"
          render={({ match }) => (
            <Tabs tabs={tabs} activeTabId={match.params.tabId} />
          )}
        />
      </Switch>

    </>
  );
};


export default App;
