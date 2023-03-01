import { FC } from 'react';
import { NavBarLink } from '../NavBarLink';

export const NavBar: FC = () => (
  <div className="navbar-brand">
    <NavBarLink linkTitle="Home" linkPath="/" />
    <NavBarLink linkTitle="Tabs" linkPath="/tabs" />
  </div>
);
