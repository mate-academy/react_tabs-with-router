import React from 'react';
import './App.css';
import {
  NavLink, Route, Switch,
} from 'react-router-dom';

import TabsPage from './Components/TabsPage/TabsPage';
import HomePage from './Components/HomePage/HomePage';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <div className="App">
    <nav className="navigation">
      <NavLink className="btn btn-primary nav-item" exact to="/">
          HomePage
      </NavLink>
      <NavLink className="btn btn-primary" to="/tabs">
          TabsPage
      </NavLink>
    </nav>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route
        path="/tabs/:tabId?"
        render={
          ({ match }) => (
            <TabsPage
              match={match}
              tabs={tabs}
            />
          )
        }
      />
    </Switch>
  </div>
);

export default App;
