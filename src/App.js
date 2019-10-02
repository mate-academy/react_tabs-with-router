import React from 'react';
import {
  HashRouter,
  Route,
} from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import TabsPage from './TabsPage/TabsPage';
import NavBar from './NavBar/NavBar';
import './App.css';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <HashRouter>
    <h1>Router</h1>
    <div className="app">
      <NavBar />
      <Route path="/" exact component={HomePage} />
      <Route
        path="/tabs/:tabId?"
        render={({ match }) => (
          <TabsPage tabs={tabs} activeTabId={match.params.tabId} />
        )}
      />
    </div>
  </HashRouter>
);

export default App;
