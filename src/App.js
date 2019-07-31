import React from 'react';

import './App.css';
import tabsContent from './tabContent';
import Home from './Home';
import Tabs from './Tabs';
import { Route, NavLink } from 'react-router-dom';

class App extends React.Component {
  state = {
    tabs: tabsContent,
    selectedTab: 0,
  };

  handleSelected = (index) => {
    this.setState({ selectedTab: index });
  };

  render() {
    const { tabs, selectedTab } = this.state;

    return (
      <>
        <nav>
          <ul>
            <li className="tabs__item"><NavLink to="/home">Home</NavLink></li>
            <li className="tabs__item"><NavLink to="/tabs">Tabs</NavLink></li>
          </ul>
        </nav>

        <Route path="/home" component={Home} />
        <Route path="/tabs/" render = {({ match }) =>
          <Tabs
            tabs={tabs}
            match={match}
            selectedTab={selectedTab}
            handleSelected={this.handleSelected}
          /> }
        />
      </>
    );
  }
}


export default App;
