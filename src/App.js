import React from 'react';
import './App.css';
import { Route, Switch, NavLink } from 'react-router-dom';
import Tabs from './Tabs';
import Home from './Home';

class App extends React.Component {
  state = {
    tabs: [
      { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
      { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
      { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
    ],
    visibleTab: 0,
  };

  setStyle = (index) => {
    let tabStyle = 'tab';

    tabStyle += index === this.state.visibleTab ? ' selected' : '';

    return tabStyle;
  }

  setVisibleTab = (index) => {
    if (index >= 0 && index !== this.state.visibleTab) {
      this.setState({ visibleTab: index });
    }
  }

  render() {
    const { tabs } = this.state;

    return (
      <div className="App">
        <nav>
          <ul className="panel">
            <li>
              <NavLink
                className="menuItem"
                activeClassName="selected"
                to="/"
                exact
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="menuItem"
                activeClassName="selected"
                to="/tabs"
              >
                Tabs
              </NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={Home} />

          <Route
            path="/tabs/:tabId?"
            render={match =>
              <Tabs
                tabs={tabs}
                setstyle={this.setStyle}
                setVisibleTab={this.setVisibleTab}
                visible={this.state.visibleTab}
                match={match}
              />
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
