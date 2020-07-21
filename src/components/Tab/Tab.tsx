import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import './Tab.css';

interface Props {
  title: string;
  tabId: string;
}

export const Tab: FC<Props> = (props) => {
  const { title, tabId } = props;

  return (
    <NavLink
      to={`/tabs/${tabId}`}
      exact
      className="tab"
      activeClassName="tab--active"
    >
      {title}
    </NavLink>
  );
};
