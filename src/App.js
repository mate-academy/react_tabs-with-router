import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import TabsPage from './TabsPage';
import './App.css';

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
  <div className="container">

    <nav>
      <div className="nav-wrapper">
        <div className="brand-logo center">Tabs</div>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li><NavLink to="/" exact>Home</NavLink></li>
          <li><NavLink to="/tabs">Tabs</NavLink></li>
        </ul>
      </div>
    </nav>

    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route
        path="/tabs"
        render={({ match }) => <TabsPage tabs={tabs} match={match} />}
      />
    </Switch>
  </div>
);

const HomePage = () => <h1>Home page</h1>;

export default App;
