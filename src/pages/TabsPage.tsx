import { Link, Outlet, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { useTabs } from '../store/TabsContext';

export const TabsPage = () => {
  const tabs = useTabs();
  const { tabId } = useParams();

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={classNames({ 'is-active': tabId === tab.id })}
            >
              <Link
                to={`${tab.id}`}
              >
                { tab.title }
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {!tabId && (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}

      <Outlet />
    </div>
  );
};
