import classNames from 'classnames';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  id: string;
  title: string;
  selectedTabId?: string;
}

export const TabItem: FC<Props> = ({ id, title, selectedTabId }) => (
  <li
    data-cy="Tab"
    key={id}
    className={classNames({ 'is-active': selectedTabId === id })}
  >
    <Link to={`/tabs/${id}`}>{title}</Link>
  </li>
);
