import classNames from 'classnames';
import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';

import { tabs } from './utils/tabs';

export const Tabs = () => {
  const { tabId } = useParams();

  const selectedTab = useMemo(
    () => tabs.find(tab => tab.id === tabId),
    [tabId],
  );

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={classNames({ 'is-active': tabId === tab.id })}
              key={tab.id}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab ? selectedTab.content : 'Please select a tab'}
      </div>
    </div>
  );
};
