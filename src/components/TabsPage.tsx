import { Link, useParams } from 'react-router-dom';

interface TabsPageProps {
  tabs: { id: string; title: string; content: string }[];
}

export const TabsPage = ({ tabs }: TabsPageProps) => {
  const { tabId } = useParams<{ tabId: string }>();
  const activeTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => {
              const isActive = tab.id === tabId;

              return (
                <li
                  key={tab.id}
                  className={isActive ? 'is-active' : ''}
                  data-cy="Tab"
                >
                  <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {activeTab ? activeTab.content : 'Please select a tab'}
        </div>
      </div>
    </div>
  );
};
