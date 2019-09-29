import React from 'react';
import {
  BrowserRouter,
  Route,
  NavLink,
} from 'react-router-dom';
import './App.css';

const App = () => (
  <div className="App">
    <h1>Browser Router</h1>
    <BrowserRouter>
      <nav className="nav">
        <NavLink to="/" exact className="nav__link" activeClassName="is-active">
          Home
        </NavLink>
        <NavLink to="/tabs" className="nav__link" activeClassName="is-active">
          Tabs
        </NavLink>
      </nav>

      <Route path="/" exact component={HomePage} />
      <Route path="/tabs" component={TabsPage} />
    </BrowserRouter>

  </div>
);

const HomePage = () => <h2>Home page</h2>;

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
const TabsPage = () => <Tabs tabs={tabs} currentTabId="tab-1" />;

const Tabs = () => <h2>Tabs</h2>;

export default App;
