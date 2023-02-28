import React from 'react';
import classNames from 'classnames';
import { useParams } from 'react-router-dom';
import { tabs } from '../../api/tabs';
import { VisibleTab } from '../VisibleTab';
import { TabLink } from '../TabLink';

export const TabsPage = React.memo(() => {
  const { tabId = '0' } = useParams();

  const selectedTab = tabs.find(tab => tab.id === tabId) || null;

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={classNames({ 'is-active': tab.id === tabId })}
            >
              <TabLink tab={tab} />
            </li>
          ))}
        </ul>
      </div>

      <VisibleTab selectedTab={selectedTab} />
    </>
  );
});
