import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import {
  BrowserRouter,
  NavLink,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { Tabs } from './Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  return (
    <BrowserRouter>
      <>
        <nav
          className="navbar is-light is-fixed-top is-mobile has-shadow"
          data-cy="Nav"
        >
          <div className="container">
            <div className="navbar-brand">
              <NavLink
                exact
                to="/"
                className="navbar-item"
                activeClassName="is-active"
              >
                Home
              </NavLink>

              <NavLink
                to="/tabs"
                className="navbar-item"
                activeClassName="is-active"
              >
                Tabs
              </NavLink>
            </div>
          </div>
        </nav>

        <div className="section">
          <div className="container">
            <Switch>
              <Route exact path="/">
                <h1 className="title">Home page</h1>
              </Route>

              <Route exact path="/home">
                <Redirect to="/" />
              </Route>

              <Route exact path="/tabs/:tabId?" component={Tabs} />

              <Route>
                <h1 className="title">Page not found</h1>
              </Route>
            </Switch>
          </div>
        </div>
      </>
    </BrowserRouter>
  );
};
