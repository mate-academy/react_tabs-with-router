import { Link, useParams, Outlet } from 'react-router-dom';

export const TabsPage = ({ tabs }: any) => {
  const { tabId } = useParams();

  const selectedTab = tabs.find((tab: any) => tab.id === tabId);

  return (
    <>
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <div className="tabs is-boxed">
          <ul>
            {tabs.map((tab: any) => (
              <li key={tab.id} data-cy="Tab" className={tab.id === tabId ? 'is-active' : ''}>
                <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        {!selectedTab ? (
          <div className="block" data-cy="TabContent">
            Please select a tab
          </div>
        ) : (
          <div className="block" data-cy="TabContent">
            {tabs.find((tab: any) => tab.id === tabId)?.content}
          </div>
        )}

        <Outlet />
      </div>


    </>
  );
};

