import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink
} from 'react-router-dom';
import Tabs from './components/Tabs/Tabs';

const App = () => (
  <BrowserRouter>
    <h1>Tabs with router</h1>
    <nav className="nav nav-tabs">
      <NavLink to="/" exact activeClassName="active" className="nav-link text-dark">
        Home Page
      </NavLink>
      <NavLink to="/tabs" activeClassName="active" className="nav-link text-dark">
        Tabs Page
      </NavLink>
    </nav>
    <Switch>
      <Route path="/" exact component={HomePage}/>
      <Route path="/tabs/:currentTabId?" component={TabsPage} />
    </Switch>
  </BrowserRouter>
);

const HomePage = () => <h1>Home page</h1>;

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const TabsPage = ({ match }) => (
  <Tabs
    tabs={tabs}
    match={match}
  />
);

export default App;
