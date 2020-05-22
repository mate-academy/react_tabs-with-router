import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Tabs from './components/Tabs';

import './App.css';

const tabs = [
  { id: 'tab-1', title: 'HOME', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit maiores quidem, delectus blanditiis magni quod aliquam, quae iure dignissimos laboriosam saepe consequatur aspernatur iusto, voluptas facere? Fugit repudiandae eum fugiat, maxime a et, velit quod sint nulla, esse at atque!' },
  { id: 'tab-2', title: 'PROFILE', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat iste quis quam saepe nam debitis, animi dolor? Doloremque explicabo fuga totam veniam error atque ut nihil. Possimus dolorum quasi cupiditate, illo harum asperiores libero iste sit mollitia id dolore natus! Perferendis, dignissimos. Corrupti mollitia corporis dolores officia molestiae eum odio.' },
  { id: 'tab-3', title: 'CONTACT', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem consequatur nulla delectus cumque harum culpa esse impedit voluptate quam officiis labore dolor rem, quo possimus vitae ratione doloremque voluptatem molestias quaerat corporis officia similique dolores architecto a. Atque tempore velit natus. Veritatis quia blanditiis ullam.' },
];

const App = () => {
  return (
    <>
      <div className="container">
        <h1 className="title">Tabs with router</h1>
        <nav>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" exact>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/tabs">Tabs</NavLink>
            </li>
          </ul>
        </nav>
        <Route
          exact
          path="/"
          render={() => (
            <h2 className="display-4">Home Page</h2>
          )}
        />
        <Route
          path="/tabs/:tabId?"
          render={({ match }) => (
            <Tabs tabs={tabs} currentTabId={match.params.tabId} />
          )}
        />
      </div>
    </>
  );
};

export default App;
