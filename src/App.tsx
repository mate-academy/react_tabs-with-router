import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { HomePage } from './components/HomePage/HomePage';
import { TabsPage } from './components/TabPage/TabPage';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route
          path="/"
          exact
          component={HomePage}
        />
        <Route path="/tabs/:tabId?">
          <TabsPage tabs={tabs} />
        </Route>

        <h2>Page dosn&apos;t exist</h2>
      </Switch>
    </div>
  );
};
