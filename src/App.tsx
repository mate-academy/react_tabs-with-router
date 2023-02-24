import React from 'react';
import { Outlet } from 'react-router-dom';

import { NavBar } from './components/NavBar';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

export const App: React.FC = () => (
  <>
    <NavBar />

    <div className="section">
      <div className="container">
        <Outlet />
      </div>
    </div>
  </>
);
