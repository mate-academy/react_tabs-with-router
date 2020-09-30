import React from 'react';
import './App.scss';
import {
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import HomePage from './HomePage';
import TabsPage from './TabsPage';

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><NavLink to="/" exact>Home</NavLink></li>
          <li><NavLink to="/tabs">Tabs</NavLink></li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route
          path="/tabs/:tabsId?"
          render={({ match }) => (
            <TabsPage tabsId={match.params.tabsId} />
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
