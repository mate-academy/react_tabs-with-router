import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { NotFoundPage } from './components/NotFoundPage';
import { Home } from './components/Home';
import { TabsPage } from './components/TabsPage';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const [selectedTabId, setSelectedTabId] = useState<string | null>(null);

  const handleSelectedTab = (tabId: string) => {
    setSelectedTabId(tabId);
  };

  return (
    <Router>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              Home
            </Link>
            <Link to="/tabs" className="navbar-item">
              Tabs
            </Link>
          </div>
        </div>
      </nav>

      <div className="section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="tabs"
            element={
              <TabsPage
                selectedTabId={selectedTabId}
                handleSelectedTab={handleSelectedTab}
              />
            }
          >
            <Route
              index
              element={
                <TabsPage
                  selectedTabId={selectedTabId}
                  handleSelectedTab={handleSelectedTab}
                />
              }
            />
            <Route
              path=":tabId"
              element={
                <TabsPage
                  selectedTabId={selectedTabId}
                  handleSelectedTab={handleSelectedTab}
                />
              }
            />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
};
