import { Link, useParams } from 'react-router-dom';
import cn from 'classnames';
import { Tab } from '../../types/Tab';

interface Props {
  tab: Tab
}

export const Tabs: React.FC<Props> = ({ tab }) => {
  const { tabId } = useParams();
  const currentTabId = tabId;

  return (

    <li data-cy="Tab" className={cn({ 'is-active': currentTabId === tab.id })}>
      <Link to={`/tabs/${tab.id}`}>
        {tab.title}
      </Link>
    </li>
  );
};
