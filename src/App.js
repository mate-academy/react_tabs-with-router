import React from 'react';
import {
  BrowserRouter,
  Route,
  NavLink,
  Switch,
} from 'react-router-dom';

import './App.css';
import Tabs from './components/Tabs';
import Home from './components/Home';

class App extends React.Component {
  state = {
    tabs: [
      { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
      { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
      { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
    ],
    activeTabId: 0,
  };

  handleTabSelected = (index) => {
    this.setState({
      activeTabId: index,
    });
  };

  render() {
    const { tabs, activeTabId } = this.state;

    return (
      <BrowserRouter>
        <div className="App">

          <nav>
            <ul className="nav">
              <li><NavLink className="navlink" to="/" exact>Home</NavLink></li>
              <li><NavLink className="navlink" to="/tabs/">Tabs</NavLink></li>
            </ul>
          </nav>

          <Switch>

            <Route
              path="/"
              exact
              component={Home}
            />

            <Route
              path="/tabs/"
              component={() => (
                <Tabs
                  tabs={tabs}
                  activeTabId={activeTabId}
                  handleTabSelected={this.handleTabSelected}
                />
              )}
            />

          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
