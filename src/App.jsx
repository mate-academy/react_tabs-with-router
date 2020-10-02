import React from 'react';
import {
  Link, Switch, Route,
} from 'react-router-dom';
import './App.scss';
import { HomePage } from './components/HomePage/HomePage';
import { TabsPage } from './components/TabsPage/TabsPage';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <div className="App">
    <Link to="/"><h1>Home Page</h1></Link>
    <Link to="/tabs"><h1>Tabs Page</h1></Link>

    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route
        path="/tabs"
        render={({ match, location }) => (
          <TabsPage tabs={tabs} match={match} location={location} />
        )}
      />
    </Switch>
  </div>
);

export default App;
