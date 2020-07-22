import React from 'react';
import {
  Link,
  Switch,
  Route,
} from 'react-router-dom';
import { Tabs } from './components/Tabs';
import { Home } from './components/Home';
import { tabs } from './components/api';
import './App.css';

const App = () => (
  <>
    <Link to="/" className="link">HomePage</Link>
    <Link to="/tabs" className="link">TabsPage</Link>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route
        path="/tabs/:id?"
        render={({ match }) => (
          <Tabs tabs={tabs} tabId={match.params.id} />
        )}
      />
    </Switch>
  </>
);

export default App;
