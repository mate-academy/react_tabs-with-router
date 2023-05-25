import classNames from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import React from 'react';
import { Tab } from '../types/Tab';

type Props = {
  to?: string,
  navText?: string,
  nestingLevel: number,
  chosenTabId?: string | undefined,
  tab?: Tab,
};

export const PageNavLink: React.FC<Props> = ({
  to = '', navText = '', nestingLevel, chosenTabId, tab,
}) => {
  if (nestingLevel === 1) {
    return (
      <NavLink
        className={({ isActive }) => classNames(
          {
            'navbar-item': nestingLevel === 1,
          }, { 'is-active': isActive },
        )}
        to={to}
      >
        {navText}
      </NavLink>
    );
  }

  return (
    <li
      data-cy="Tab"
      key={tab?.id}
      className={
        classNames({ 'is-active': tab?.id === chosenTabId })
      }
    >
      <Link to={`/tabs/${tab?.id}`}>{tab?.title}</Link>
    </li>
  );
};
