import './App.scss';
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

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

// const tabs = [
//   { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
//   { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
//   { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
// ];

const App = () => (
  <div className="App container">
    <NavLink
      to="/"
      className="button"
    >
      Home
    </NavLink>
    <NavLink
      to="tabs"
      className="button"
    >
      Tabs
    </NavLink>
    <Outlet />
  </div>
);

export default App;
