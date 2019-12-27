import React from 'react';
import './App.css';
import {
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom';
import Tabs from './Tabs';
import SelectPage from './SelectPage';

const App = () => (
  <div className="App">
    <HashRouter>
      <SelectPage />
      <section className="tabs__container">
        <Switch>
          <Route path="/tabs/:tabsId?" component={Tabs} />
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </section>
    </HashRouter>
  </div>
);

const HomePage = () => <h1 className="middle">Home page</h1>;

export default App;
