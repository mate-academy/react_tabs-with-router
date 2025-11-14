import { Link } from 'react-router-dom';
import { Tab } from '../types/Tab';

type TabProps = {
  tab: Tab;
  selectedTabId: string | null;
};

export const Tabs: React.FC<TabProps> = ({ tab, selectedTabId }) => (
  <li className={tab.id === selectedTabId ? 'is-active' : ''} data-cy="Tab">
    <Link to={`/tabs/${tab.id}`} data-cy="TabLink">
      {tab.title}
    </Link>
  </li>
);
