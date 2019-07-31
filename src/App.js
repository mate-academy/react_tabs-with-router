import React from 'react';
import './App.css';
import { Route, Switch, NavLink } from 'react-router-dom';

import Tabs from './components/Tabs';
import Home from './components/Home';

class App extends React.Component {
  state = {
    tabs: [
      { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
      { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
      { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
    ],

    selectedTab: '',
  };

  componentWillMount() {
    if (localStorage.getItem('selectedTab') && this.state.selectedTab === '') {
      this.setState({
        selectedTab: localStorage.getItem('selectedTab'),
      });
    }
  }

  componentDidUpdate() {
    localStorage.setItem('selectedTab', this.state.selectedTab);
  }

  HandleSelect = (id) => {
    this.setState({
      selectedTab: id,
    });
  };

  render() {
    const { tabs, selectedTab } = this.state;

    return (
      <div className="App">
        <nav>
          <ul className="navigation">
            <li>
              <NavLink
                to="/"
                exact
                className="navigation__link"
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/tabs"
                className="navigation__link"
                onClick={() => { this.setState({ selectedTab: '' }); }}
              >
                Tabs
              </NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route
            path="/"
            exact
            component={Home}
          />

          <Route
            path="/tabs"
            render={() => (
              <Tabs
                tabs={tabs}
                onTabSelected={this.HandleSelect}
                selectedTab={selectedTab}
              />
            )}
          />
        </Switch>

      </div>
    );
  }
}

export default App;
