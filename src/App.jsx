import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

import './App.scss';
import { TabsPage } from './components/TabsPage';

/*
import { RouteComponentProps } from 'react-router-dom';

type TabsPageProps = React.FC<RouteComponentProps<{ tabId: string }>>;
const TabsPage: TabsPageProps = ({ match }) => {...};

or

import { useParams } from 'react-router-dom';

const TabsPage = () => {
  const { tabId } = useParams<{ tabId: string }>();
  ...
};
*/

const App = () => (
  <div className="App">
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink
          to="/"
          className="navbar-item is-tab"
          activeClassName="is-active"
          exact
        >
          Home
        </NavLink>

        <NavLink
          to="/tabs"
          className="navbar-item is-tab"
          activeClassName="is-active"
        >
          Tabs
        </NavLink>

        <NavLink
          to="/about"
          className="navbar-item is-tab"
          activeClassName="is-active"
        >
          About us
        </NavLink>
      </div>
    </nav>

    <Switch>
      <Route path="/" exact>
        <h1 className="m-4">Home page</h1>
      </Route>
      <Route path="/tabs/:tabId?" component={TabsPage} />
      <Route path="/about">
        <h1 className="m-4">Something about someone</h1>
      </Route>

      <h2>No such page</h2>
    </Switch>
  </div>
);

export default App;
