import React from 'react';
import { NavLink } from 'react-router-dom';

export function Navigation() {
  return (
    <div>
      <NavLink to="/" exact active> Home</NavLink>
      <NavLink to="/tabs/:tabsId" active> Tabs</NavLink>
    </div>

  );
}
