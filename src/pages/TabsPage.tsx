import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { tabs } from '../api/tabs';

export const TabsPage = () => {
  const { tabId = 'tab-0' } = useParams();
  const activeTab = tabs.find(tab => tab.id === tabId) || null;

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames({ 'is-active': tab.id === tabId })}
              data-cy="Tab"
              key={tab.id}
            >
              <Link
                to={`/tabs/${tab.id}`}
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab
          ? activeTab.content
          : 'Please select a tab'}
      </div>
    </>
  );
};
