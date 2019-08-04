import React from 'react';
import './App.css';
import {
  Route,
  NavLink,
  HashRouter,
  Switch,
} from 'react-router-dom';
import Home from './Home';
import Tabs from './Tabs';

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
      <div className="App">
        <HashRouter>
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink to="/" exact>Home</NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/tabs">Tabs</NavLink>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              path="/tabs/:tabId?"
              render={({ match }) => (
                <Tabs
                  tabs={tabs}
                  activeTabId={match.params.tabId}
                />
              )}
            />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
