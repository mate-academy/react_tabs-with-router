import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
  to: string;
  linkText: string;
};

type LinkState = {
  isActive: boolean;
};

type GetNavItemClassesFunc = (linkState: LinkState) => string;

export const PageNavLink: React.FC<Props> = ({ to, linkText }) => {
  const getClasses: GetNavItemClassesFunc = ({ isActive }) => {
    return classNames('navbar-item', {
      'is-active': isActive,
    });
  };

  return (
    <NavLink
      to={to}
      className={getClasses}
    >
      {linkText}
    </NavLink>
  );
};
