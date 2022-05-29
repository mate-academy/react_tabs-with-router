import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage } from './components/HomePage/HomePage';
import { TabPage } from './components/TabPage/TabPage';
import { Navigation } from './components/Navigation/Navigation';
import './App.scss';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => (
  <div className="App">
    <Navigation />

    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>

      <Route path="/tabs/:tabId?">
        <TabPage tabs={tabs} />
      </Route>

      <p className="App__error">Page not found</p>
    </Switch>
  </div>
);

export default App;
