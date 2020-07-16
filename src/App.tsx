import React from 'react';
import {
  Route,
  NavLink,
  Switch,
  BrowserRouter,
} from 'react-router-dom';
import './App.css';
import { Tabs } from './components/Tabs';

const tabs: Tab[] = [
  { id: 1, title: 'Tab 1', content: 'Some text 1' },
  { id: 2, title: 'Tab 2', content: 'Some text 2' },
  { id: 3, title: 'Tab 3', content: 'Some text 3' },
];

const HomePage: React.FC = () => (
  <h1>Home</h1>
);

const App: React.FC = () => {
  return (
    <main>
      <BrowserRouter>
        <nav>
          <ul className="nav__list">
            <li>
              <NavLink to="/" exact className="nav__link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/tabs/" className="nav__link">
                Tabs
              </NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route
            path="/tabs/:tabId?"
            render={({ match }) => <Tabs tabs={tabs} tabId={match.params.tabId} />}
          />
        </Switch>
      </BrowserRouter>
    </main>
  );
};

export default App;
