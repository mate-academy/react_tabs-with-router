import { Outlet, Link, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { tabs } from './store/Tabs';

export const Tabs = () => {
  const { tabId } = useParams();

  const selectedTab = tabId;

  const isCorrectTabId = tabs.some(tab => tab.id === tabId);

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                key={tab.id}
                data-cy="Tab"
                className={classNames({
                  'is-active': selectedTab === tab.id,
                })}
              >
                <Link to={`${tab.id}`}>{tab.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        {!isCorrectTabId && (
          <div className="block" data-cy="TabContent">
            Please select a tab
          </div>
        )}

        <Outlet />
      </div>
    </div>
  );
};
