import { Link, Outlet, useParams } from 'react-router-dom';
import { tabs } from '../store/context';
import classNames from 'classnames';

export const Tabs = () => {
  const { tabId } = useParams();
  const selectedTabId = tabId ? tabId : '';

  return (
    <>
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                key={tab.id}
                data-cy="Tab"
                className={classNames({
                  'is-active': selectedTabId === tab.id,
                })}
              >
                <Link to={`${tab.id}`}>{tab.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <Outlet />
      </div>
    </>
  );
};
