import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import Tabs from './components/Tabs';
import './App.css';

class App extends React.Component {
  state = {
    tabs: [
      { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
      { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
      { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
    ],
  };

  render() {
    const { tabs } = this.state;

    return (
      <>
        <nav>
          <ul className="main-nav">
            <li>
              <NavLink to="/" exact>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/tabs">
                Tabs
              </NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route
            path="/"
            exact
            component={() => (<h1>Home</h1>)}
          />

          <Route
            path="/tabs"
            component={() => (
              <Tabs tabs={tabs} />
            )}
          />
        </Switch>
      </>
    );
  }
}

export default App;
