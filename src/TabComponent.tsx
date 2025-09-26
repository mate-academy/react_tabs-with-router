import { Link, useParams } from 'react-router-dom';
import { Tab } from './types/Tab';

type TabProps = {
  tab: Tab;
};

export const TabComponent: React.FC<TabProps> = ({ tab }) => {
  const { tabId } = useParams<{ tabId: string }>();
  const isActive = tabId === tab.id;

  return (
    <li data-cy="Tab" className={isActive ? 'is-active' : ''}>
      <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
    </li>
  );
};
