// App.tsx
import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link, Navigate,
} from 'react-router-dom';
import TabsPage from './TabsPage';
import './App.scss';

const HomePage = () => <h1 className="title">Home page</h1>;

export const App = () => (
  <Router>
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link
            to="/"
            className="navbar-item"
            activeClassName="is-active"
          >
            Home
          </Link>

          <Link
            to="/tabs"
            className="navbar-item"
            activeClassName="is-active"
          >
            Tabs
          </Link>
        </div>
      </div>
    </nav>

    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/tabs/*" element={<TabsPage />} />
      <Route path="*" element={<h1 className="title">Page not found</h1>} />
    </Routes>
  </Router>
);
