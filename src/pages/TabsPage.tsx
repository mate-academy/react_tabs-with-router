import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { tabs } from '../api/tabs';

export const TabsPage = () => {
  const { tabId } = useParams();

  const selectedTab = tabs.find(tab => tab.id === tabId)
    ?.content
    || 'Please select a tab';

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(
            (tab) => (
              <li
                data-cy="Tab"
                className={classNames({ 'is-active': tab.id === tabId })}
              >
                <Link
                  to={`/tabs/${tab.id}`}
                >
                  {tab.title}
                </Link>
              </li>
            ),
          )}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab}
      </div>
    </>
  );
};
