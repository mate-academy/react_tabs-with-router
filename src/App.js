/* eslint-disable react/jsx-max-props-per-line */
/* eslint-disable-next-line react/jsx-first-prop-new-line */
/* eslint-disable react/jsx-first-prop-new-line */
import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Tabs from './Tabs';

class App extends Component {
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
        <header>
          <ul className="nav-links">
            <li>
              <NavLink className="nav-item" to="/" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-item" to="/tabs">
                Tabs
              </NavLink>
            </li>
          </ul>
        </header>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/tabs/:id?"
            render={props => (
              <Tabs tabs={tabs} id={props.match.params.id} />
            )}
          />
        </Switch>
      </>
    );
  }
}

export default App;
