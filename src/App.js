import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Tabs from './components/Tabs/Tabs';
import NavLinks from './components/navLink/NavLinks';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <div className="App">
    <NavLinks />
    <Switch>
      <Route
        path="/tabs"
        render={({ match }) => (
          <TabsPage match={match} tabs={tabs} />
        )}
      />
      <Route exact path="/" component={HomePage} />
    </Switch>
  </div>
);

const HomePage = () => (
  <h1 className="heading">Home page</h1>
);

const TabsPage = ({ match }) => (
  <>
    <h1 className="heading">Tabs Page</h1>
    <Tabs tabs={tabs} match={match} />
  </>
);

export default App;
