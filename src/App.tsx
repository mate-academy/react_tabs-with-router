import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import TabsPage from './components/TabsPage';
import Content from './components/Content';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <div className="App">
    <h1>Tabs with router</h1>

    <Header />
    <Switch>
      <Route path="/" exact>
        <h1>Home page</h1>
      </Route>

      <Route path="/tabs">
        <TabsPage tabs={tabs} />
        <Route path="/tabs/:id?" component={Content} />
      </Route>
    </Switch>
  </div>
);

export default App;

