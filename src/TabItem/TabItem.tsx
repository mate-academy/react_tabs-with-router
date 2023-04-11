import { FC } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from '../types/Tab';

type Props = {
  tab: Tab;
  isSelected: boolean;
};

export const TabItem: FC<Props> = ({ tab, isSelected }) => (
  <li
    data-cy="Tab"
    className={classNames({
      'is-active': isSelected,
    })}
  >
    <Link to={`../${tab.id}`}>
      {tab.title}
    </Link>
  </li>
);
