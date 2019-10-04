import React from 'react';
import './App.scss';
import {
  BrowserRouter,
  Route,
  NavLink,
  Link,
  Switch,
} from 'react-router-dom';
import PropTypes from 'prop-types';

const App = () => (
  <div className="wrapper">
    <BrowserRouter>
      <nav className="main-nav">
        <li>
          <NavLink
            to="/"
            exact
            className="main-nav__link"
            activeClassName="main-nav__active"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tabs"
            className="main-nav__link"
            activeClassName="main-nav__active"
          >
            Tabs
          </NavLink>
        </li>
      </nav>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/tabs/:tabId?/" component={TabsPage} />
      </Switch>

    </BrowserRouter>
  </div>
);

const HomePage = () => <h1>Home page</h1>;

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
  { id: 'tab-4', title: 'Tab 4', content: 'Some text 4' },
];

const TabContent = ({ fromAdress }) => {
  let b = [];

  if (fromAdress === undefined
      || tabs.filter(tab => tab.id === fromAdress).length === 0) {
    return 'Pick a tab';
  }

  b = tabs.filter(tab => tab.id === fromAdress);

  return b[0].content;
};

const TabsPage = ({ match }) => (
  <>
    <h1>Tabs</h1>
    <Tabs
      currentTabId={match.params.tabId}
    />
  </>
);

const Tabs = ({ currentTabId }) => (
  <div className="tabs">
    <ul className="tabs__list">
      {tabs.map(tab => (
        <li
          style={{
            padding: '5px 5px 5px 5px',
            textDecoration: 'none',
            color:
            currentTabId === tab.id
              ? 'red'
              : '',
          }}
          key={tab.id}
        >
          <Link className="tab-title" to={`/tabs/${tab.id}`}>{tab.id}</Link>
        </li>
      ))}
    </ul>
    <p className="tab-content">
      <TabContent fromAdress={currentTabId} />
    </p>
  </div>
);

export default App;

TabsPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      tabId: PropTypes.string,
    }),
  }).isRequired,
};

Tabs.propTypes = {
  currentTabId: PropTypes.string.isRequired,
};
