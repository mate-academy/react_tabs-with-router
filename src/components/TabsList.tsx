import { Link, Outlet, useParams } from 'react-router-dom';
import { tabs } from '../consts';
import classNames from 'classnames';

export const TabsList = () => {
  const { tabId } = useParams();
  const selectedTabId = tabId ? tabId : '';

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={classNames({ 'is-active': selectedTabId === tab.id })}
              key={tab.id}
            >
              <Link to={`${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <Outlet />
    </>
  );
};
