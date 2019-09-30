import React from 'react';
import {
  BrowserRouter as Router, NavLink, Route, Switch,
} from 'react-router-dom';
import './App.css';

import HomePage from './components/HomePage/HomePage';
import TabsPage from './components/TabsPage/TabsPage';

const tabs = [
  { id: 'tab-1', title: 'Tabs 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tabs 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tabs 3', content: 'Some text 3' },
];

const App = () => (
  <Router>
    <nav className="nav">
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/tabs">Tabs</NavLink>
    </nav>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route
        path="/tabs/:tabId?"
        render={({ match: { params: { tabId } } }) => (
          <TabsPage tabId={tabId} tabs={tabs} />
        )}
      />
    </Switch>
  </Router>
);

export default App;
