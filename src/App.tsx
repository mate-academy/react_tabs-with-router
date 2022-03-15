import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

import TabsPage from './components/TabsPage/TabsPage';

import { Tab } from './types/Tab';

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

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => (
  <div className="App">
    <nav className="nav">
      <NavLink
        to="/"
        style={({ isActive }) => ({ color: isActive ? 'red' : '' })}
      >
        Home
      </NavLink>
      <NavLink
        to="/tabs"
        style={({ isActive }) => ({ color: isActive ? 'red' : '' })}
      >
        Tabs
      </NavLink>
    </nav>

    <Routes>
      <Route path="/" element={<h1>Home page</h1>} />
      <Route path="tabs" element={<TabsPage tabs={tabs} />}>
        <Route path=":tabId" element={<TabsPage tabs={tabs} />} />
      </Route>
    </Routes>
  </div>
);

export default App;
