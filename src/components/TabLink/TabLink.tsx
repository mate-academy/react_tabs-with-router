import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  title:string;
  id:string;
  tabId:string;
};

export const TabLink: React.FC<Props> = ({
  title,
  id,
  tabId,
}) => {
  return (
    <li
      data-cy="Tab"
      className={classNames({ 'is-active': tabId === id })}
    >
      <Link
        to={`/tabs/${id}`}
        data-cy="TabLink"
      >
        {title}
      </Link>
    </li>
  );
};
