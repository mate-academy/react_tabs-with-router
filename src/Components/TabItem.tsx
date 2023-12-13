import { FC } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { Tab } from '../types/Tab';

interface TabItemProps {
  tab: Tab;
  selectedTabId: string | undefined;
}

export const TabItem: FC<TabItemProps> = ({ tab, selectedTabId }) => (
  <li
    key={tab.id}
    data-cy="Tab"
    className={cn({ 'is-active': selectedTabId === tab.id })}
  >
    <Link to={tab.id}>
      {tab.title}
    </Link>
  </li>
);
