import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import 'bulma';

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

const App = () => (
  <div className="App">
    <nav className="navbar">
      <NavLink
        style={({ isActive }) => ({
          color: isActive ? 'blue' : '',
        })}
        className="navbar-item"
        to="/home"
      >
        Home

      </NavLink>
      <NavLink
        style={({ isActive }) => ({
          color: isActive ? 'blue' : '',
        })}
        className="navbar-item"
        to="/tabs"
      >
        Tabs

      </NavLink>
    </nav>
    <Outlet />
  </div>
);

export default App;
