import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import './App.css';

import { Tab } from './components/Tab/Tab';

const App = () => (
  <div className="main">
    <nav>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <NavLink to="/home" className="badge badge-warning">
            Home page
          </NavLink>
        </li>
        <li>
          <NavLink to="/tabs" className="badge badge-warning">
            Tabs page
          </NavLink>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route path="/home" exact component={HomePage} />
      <Route path="/tabs/:id?" component={TabsPage} />
    </Switch>
  </div>
);

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
const TabsPage = ({ match }) => (
  <Tab tabs={tabs} currentTabId={match.params.id} />
);

const HomePage = () => (
  <>
    <p className="tab-content">Home page</p>
  </>
);

export default App;
