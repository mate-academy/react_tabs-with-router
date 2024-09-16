import { Link, Outlet, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { tabItems as tabs } from './tabItems';

export const Tabs = () => {
  const { tabId } = useParams();

  const filterTabs = tabs.filter(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({
                'is-active': tab.id === tabId,
              })}
            >
              <Link to={`./${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <Outlet />

      {(!tabId || !filterTabs.length) && (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </>
  );
};
