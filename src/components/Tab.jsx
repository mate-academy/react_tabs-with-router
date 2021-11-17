import React from 'react';
import { Link } from 'react-router-dom';

import './Tab.scss';

export const Tab = () => (
  <nav>
    <div>
      <div>
        <Link to="/" className="Home">
          Home
        </Link>
        <Link to="/tabs" className="Tabs">
          Tabs
        </Link>
      </div>
    </div>
  </nav>
);
