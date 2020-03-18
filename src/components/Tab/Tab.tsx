import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { Tab as TabInterface } from '../../constants/types';
import './Tab.css';


interface Props extends Pick<TabInterface, 'id' | 'title'> {
  onClick(): void;
}

export const Tab: FC<Props> = (props) => {
  const { id, title, onClick } = props;

  return (
    <NavLink
      to={`/tabs/${id}`}
      className="tabs-link"
      activeClassName="tabs-link--active"
      onClick={onClick}
    >
      {title}
    </NavLink>
  );
};
