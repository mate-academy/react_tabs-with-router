import { Link, useParams } from 'react-router-dom';
import { tabs } from '../data/tabs';

export const Tabs = () => {
  const { tabId } = useParams();

  const activeTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="tabs-container">
      <div className="tabs">
        <ul>
          {tabs.map(tab => (
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
        {activeTab ? activeTab.content : 'Please select a tab'}
      </div>
    </div>
  );
};
