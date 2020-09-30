import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import './App.scss';
import { TabsPage } from './components/TabsPage';

const tabs = [
  {
    id: 'tab-1', title: 'Tab 1', content: 'Some text 1',
  },
  {
    id: 'tab-2', title: 'Tab 2', content: 'Some text 2',
  },
  {
    id: 'tab-3', title: 'Tab 3', content: 'Some text 3',
  },
];

const App = () => (
  <div className="app">
    <header className="header">
      <nav>
        <ul className="header__list">
          <li className="header__list--item">
            <NavLink className="nav-link" to="/" exact>Home</NavLink>
          </li>
          <li className="header__list--item">
            <NavLink className="nav-link" to="/tabs" exact>Tabs</NavLink>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          path="/tabs/:tabId?"
          render={({ match }) => (
            <TabsPage tabs={tabs} match={match} />
          )}
        />
      </Switch>
    </main>
  </div>
);

const Home = () => <h1>Home page</h1>;

export default App;
