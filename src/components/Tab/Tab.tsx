import { FC } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

type Props = {
  isActive: boolean,
  id: string,
  title: string,
};

export const TabComponent: FC<Props> = ({ isActive, id, title }) => (
  <li
    className={
      classNames({ 'is-active': isActive })
    }
    data-cy="Tab"
  >
    <NavLink
      to={`../${id}`}
      data-cy="TabLink"
    >
      {title}
    </NavLink>
  </li>
);
