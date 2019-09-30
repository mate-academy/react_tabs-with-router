import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import TabsPage from './components/TabsPage/TabsPage';
import './App.css';

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
      <div className="App">
        <BrowserRouter>
          <NavLink
            exact
            to="/"
            className="link"
            activeClassName="link--active"
          >
            Home
          </NavLink>
          <NavLink
            exact
            to="/tabs"
            className="link"
            activeClassName="link--active"
          >
            Tabs
          </NavLink>
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/tabs/:id?"
            render={({ match }) => <TabsPage match={match} tabs={tabs} />}
          />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
