import { Link, Outlet, useParams } from 'react-router-dom';
import classNames from 'classnames';

import { tabs } from '../services/tabs';

export const TabsPage = () => {
  const { tabId } = useParams();
  const selectedTabId = tabId || 0;

  const isTabSelected = tabs.some(tab => tab.id === selectedTabId);
  const text = tabs.find(tab => tab.id === selectedTabId)?.content;

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              key={id}
              data-cy="Tab"
              className={classNames({ 'is-active': id === tabId })}
            >
              <Link
                to={`../${id}`}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {!isTabSelected ? (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      ) : (
        <div className="block" data-cy="TabContent">
          {text}
        </div>
      )}

      <Outlet />
    </>
  );
};
