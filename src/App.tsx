import './App.scss';
import React from 'react';
import {
  Routes, Route, Navigate, NavLink,
} from 'react-router-dom';
import { TabsPage } from './components/TabsPage';
import { TabContent } from './components/TabContent';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <br />
          <NavLink to="/tabs">Tabs</NavLink>
        </nav>
      </header>

      <div className="App">
        <Routes>
          <Route path="/" element={<h1>Home page</h1>} />
          <Route path="/home" element={<Navigate replace to="/" />} />
          <Route path="/tabs" element={<TabsPage tabs={tabs} />}>
            <Route path=":tabsId" element={<TabContent tabs={tabs} />} />
          </Route>
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </div>
    </>
  );
};

export default App;
