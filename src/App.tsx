import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import { HomePage } from './components/HomePage/HomePage';
import { TabsPage } from './components/TabsPage/TabsPage';

const App = () => (
  <div className="App">
    <h1>Tabs with router</h1>
    <Route path="/" exact component={HomePage} />
    <Route
      path="/tabs"
      render={() => <TabsPage />}
    />
  </div>
);

export default App;
