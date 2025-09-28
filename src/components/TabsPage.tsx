import { Link, useParams } from 'react-router-dom';
import { tabs } from '../data/tabs';

export const TabsPage = () => {
  const { tabId } = useParams();

  const activeTab = tabs.find(t => t.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
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

      <div>
        {tabId ? (
          activeTab ? (
            <div data-cy="TabContent">{activeTab.content}</div>
          ) : (
            <div data-cy="TabContent">Please select a tab</div>
          )
        ) : (
          <div data-cy="TabContent">Please select a tab</div>
        )}
      </div>
    </>
  );
};
