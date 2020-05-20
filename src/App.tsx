import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import './App.css';
import TabsPage from './TabsPage';


const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
const HomePage = () => <h2>Home</h2>;

const App = () => (
  <BrowserRouter>
    <nav>
      <ul className="nav_list">
        <li>
          <NavLink to="/" exact className="nav_link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/tabs/" className="nav_link">
            Tabs
          </NavLink>
        </li>
      </ul>
    </nav>
    <Route path="/" exact component={HomePage} />
    <Route
      path="/tabs/:tabId?"
      render={({ match }) => <TabsPage tabs={tabs} tabId={match.params.tabId} />}
    />
  </BrowserRouter>
);

export default App;
