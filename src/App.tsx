import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { Tabs } from './components/Tabs';
import './App.css';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => {
  return (
    <div className="App">
      <Router>
        <ul className="pages-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tabs">Tabs</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/tabs">
            <Tabs tabs={tabs} />
          </Route>
          <Route path="/">
            <h1>Home</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
