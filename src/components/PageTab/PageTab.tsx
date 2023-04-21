import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  id: string;
  title: string;
  selectedTabId: string | null;
};

export const PageTab: React.FC<Props> = ({
  id,
  title,
  selectedTabId,
}) => (
  <li
    key={id}
    data-cy="Tab"
    className={classNames(
      { 'is-active': selectedTabId === id },
    )}
  >
    <Link to={`/tabs/${id}`}>
      {title}
    </Link>
  </li>
);
