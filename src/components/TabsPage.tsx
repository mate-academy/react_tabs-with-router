import { Link, useParams } from 'react-router-dom';
import { tabs } from '../utils/tabsData';
import cn from 'classnames';

export const TabsPage = () => {
  const { tabId } = useParams();
  const selectedTabId = tabId ? tabId : '';
  const selectedTabContent = tabs.find(
    tab => tab.id === selectedTabId,
  )?.content;

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={cn({ 'is-active': selectedTabId === tab.id })}
              key={tab.id}
            >
              <Link to={`${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTabContent ? selectedTabContent : 'Please select a tab'}
      </div>
    </>
  );
};
