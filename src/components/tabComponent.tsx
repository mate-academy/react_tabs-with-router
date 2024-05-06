import classNames from 'classnames';
import { Tab } from '../types/Tab';
import { Link, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { TabsContext } from '../context/tabsContext';

interface TabProps {
  tab: Tab;
}

export const TabComponent: React.FC<TabProps> = ({ tab }) => {
  const { tabId } = useParams();

  const { setCurrentTab } = useContext(TabsContext);

  return (
    <li
      onClick={() => setCurrentTab(tab)}
      data-cy="Tab"
      className={classNames({
        'is-active': tab.id === tabId,
      })}
    >
      <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
    </li>
  );
};
