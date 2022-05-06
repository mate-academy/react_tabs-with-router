/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import {
  Link,
  Route,
  Routes,
} from 'react-router-dom';
import './App.scss';
import { TabsPage } from './TabsPage';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit pariatur, doloribus quis labore corporis facere aut cupiditate quisquam ipsam quae. Eaque perferendis ab mollitia autem optio modi natus voluptatum ad!' },
  { id: 'tab-2', title: 'Tab 2', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sequi architecto magni saepe ea consequatur fugit reiciendis temporibus voluptate quia neque quibusdam aperiam molestiae illum cupiditate, accusamus dolores corporis cum hic dolor veritatis accusantium maiores.' },
  { id: 'tab-3', title: 'Tab 3', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, ipsum! Animi nesciunt, aut fugiat sed totam culpa a reiciendis libero quibusdam, aliquid incidunt enim officiis natus dolorem praesentium dicta quis commodi? Dolor temporibus maiores at, sunt autem nam, commodi, illo quam numquam quisquam quaerat vero id officiis aut nemo dignissimos?' },
];

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<Tab | null>(null);

  useEffect(() => {
    const result = localStorage.getItem('selectedTab');

    setSelectedTab(result !== null ? JSON.parse(result) : '');
  }, []);

  useEffect(() => {
    localStorage.setItem('selectedTab', JSON.stringify(selectedTab));
  });

  return (
    <div className="App">
      <nav>
        <ul className="nav-bar">
          <li>
            <Link
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/tabs/:tabId?"
            >
              People
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Home page</h1>} />
        <Route
          path="/tabs/:tabId"
          element={(
            <TabsPage
              tabs={tabs}
              onTabSelected={setSelectedTab}
              selectedTab={selectedTab}
            />
          )}
        />
      </Routes>
    </div>
  );
};

export default App;
