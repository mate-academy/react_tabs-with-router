import React from 'react';
import './App.scss';

import { NavLink, Route } from 'react-router-dom';
import { TabPages } from './TabPages';

// type TabsPageProps = React.FC<Route<{ tabId: string }>>;
// const TabsPage: TabsPageProps = ({ match }) => {...};

/*

or

import { useParams } from 'react-router-dom';

const TabsPage = () => {
  const { tabId } = useParams<{ tabId: string }>();
  ...
};
*/

interface Tabs {
  id: string;
  title: string;
  content: string;
}

const tabs: Tabs[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  return (
    <>
      <div className="navigation">
        <NavLink
          to="/"
          exact
          className="link"
          activeClassName="is-active"
        >
          Home page
        </NavLink>

        <NavLink
          to="/tabs"
          exact
          className="link"
          activeClassName="is-active"
        >
          Tabs
        </NavLink>
      </div>

      <Route path="/" exact>
        <h1 className="tittle">Home page</h1>
      </Route>

      <Route path="/tabs">
        <TabPages tabs={tabs} />
      </Route>
    </>
  );
};

export default App;
