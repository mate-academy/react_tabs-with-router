import React from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom';
import API_DATA from './api/API_DATA';
import Tabs from './components/Tabs';

class App extends React.Component {
  state = {
    tabs: API_DATA,
  };

  render() {
    const { tabs } = this.state;

    return (
        <div className="App">
          <nav>
            <ul className="navigator">
              <li className="navigator-l">
                <NavLink
                  activeClassName="active-nav"
                  className="navigator-link"
                  to="/"
                  exact
                >
                  Home Page
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="active-nav"
                  className="navigator-link"
                  to="/tabs"

                >
                  Tabs
                </NavLink>
              </li>
            </ul>
          </nav>

          <Route
            exact
            path="/"
            render={() => (
              <div className="home-page-content" />
            )}
          />
          <Route
            path="/tabs/:id?"
            render={({ match }) => (
              <div>
                <Tabs
                  tabs={tabs}
                  tabId={match.params.id}
                />
              </div>
            )}
          />
        </div>
    );
  }
}

export default App;
