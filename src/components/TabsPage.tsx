import { Link, useParams } from 'react-router-dom';
import cn from 'classnames';
import { tabs } from '../store/tabs';

export const TabsPage = () => {
  const { tabId } = useParams();
  const selectedTabId = tabId ? `${tabId}` : '';
  const selectedTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                key={tab.id}
                data-cy="Tab"
                className={cn({ 'is-active': tab.id === selectedTabId })}
              >
                <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {selectedTab ? selectedTab.content : 'Please select a tab'}
        </div>
      </div>
    </div>
  );
};
