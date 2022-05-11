import React from 'react';
import {
  NavLink, Routes, Route, Navigate,
} from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import HomePage from './components/HomePage';

import './App.scss';
import TabsPage from './components/TabsPage';
import { Tabs } from './types/tabs';

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

const tabs: Tabs[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App:React.FC = () => {
  return (
    <div className="App">
      <header>
        <nav className="navbar">
          <NavLink
            className="navbar-item  is-tab"
            to="/"
          >
            Home page
          </NavLink>
          <NavLink
            className="navbar-item is-tab"
            to="/tabs"
          >
            TabsPage
          </NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="tabs/" element={<TabsPage tabs={tabs} />} />
        <Route path="tabs/:tabId" element={<TabsPage tabs={tabs} />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default App;
