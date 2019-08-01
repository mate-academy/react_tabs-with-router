import React from 'react';
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import Tabs from './component/Tabs';
import Home from './component/Home';

class App extends React.Component {
  state = {
    tabs: [
      { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
      { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
      { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
    ],
    selectedId: 0,
  };

  selectedTab = (index) => {
    this.setState({
      selectedId: index,
    });
  }

  render() {
    const { tabs, selectedId } = this.state;

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
                tabs={tabs}
                activeTab={selectedId}
                selectedTab={this.selectedTab}
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
