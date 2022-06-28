import React from 'react';
import './App.scss';
import {
  NavLink,
  Route,
  Routes,
} from 'react-router-dom';
import TabsPage from './components/TabsPage';
import HomePage from './components/HomePage';
import TabsContent from './components/TabsContent';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <div className="App">
    <h1>Tabs with router</h1>

    <div className="content">
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route
          path="tabs"
          element={
            <TabsPage tabs={tabs} />
          }
        >
          <Route
            path=":tabId"
            element={<TabsContent />}
          />
        </Route>
      </Routes>
    </div>

    <div className="tab_wrapper">
      <NavLink
        to="/tabs"
        className="button"
      >
        Tabs
      </NavLink>

      <NavLink
        to="/home"
        className="button"
      >
        Home
      </NavLink>
    </div>
  </div>
);

export default App;
