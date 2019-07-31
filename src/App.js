import React from 'react';
import './App.css';
import { Route, NavLink, BrowserRouter } from 'react-router-dom';
import API_DATA from './api/API_DATA';
import Tabs from './components/Tabs';

class App extends React.Component {
  state = {
    tabs: [],
    currentContent: [],
  };

  async componentDidMount() {
    const tabsWithIds = API_DATA.map((tab, index) => ({
      id: index + 1,
      ...tab,
    }));

    this.setState({
      tabs: tabsWithIds,
    });
  }

  hendleClickShowContent = (id) => {
    this.setState(prevState => ({
      currentContent: prevState.tabs.find(tab => tab.id === id),
    }));
  }

  render() {
    const { tabs, currentContent } = this.state;

    return (
      <BrowserRouter>
        <div className="App">
          <nav>
            <ul className="navigator">
              <li className="navigator-l">
                <NavLink
                  activeClassName="active-nav"
                  className="navigator-link"
                  to="/"
                  exact
                >
Home Page
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="active-nav"
                  className="navigator-link"
                  to="/tabs"
                  exact
                >
Tabs
                </NavLink>
              </li>
            </ul>
          </nav>

          <Route
            exact
            path="/"
            render={() => (
              <div className="home-page-content" />
            )}
          />
          <Route
            exact
            path="/tabs"
            render={() => (
              <div>
                <Tabs
                  tabs={tabs}
                  hendleClickShowContent={this.hendleClickShowContent}
                  currentContent={currentContent}
                />
              </div>
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
