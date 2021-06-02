import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { TabsPage } from './pages/TabsPage';
import 'bulma';

const TABS = [
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
  <>
    <header>
      <Navigation />
    </header>

    <div className="section">
      <main className="container">
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/tabs/:tabId?">
            <TabsPage tabs={TABS} />
          </Route>

          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </main>
    </div>
  </>
);

export default App;
