import React from 'react';
import { NavLink, Redirect, Route, Switch, withRouter } from 'react-router-dom';

import { TabsPage } from './TabsPage';

import './App.scss';

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

export const App = withRouter(
  ({ history }) => {
    const select = history.location.pathname;

    return (
      <>
        <header className="header">
          <nav className="nav">
            <NavLink
              className="nav-link"
              activeClassName="nav-link-active"
              exact
              to="/"
            >
              <h2>Home</h2>
            </NavLink>
            <NavLink
              className="nav-link"
              activeClassName="nav-link-active"
              to="/tabs"
            >
              <h2>Tabs</h2>
            </NavLink>
          </nav>
        </header>
  
        <main className="main">
          <div className="block">
            <Switch>
              <Route path="/" exact>
                <h1>Home page</h1>
              </Route>
  
              <Route path="/tabs/:tabsId?" component={TabsPage} />
  
              <Redirect path="/home" to="/"></Redirect>
              <Redirect path="/tab" to="/tabs"></Redirect>
  
              <h1>Page not found</h1>
            </Switch>
          </div>
        </main>
      </>
    )
  }
);
