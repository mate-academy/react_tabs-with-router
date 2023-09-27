import { Link, Outlet, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { tabs } from './services/tabs';

export const TabsPage = () => {
  const { tabId } = useParams();
  const selectedTabId = tabId;

  const selectedTabContent = tabs
    .find(tab => tab.id === selectedTabId)?.content || 'Please select a tab';

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              key={id}
              data-cy="Tab"
              className={classNames({ 'is-active': selectedTabId === id })}
            >
              <Link to={`/tabs/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTabContent}
      </div>

      <Outlet />
    </>
  );
};
