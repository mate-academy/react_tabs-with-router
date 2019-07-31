import React from 'react';
import './App.css';

import { Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Tabs from './Tabs';

class App extends React.Component {
  state = {
    tabs: [
      { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
      { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
      { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
    ],
    indexItem: 1,
  };

  onTabSelected = (id) => {
    this.setState({ indexItem: id });
  };

  render() {
    const { tabs, indexItem } = this.state;

    return (
      <div className="App">
        <nav>
          <ul>
            <li className="App__nav-link">
              <NavLink to="/home">Home</NavLink>
            </li>
            <li className="App__nav-link">
              <NavLink to="/tabs">Tabs</NavLink>
            </li>
          </ul>
        </nav>

        <Route path="/home" component={Home} />
        <Route
          path="/tabs"
          render={({ match }) => (
            <Tabs
              onTabSelected={this.onTabSelected}
              indexItem={indexItem}
              tabs={tabs}
              match={match}
            />
          )}
        />

      </div>
    );
  }
}

export default App;
