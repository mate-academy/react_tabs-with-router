import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import './App.scss';
import TabsList from './components/TabsList/TabsList';

const App = () => (
  <div className="App">
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/tabs">Tabs</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route path="/tabs">
          <TabsPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  </div>
);

const HomePage = () => <h1>Home page</h1>;

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
const TabsPage = () => <TabsList tabs={tabs} />;

export default App;
