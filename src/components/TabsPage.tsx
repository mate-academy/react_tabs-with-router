import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { tabs } from '../api/tabs';

export const TabsPage = () => {
  const { tabId } = useParams();
  const selectedTabId = tabId ? `${tabId}` : '';
  const selectedTab = tabs.find(({ id }) => id === selectedTabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              key={id}
              data-cy="Tab"
              className={classNames({
                'is-active': selectedTabId === id,
              })}
            >
              <Link to={`/tabs/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab ? selectedTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
