import React from 'react';
import {
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom';

import { Navigation } from './Navigation';
import { HomePage } from './HomePage';
import { Tabs } from './Tabs';

import './App.css';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => (
  <div className="wrap">
    <h1>Tabs with router</h1>
    <HashRouter>
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
    </HashRouter>
  </div>
);

export default App;
