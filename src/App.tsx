import React from 'react';
import {
  NavLink,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import './App.scss';
import { HomePage } from './HomePage';
import { TabsPage } from './TabsPage';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="container">
        <nav className="navbar is-warning">
          <NavLink to="/" className="navbar-item">Home page</NavLink>
          <NavLink to="/tabs" className="navbar-item">Tabs page</NavLink>
        </nav>
      </div>

      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="home" element={<Navigate to="/" />} />
                <Route path="tabs" element={<TabsPage tabs={tabs} />} />
                <Route path="tabs/:tabId" element={<TabsPage tabs={tabs} />} />
                <Route
                  path="*"
                  element={
                    <p>Page not found</p>
                  }
                />
              </Routes>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default App;
