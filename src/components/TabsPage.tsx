import { Link, Outlet, useParams } from 'react-router-dom';

interface TabsPageProps {
  tabs: { id: string; title: string }[];
}

export const TabsPage = ({ tabs }: TabsPageProps) => {
  const { tabId } = useParams<{ tabId?: string }>();

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

        <Outlet />
      </div>
    </div>
  );
};
