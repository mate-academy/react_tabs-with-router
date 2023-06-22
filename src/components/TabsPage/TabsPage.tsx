import { useMemo } from 'react';
import { Link, useOutletContext, useParams } from 'react-router-dom';
import classNames from 'classnames';

import { Tab } from '../../types/Tab';

export const TabsPage = () => {
  const tabs: Tab[] = useOutletContext();
  const { tabId = '' } = useParams();

  const selectedTab = useMemo(() => {
    return tabs.find(({ id }) => id === tabId);
  }, [tabId]);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames(
                { 'is-active': tabId === tab.id },
              )}
            >
              <Link to={`/tabs/${tab.id}`}>
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab?.content || 'Please select a tab'}
      </div>
    </>
  );
};
