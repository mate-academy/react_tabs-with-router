import { Link } from 'react-router-dom';
import type { Tab } from '../../data/tabs';

type TabItemProps = {
  tab: Tab;
  isActive: boolean;
};

export const TabItem = ({ tab, isActive }: TabItemProps) => (
  <li className={isActive ? 'is-active' : ''} data-cy="Tab">
    <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
  </li>
);
