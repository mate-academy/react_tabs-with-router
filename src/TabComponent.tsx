import { Link, useParams } from 'react-router-dom';
import { Tab } from './types/Tab';

type TabProps = {
  tab: Tab;
  setSelectedTab: (tab: Tab) => void;
};

export const TabComponent: React.FC<TabProps> = ({ tab, setSelectedTab }) => {
  const { tabId } = useParams<{ tabId: string }>();
  const isActive = tabId === tab.id;

  return (
    <li data-cy="Tab" className={isActive ? 'is-active' : ''}>
      <Link to={`/tabs/${tab.id}`} onClick={() => setSelectedTab(tab)}>
        {tab.title}
      </Link>
    </li>
  );
};
