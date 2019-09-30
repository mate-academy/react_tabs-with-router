import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import TabsPage from './components/TabsPage';
import MainNav from './components/MainNav';

const App = () => (
  <div className="App">
    <Router>
      <MainNav />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/tabs/:tabId?" component={TabsPage} />
      </Switch>
    </Router>
  </div>
);

export default App;
