import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { Tab } from '../types/Tab';

type TabItemProps = {
  tab: Tab;
  isActive: boolean;
};

export const TabItem = ({ tab, isActive }: TabItemProps) => (
  <li
    key={tab.id}
    data-cy="Tab"
    className={classNames({ 'is-active': isActive })}
  >
    <Link to={`/tabs/${tab.id}`}>
      {tab.title}
    </Link>
  </li>
);
