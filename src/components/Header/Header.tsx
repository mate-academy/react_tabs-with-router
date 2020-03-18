import React, { FC } from 'react';

import { NavLinks } from '../NavLinks';

import './Header.css';


export const Header: FC = () => (
  <div>
    <header className="header">
      <h1>Tabs with router</h1>

      <NavLinks />
    </header>
  </div>
);
