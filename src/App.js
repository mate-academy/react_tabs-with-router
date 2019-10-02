import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import HomePage from './components/HomePage/HomePage';
import TabsPage from './components/TabsPage/TabsPage';
import './App.css';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <div className="container">
    <nav className="menu">
      <Link className="menu-item" exact to="/">Home</Link>
      <Link className="menu-item" exact to="/tabs">Tabs</Link>
    </nav>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route
        path="/tabs/:tabId?"
        render={({ match }) => (
          <TabsPage
            tabs={tabs}
            tabId={match.params.tabId}
          />
        )}
      />
    </Switch>
  </div>
);

export default App;
