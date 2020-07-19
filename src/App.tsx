import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { Tabs } from './components/Tabs';
import './App.css';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => (
  <div className="task-wrap">
    <h1>Tabs with router</h1>
    <BrowserRouter>
      <div className="page">
        <Navigation />
        <div className="page__content">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route
              path="/tabs/:tabId?"
              render={() => <Tabs tabs={tabs} />}
            />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  </div>
);

export default App;
