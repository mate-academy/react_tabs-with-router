import React from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export const Header = () => (
  <Menu>
    <Menu.Item>
      <NavLink
        to="/"
        exact
      >
        Home
      </NavLink>
    </Menu.Item>
    <Menu.Item>
      <NavLink
        to="/tabs"
      >
        Tabs
      </NavLink>
    </Menu.Item>
  </Menu>
);
