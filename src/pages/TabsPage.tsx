import { tabs } from '../types/tabs';
import { useParams, Link } from 'react-router-dom';

export const TabsPage = () => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="section">
      <div className="container"></div>
      <div className="tabs is-boxed">
        <h1 className="title">Tabs page</h1>
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={tab.id === tabId ? 'is-active' : ''}
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
  );
};
