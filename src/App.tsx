import React from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import {
  Navigate, NavLink, Route, Routes,
} from 'react-router-dom';
import { TabsPage } from './components/TabsPage';

const App: React.FC = () => {
  const activeClass = ({ isActive }: { isActive: boolean }) => {
    return (
      isActive
        ? 'navbar-item isActive'
        : 'navbar-item'
    );
  };

  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav className="navbar is-fixed-top has-background-light" data-cy="nav">
        <div className="navbar-menu">
          <div className="navbar-start">
            <NavLink to="/" className={activeClass}>Home</NavLink>
            <NavLink to="/tabs" className={activeClass}>Tabs</NavLink>
          </div>
        </div>
      </nav>

      <div className="section">

        <Routes>
          <Route path="/" element={<h1 className="title">Home page</h1>} />
          <Route path="*" element={<h1 className="title">Page not found</h1>} />
          <Route path="home" element={<Navigate to="/" />} />
          <Route path="tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabID" element={<TabsPage />} />
          </Route>
        </Routes>

      </div>
    </>
  );
};

export default App;
