import { Link, Outlet, useParams } from 'react-router-dom';
import { tabs } from '../api/tabs';
import classNames from 'classnames';

export const TabsPage: React.FC = () => {
  const { tabId } = useParams();
  const selectedTabId = tabId;

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                key={tab.id}
                data-cy="Tab"
                className={classNames({
                  'is-active': tab.id === selectedTabId,
                })}
              >
                <Link to={`../${tab.id}`}>{tab.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <Outlet />

      <div className="block" data-cy="TabContent">
        {tabs.some(tab => tab.id === selectedTabId)
          ? tabs.map(tab => tab.id === selectedTabId && tab.content)
          : 'Please select a tab'}
      </div>
    </>
  );
};

export default TabsPage;
