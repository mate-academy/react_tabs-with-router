import React from 'react';
import './App.css';

import {
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

const App = () => (
  <div className="App">
    <Route>
      <ul className="nav">
        <li className="nav__item">
          <NavLink
            to="/"
            className="nav__link"
            activeClassName="nav__link--active"
            exact
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tabs"
            className="nav__link"
            activeClassName="nav__link--active"
            exact
          >
            Tabs Page
          </NavLink>
        </li>
      </ul>
    </Route>

    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/tabs" component={TabsPage} />
    </Switch>
  </div>
);

const HomePage = () => (
  <h2>Welcome to Home page!</h2>
);

const tabs = [
  {
    id: 'tab-1', title: 'Tab 1', content: 'Some text 1',
  },
  {
    id: 'tab-2', title: 'Tab 2', content: 'Some text 2',
  },
  {
    id: 'tab-3', title: 'Tab 3', content: 'Some text 3',
  },
];
const TabsPage = () => <Tabs tabs={tabs} currentTabId="tab-1" />;

const Tabs = () => (
  <>
    <h2>Tabs</h2>

    <div className="tab">
      <div className="tab_buttons">
        {tabs.map(item => (
          <NavLink
            className="tab__link"
            activeClassName="tab__link--active"
            to={`/tabs/${item.id}`}
            key={item.id}
          >
            {item.title}
          </NavLink>
        ))}
      </div>

      <div>
        {tabs.map(item => (
          <Route
            path={`/tabs/${item.id}`}
            key={item.id}
            render={() => (
              <span>{item.content}</span>
            )}
          />
        ))}
      </div>
    </div>
  </>
);

export default App;
