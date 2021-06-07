import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.scss';
import 'bulma';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';

const App = () => (
  <div className="App">
    <h1>Tabs with router</h1>
    <Header />
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            <Switch>
              <Route
                path="/tabs/:tabId?"
                component={TabsPage}
              />
              <Route path="/" exact>
                <HomePage />
              </Route>
              <Redirect path="/home" to="/" />
              <p>Not found Page</p>
            </Switch>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default App;
