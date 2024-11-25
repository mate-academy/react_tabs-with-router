import React from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import cn from 'classnames';
import { Link } from 'react-router-dom';

type Props = {
  id: string;
  title: string;
  isActive: boolean;
};

export const Tab: React.FC<Props> = ({ id, title, isActive }) => {
  return (
    <>
      <li data-cy="Tab" className={cn({ 'is-active': isActive })}>
        <Link to={`/tabs/${id}`}>{title}</Link>
      </li>
    </>
  );
};
