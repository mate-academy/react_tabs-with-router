import { NavLink, Outlet, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { tabs } from '../tabs';

export const TabsPage: React.FC = () => {
  const { tabId } = useParams();
  const selectedTabId = tabId || null;
  const selectedTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <>
      <Outlet />
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={classNames({
                'is-active': tabId === tab.id,
              })}
            >
              <NavLink to={`/tabs/${tab.id}`}>{tab.title}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      {selectedTab ? (
        <div className="block" data-cy="TabContent">
          {selectedTab?.content}
        </div>
      ) : (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </>
  );
};
