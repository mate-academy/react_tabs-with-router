import React from 'react';
import {
  BrowserRouter,
  Route,
  NavLink,
  Switch,
} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import TabsPage from './components/TabsPage/TabsPage';
import './App.css';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <BrowserRouter>
    <div className="app">
      <NavLink className="start-page-link" to="/" exact> Home </NavLink>
      <NavLink className="start-page-link" to="/tabs"> Tabs </NavLink>
    </div>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route
        path="/tabs/:id?"
        render={({ match }) => (<TabsPage tabs={tabs} match={match} />)}
      />
    </Switch>
  </BrowserRouter>
);

export default App;
