import React from 'react';
import { HashRouter, Route, NavLink } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import TabsPage from './components/TabsPage/TabsPage';
import './App.css';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <div className="App">
    <HashRouter>
      <nav className="border-bottom">
        <NavLink className="link" to="/" exact>Home</NavLink>
        <NavLink className="link" to="/tabs">Tabs</NavLink>
      </nav>
      <Route path="/" exact component={HomePage} />
      <Route
        path="/tabs/:userId?"
        render={({ match }) => (
          <TabsPage match={match} tabs={tabs} />
        )}
      />
    </HashRouter>
  </div>
);

export default App;
