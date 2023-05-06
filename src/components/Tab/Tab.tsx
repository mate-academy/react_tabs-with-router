import { FC } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

type Props = {
  id: string;
  title: string;
  isActive: boolean;
};

export const Tab: FC<Props> = ({ id, title, isActive }) => (
  <li
    key={id}
    data-cy="Tab"
    className={classNames(
      { 'is-active': isActive },
    )}
  >
    <Link to={`/tabs/${id}`}>
      {title}
    </Link>
  </li>
);
