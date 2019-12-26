import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './App.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useRouteMatch,
} from 'react-router-dom';

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

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className="nav__link"
              >
              Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/tabs"
                className="nav__link"
              >
              Tabs
              </NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/tabs">
            <Tabs />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Tabs() {
  const { path, url } = useRouteMatch();
  const [text, setText] = useState('');

  return (
    <div>
      <h2>Tabs</h2>
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
          >
            <Link
              to={`${url}/${tab.id}`}
              onClick={() => setText(tab.content)}
              className="tab"
            >
              {tab.title}
            </Link>
          </li>
        ))}
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please make you choice.</h3>
        </Route>
        <Route path={`${path}/:tabId`}>
          <Topic text={text} />
        </Route>
      </Switch>
    </div>
  );
}

function Topic({ text }) {
  return (
    <div>
      <h3>{text}</h3>
    </div>
  );
}

Topic.propTypes = { text: PropTypes.string.isRequired };

export default App;
