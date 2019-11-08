import React from 'react';
import './App.css';
import {
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';
import TabsPage from './components/TabsPage';
import HomePage from './components/HomePage';

const App = () => (
  <header>
    <div className="container">
      <nav className="main-nav">
        <ul>
          <li>
            <NavLink exact to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/tabs">Tabs</NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          path="/tabs"
          render={({ match }) => (
            <TabsPage match={match} tabs={tabs} />
          )}
        />
      </Switch>
    </div>
  </header>
);

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export default App;
