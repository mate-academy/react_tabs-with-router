import React from 'react';
import './App.css';
import {
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import HomePage from './HomePage';
import TabsPage from './TabsPage';


const App = () => {
  return (
    <div className="App">
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item"><NavLink to="/" exact className="nav__link">Home</NavLink></li>
          <li className="nav__item"><NavLink to="/tabs" className="nav__link">Tabs</NavLink></li>
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
