import { Link, useParams, useNavigate } from 'react-router-dom';

const tabs = [
  { id: 'tab-1', name: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', name: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', name: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const navigate = useNavigate();
  const { tabId } = useParams<{ tabId?: string }>();
  const activeTab = tabs.find(tab => tab.id === tabId);

  return (
    <div>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={tab.id === tabId ? 'is-active' : ''}
              onClick={() => navigate(`/tabs/${tab.id}`)}
              style={{ cursor: 'pointer' }}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      {activeTab ? (
        <div>
          <p data-cy="TabContent">{activeTab.content}</p>
        </div>
      ) : (
        <p data-cy="TabContent">Please select a tab</p>
      )}
    </div>
  );
};
