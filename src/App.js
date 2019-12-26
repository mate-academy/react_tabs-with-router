import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';
import TabsPage from './TabsPage';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <nav>
        <ul className="main_ul">
          <li className="home">
            <NavLink className="mainButton" to="/" exact>HomePage</NavLink>
          </li>
          <li><NavLink className="mainButton" to="/tabs">TabsPage</NavLink></li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/tabs" component={TabsPage} />
      </Switch>
    </BrowserRouter>
  </div>
);

const HomePage = () => <h1 className="h1">Home</h1>;

export default App;
