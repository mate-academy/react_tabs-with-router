import { Link, Outlet, useParams } from 'react-router-dom';
import { useTabs } from '../TabsContext/TabsContext';

export const TabsPage = () => {
  const { tabId } = useParams();
  const tabs = useTabs();

  return (
    <>
      <h1 className="title">Tabs page</h1>

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

      <Outlet />
    </>
  );
};
