import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';
import cn from 'classnames';

interface Props {
  tabs: Tab[]
}

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const selectedTabId = tabId || '';
  const selectedTab = tabs.find((tab) => selectedTabId === tab.id);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              key={id}
              data-cy="Tab"
              className={cn({ 'is-active': id === selectedTabId })}
            >
              <Link to={`/tabs/${id}`} data-cy="TabLink">
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab ? selectedTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
