import { Link, Outlet, useParams } from 'react-router-dom';
import classNames from 'classnames';

import { Tabs } from '../../store/Tabs';

export const TabList = () => {
  const { tabId } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {Tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({ 'is-active': tab.id === tabId })}
            >
              <Link to={tab.id}>
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
