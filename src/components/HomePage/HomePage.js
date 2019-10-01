import React from 'react';
import { NavLink } from 'react-router-dom';

const HomePage = () => (
  <>
    <NavLink to="/" exact>
      <h1>Home page</h1>
    </NavLink>
    <NavLink to="/tabs">
      <h1>TabsPage</h1>
    </NavLink>
  </>
);

export default HomePage;
