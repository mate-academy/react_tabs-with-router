import { Link, useParams } from 'react-router-dom';
import { tabs } from '../App';
import { Navigation } from './Navigation';

export const TabsPage = () => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId) || null;
  
  return (
    <>
      <h1 className="title">Tabs page</h1>
      <Navigation />

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={tabId === tab.id ? "is-active" : ''}
            >
              <Link to={`${tab.id}`}>
                {tab?.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {selectedTab && selectedTab?.content}
        {!selectedTab && `Please select a tab`}
      </div>
    </>
  );
};
