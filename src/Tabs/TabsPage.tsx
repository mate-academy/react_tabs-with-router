import { Link, useParams } from 'react-router-dom';
import { Tabs, tabs } from '../../../react_tabs/src/App';

export const TabsPage = () => {
  const { tabId } = useParams<{ tabId?: string }>();
  const activeTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="section">
      <h1 className="title">Tabs page</h1>

      <Tabs tabs={tabs} activeId={tabId} />

      <div className="tabs is-boxed">
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

      <div className="block" data-cy="TabContent">
        {activeTab ? (
          <>
            <p>{activeTab.content}</p>
          </>
        ) : (
          'Please select a tab'
        )}
      </div>
    </div>
  );
};
