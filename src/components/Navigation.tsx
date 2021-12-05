import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation: React.FC = () => (
  <nav className="nav">
    <div className="nav__block">
      <Link to="/" className="nav__link">Home</Link>
      <Link to="/tabs" className="nav__link">Tabs</Link>
    </div>
  </nav>
);
