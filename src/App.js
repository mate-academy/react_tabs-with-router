import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import './App.css';
import tabs from './api/tabs';
import Tabs from './components/Tabs';

const App = () => (
  <BrowserRouter>
    <NavLink to="/" exact>Get Home</NavLink>
    <NavLink to="/tabs">Show Tabs</NavLink>

    <Route path="/" exact component={HomePage} />
    <Route path="/tabs/:tabId?" exact component={TabsPage} />
  </BrowserRouter>
);

const HomePage = () => <h1>Home page</h1>;

const TabsPage = ({ match }) => (
  <Tabs tabs={tabs} match={match} />
);

TabsPage.propTypes = { match: PropTypes.shape({}).isRequired };

export default App;
