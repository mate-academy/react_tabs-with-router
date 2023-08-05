import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

type List = {
  tab: Tab,
};

export const TabsList: React.FC<List> = ({ tab }) => {
  const { tabId } = useParams();
  const selectedTabId = tabId || 0;

  return (
    <li
      key={tab.id}
      data-cy="Tab"
      className={classNames(
        { 'is-active': selectedTabId === tab.id },
      )}
    >
      <Link to={`/tabs/${tab.id}`}>
        {tab.title}
      </Link>
    </li>
  );
};
