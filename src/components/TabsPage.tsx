import cn from 'classnames';
import { Link, Outlet, useParams } from 'react-router-dom';

import { tabs } from '../App';

export const Tabs = () => {
  const { tabId } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={cn({ 'is-active': tab.id === tabId })}
              key={tab.id}
              data-cy="Tab"
            >
              <Link
                to={tab.id}
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {tabId
        ? <Outlet />
        : (
          <div className="block" data-cy="TabContent">
            Please select a tab
          </div>
        )}

    </>
  );
};
