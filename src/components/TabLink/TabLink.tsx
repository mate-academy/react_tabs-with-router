import { FC } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tab: Tab,
  isActive: boolean,
};

export const TabLink: FC<Props> = ({ tab, isActive }) => {
  const { id, title } = tab;

  return (
    <li
      data-cy="Tab"
      className={classNames({
        'is-active': isActive,
      })}
    >
      <Link to={`../${id}`}>{title}</Link>
    </li>
  );
};
