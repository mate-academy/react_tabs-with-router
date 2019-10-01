import React from 'react';
import {
  HashRouter,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';

import './App.css';
import HomePage from './components/HomePage/HomePage';
import TabsPage from './components/TabsPage/TabsPage';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <HashRouter>
    <div className="app">
      <nav className="ui attached tabular menu">
        <NavLink to="/" exact className="item">
          HomePage
        </NavLink>
        <NavLink to="/tabs" className="item">
          TabsPage
        </NavLink>
      </nav>

      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route
          path="/tabs/:tabId?"
          render={({ match }) => (
            <TabsPage tabs={tabs} currentTabId={match.params.tabId} />
          )}
        />
      </Switch>
    </div>
  </HashRouter>
);

export default App;
