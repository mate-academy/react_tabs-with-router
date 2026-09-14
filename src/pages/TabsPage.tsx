import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { tabsFromServer } from '../utils/tabs';

export const TabsPage = () => {
  const { tabId } = useParams();
  const selectedTab = tabsFromServer.find(tab => tab.id === tabId);

  useEffect(() => {
    document.title = 'Tabs page';
  }, []);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabsFromServer.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={tab.id === tabId ? 'is-active' : ''}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div data-cy="TabContent">
        {selectedTab ? selectedTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
