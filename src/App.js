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
    id: 0,
  };

  onTabSelected = id => this.setState({ id });

  render() {
    const { tabs, id } = this.state;

    return (
      <div className="App">
        <ul className="nav-links">
          <li>
            <NavLink to="/" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/tabs">Tabs</NavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/tabs/:id?"
            render={({ match }) => (
              <Tabs
                onTabSelected={this.onTabSelected}
                tabs={tabs}
                id={id}
                match={match}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
