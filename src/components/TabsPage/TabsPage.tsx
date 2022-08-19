import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { useMemo } from 'react';
import { tabs } from '../../api/tabs';

export const TabsPage = () => {
  const { tabId } = useParams();
  const selectedTab = useMemo(() => (
    tabs.find(tab => tab.id === tabId)
  ), [tabId]);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="tab"
              className={classNames({
                'is-active': selectedTab && selectedTab.id === tab.id,
              })}
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

      <div className="block" data-cy="tab-content">
        {selectedTab ? selectedTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
