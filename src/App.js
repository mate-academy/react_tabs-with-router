import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import './App.css';

import TabsPage from './components/TabsPage/TabsPage';
import HomePage from './components/HomePage/HomePage';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <div className="app">
    <Router>
      <nav className="nav">
        <NavLink className="nav-link" exact to="/">Home</NavLink>
        <NavLink className="nav-link" to="/tabs">Tabs</NavLink>
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
  </div>
);

export default App;
