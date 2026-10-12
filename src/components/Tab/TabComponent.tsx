import { Link, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';

export const TabComponent = ({ tab }: { tab: Tab }) => {
  const { tabId } = useParams();

  return (
    <li data-cy="Tab" className={tabId === tab.id ? 'is-active' : ''}>
      <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
    </li>
  );
};
