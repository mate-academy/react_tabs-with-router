import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { Tabs } from './components/Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Here you can find activities to practise your reading skills. Reading will help you to improve ' },
  { id: 'tab-2', title: 'Tab 2', content: 'your understanding of the language and build your vocabulary.' },
  { id: 'tab-3', title: 'Tab 3', content: 'There are different types of texts and interactive exercises that practise the reading skills you need to do well in your studies' },
];

const App: React.FC = () => {
  return (
    <>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink
              to="/"
              exact
              className="nav__link"
              activeClassName="nav__link--active"
            >
              Home
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/tabs"
              className="nav__link"
              activeClassName="nav__link--active"
            >
              Tabs
            </NavLink>
          </li>
        </ul>
      </nav>
      <Route path="/" exact component={Home} />
      <Route
        path="/tabs/:id?"
        render={({ match }) => (
          <Tabs tabs={tabs} currentTabId={match.params.id} />
        )}
      />
    </>
  );
};


export default App;
