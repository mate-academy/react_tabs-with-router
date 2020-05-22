import React from 'react';
import { NavLink, Route } from 'react-router-dom';

import './App.css';
import Tabs from './components/Tabs';

 const tabs = [
   { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
   { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
   { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
 ];

const App = () => (
  <div className="App">
    <h1>Tabs with router</h1>

    <nav>
      <ul className="nav">
        <li className="nav__item">
          <NavLink to="/" exact className="nav__link">
            Home
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/tabs" className="nav__link">
            Tabs
          </NavLink>
        </li>
      </ul>
    </nav>

      <Route path="/" exact component={
        () => <h2>Home page</h2>
      } />
      <Route path="/tabs" render={
        () => <Tabs tabs={tabs} />
      } />
  </div>
);

export default App;
